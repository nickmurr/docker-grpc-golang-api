package sqlstore

import (
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/github"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
	"github.com/nickmurr/docker-grpc-golang-api/store"
)

type Store struct {
	db             *sqlx.DB
	jobsRepository *JobsRepository
}

// New ...
func New(db *sqlx.DB) *Store {
	return &Store{
		db: db,
	}
}

func (s *Store) Jobs() store.JobsRepository {
	if s.jobsRepository != nil {
		return s.jobsRepository
	}

	s.jobsRepository = &JobsRepository{
		store: s,
	}

	return s.jobsRepository
}
