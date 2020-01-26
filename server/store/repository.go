package store

import "github.com/nickmurr/docker-grpc-golang-api/model"

type JobsRepository interface {
	Create (jobs *model.Jobs) error
}
