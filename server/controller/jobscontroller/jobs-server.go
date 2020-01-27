package jobscontroller

import (
	"context"
	"fmt"
	"github.com/nickmurr/docker-grpc-golang-api/proto/jobspb"
	"github.com/nickmurr/docker-grpc-golang-api/store/sqlstore"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

type JobsApi struct {
	Store *sqlstore.Store
}

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

func (j *JobsApi) GetAllJobs(ctx context.Context, req *jobspb.GetAllJobsRequest) (*jobspb.GetAllJobsResponse, error) {
	var data []*jobspb.Job

	for i := 0; i <= 1000; i++ {
		data = append(data, &jobspb.Job{
			Id:          fmt.Sprintf("%v", i),
			Title:       fmt.Sprintf("%v Title", i),
			Description: fmt.Sprintf("%v Description", i),
			Image:       fmt.Sprintf("%v Image", i),
			Email:       fmt.Sprintf("%v Email", i),
			Phone:       fmt.Sprintf("%v Phone", i),
		})

	}

	return &jobspb.GetAllJobsResponse{Jobs: data}, nil
}
