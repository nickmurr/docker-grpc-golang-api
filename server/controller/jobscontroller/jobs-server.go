package jobscontroller

import (
	"context"
	"fmt"
	"github.com/nickmurr/docker-grpc-golang-api/proto/jobspb"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

type JobsApi struct{}

func (j *JobsApi) CreateJob(ctx context.Context, req *jobspb.CreateJobRequest) (*jobspb.CreateJobResponse, error) {
	meta, ok := metadata.FromIncomingContext(ctx)
	fmt.Println(meta.Get("Authorization"))
	if !ok {
		return nil, status.Error(codes.Unauthenticated, "INTERNAL_SERVER_ERROR")
	}
	job := req.GetJob()
	fmt.Println(job)
	return &jobspb.CreateJobResponse{
		Job: job,
	}, nil
}
