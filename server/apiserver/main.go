package main

import (
	"context"
	"flag"
	"fmt"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	jobsserver "github.com/nickmurr/docker-grpc-golang-api/apiserver/jobs-server"
	"github.com/nickmurr/docker-grpc-golang-api/proto/jobspb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/reflection"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
)

var (
	http1Port = flag.Int("http1_port", 9090, "Port to listen with HTTP1.1 with TLS on.")
	http2Port = flag.Int("http2_port", 50052, "Port to listen with HTTP2 with TLS on.")
	// tlsCertFilePath = flag.String("tls_cert_file", "./calculator/cert/server.crt", "Path to the CRT/PEM file.")
	// tlsKeyFilePath  = flag.String("tls_key_file", "./calculator/cert/server.key", "Path to the private key file.")
)

func main() {
	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

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
		Addr:    fmt.Sprintf(":%d", *http1Port),
		Handler: http.HandlerFunc(handler),
	}

	reflection.Register(grpcServer)

	jobspb.RegisterJobServiceServer(grpcServer, jobsserver.JobsServer{})

	go func() {
		fmt.Println("Run http:2.0 server")
		if err := http1Server.ListenAndServe(); err != nil {
			grpclog.Fatalf("failed starting http2 server: %v", err)
		}
	}()

	go func() {
		fmt.Println("Start TCP Server is running on port :50051")
		if err := grpcServer.Serve(lis); err != nil {
			log.Fatalf("Failed to serve: %v", err)
		}
	}()

	go func() {
		err := muxServer()
		if err != nil {
			log.Fatalf("Error: %v",err)
		}
	}()

	fmt.Printf("All in run\n\n")
	ch := make(chan os.Signal, 1)
	signal.Notify(ch, os.Interrupt)

	// Block until signal a received
	<-ch

	fmt.Println("Stopping a server")
	grpcServer.Stop()
	fmt.Println("Closing a listener")
	_ = lis.Close()
	fmt.Println("Closing mongodb Connection")
	fmt.Println("End of Program")

}

var (
	// command-line options:
	// gRPC server endpoint
	grpcServerEndpoint = flag.String("grpc-server-endpoint", "localhost:50051", "gRPC server endpoint")
)

func muxServer() error {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	// Register gRPC server endpoint
	// Note: Make sure the gRPC server is running properly and accessible
	mux := runtime.NewServeMux()
	opts := []grpc.DialOption{grpc.WithInsecure()}
	// err := blogpb.RegisterBlogServiceHandlerFromEndpoint(ctx, mux, *grpcServerEndpoint, opts)
	err := jobspb.RegisterJobServiceHandlerFromEndpoint(ctx, mux, *grpcServerEndpoint, opts)
	if err != nil {
		return err
	}
	fmt.Println("Running mux")
	// Start HTTP server (and proxy calls to gRPC server endpoint)
	return http.ListenAndServe(":8081", mux)
}
