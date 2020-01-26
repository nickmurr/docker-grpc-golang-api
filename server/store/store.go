package store

type Store interface {
	Jobs() JobsRepository
}
