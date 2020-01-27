package main

import (
	"fmt"
	"github.com/nickmurr/docker-grpc-golang-api/apiserver/serverconfig"
	"github.com/nickmurr/docker-grpc-golang-api/controller/jobscontroller"
	"github.com/nickmurr/docker-grpc-golang-api/proto/jobspb"
	"github.com/nickmurr/docker-grpc-golang-api/store/sqlstore"
	"log"
	"net"
	"os"
	"os/signal"
)

func main() {
	config := serverconfig.NewConfig()

	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	db, err := sqlstore.NewDb(config.DatabaseURL)
	store := sqlstore.New(db)

	if err != nil {
		log.Fatalf("Error connecting to DB %v", err)
	}
	defer db.Close()

	grpcServer, httpServer := serverconfig.CreateGrpcServer()

	jobspb.RegisterJobServiceServer(grpcServer, &jobscontroller.JobsApi{Store: store})

	go serverconfig.RunHttpServer(httpServer)
	go serverconfig.RunGrpcServer(grpcServer, lis)
	go serverconfig.RunMuxServer()

	fmt.Printf("All in run\n\n")
	ch := make(chan os.Signal, 1)
	signal.Notify(ch, os.Interrupt)
	<-ch
}

