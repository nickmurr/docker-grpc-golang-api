package main

import (
	"fmt"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/github"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
	"github.com/nickmurr/docker-grpc-golang-api/apiserver/serverconfig"
	"github.com/nickmurr/docker-grpc-golang-api/controller/jobscontroller"
	"github.com/nickmurr/docker-grpc-golang-api/proto/jobspb"
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

	db, err := newDb(config.DatabaseURL)
	if err != nil {
		log.Fatalf("Error connecting to DB %v", err)
	}
	defer db.Close()

	grpcServer, httpServer := serverconfig.CreateGrpcServer()

	jobspb.RegisterJobServiceServer(grpcServer, &jobscontroller.JobsApi{})

	go serverconfig.RunHttpServer(httpServer)
	go serverconfig.RunGrpcServer(grpcServer, lis)
	go serverconfig.RunMuxServer()

	fmt.Printf("All in run\n\n")
	ch := make(chan os.Signal, 1)
	signal.Notify(ch, os.Interrupt)
	<-ch
}

func newDb(databaseURL string) (*sqlx.DB, error) {
	db, err := sqlx.Open("postgres", databaseURL)
	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		return nil, err
	}

	return db, nil
}
