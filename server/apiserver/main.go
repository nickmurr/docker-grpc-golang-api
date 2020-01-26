package main

import (
	"fmt"
	jobsserver "github.com/nickmurr/docker-grpc-golang-api/apiserver/jobs-server"
	"github.com/nickmurr/docker-grpc-golang-api/apiserver/serverconfig"
	"github.com/nickmurr/docker-grpc-golang-api/proto/jobspb"
	"log"
	"net"
	"os"
	"os/signal"
)

func main() {
	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	grpcServer, httpServer := serverconfig.CreateGrpcServer()

	jobspb.RegisterJobServiceServer(grpcServer, jobsserver.JobsServer{})

	go serverconfig.RunHttpServer(httpServer)
	go serverconfig.RunGrpcServer(grpcServer, lis)
	go serverconfig.RunMuxServer()

	fmt.Printf("All in run\n\n")
	ch := make(chan os.Signal, 1)
	signal.Notify(ch, os.Interrupt)
	<-ch
}
