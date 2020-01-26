package serverconfig

import (
	"context"
	"flag"
	"fmt"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/nickmurr/docker-grpc-golang-api/proto/jobspb"
	"google.golang.org/grpc"
	"log"
	"net/http"
)

var (
	// command-line options:
	// gRPC server endpoint
	grpcServerEndpoint = flag.String("grpc-server-endpoint", "localhost:50051", "gRPC server endpoint")
)

func CreateMuxServer() error {
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

func RunMuxServer() {
	err := CreateMuxServer()
	if err != nil {
		log.Fatalf("Error: %v", err)
	}
}
