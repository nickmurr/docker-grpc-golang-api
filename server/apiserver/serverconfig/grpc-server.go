package serverconfig

import (
	"flag"
	"fmt"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/reflection"
	"log"
	"net"
	"net/http"
)

var (
	httpPort = flag.Int("http1_port", 9090, "Port to listen with HTTP1.1 with TLS on.")
	http2Port = flag.Int("http2_port", 50052, "Port to listen with HTTP2 with TLS on.")
	tlsCertFilePath = flag.String("tls_cert_file", "./certs/domain.crt", "Path to the CRT/PEM file.")
	tlsKeyFilePath  = flag.String("tls_key_file", "./certs/domain.key", "Path to the private key file.")
)

func CreateGrpcServer() (*grpc.Server, *http.Server) {
	grpcServer := grpc.NewServer()


	websocketOriginFunc := grpcweb.WithWebsocketOriginFunc(func(req *http.Request) bool {
		return true
	})

	httpOriginFunc := grpcweb.WithOriginFunc(func(origin string) bool {
		return true
	})

	wrappedServer := grpcweb.WrapServer(
		grpcServer,
		grpcweb.WithWebsockets(true),
		httpOriginFunc,
		websocketOriginFunc,
	)

	handler := func(resp http.ResponseWriter, req *http.Request) {
		wrappedServer.ServeHTTP(resp, req)
	}

	http1Server := http.Server{
		Addr:    fmt.Sprintf(":%d", *httpPort),
		Handler: http.HandlerFunc(handler),
	}

	reflection.Register(grpcServer)

	return grpcServer, &http1Server
}

func RunHttpServer(httpServer *http.Server) {
	fmt.Println("Run http:2.0 server")
	// if err := httpServer.ListenAndServeTLS(*tlsCertFilePath, *tlsKeyFilePath); err != nil {
	if err := httpServer.ListenAndServe(); err != nil {
		grpclog.Fatalf("failed starting http2 server: %v", err)
	}
}

func RunGrpcServer(grpcServer *grpc.Server, lis net.Listener) {
	fmt.Println("Start TCP Server is running on port :50051")
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}

