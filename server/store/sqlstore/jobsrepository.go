package sqlstore

import "github.com/nickmurr/docker-grpc-golang-api/model"

type JobsRepository struct {
	store *Store
}

func (r *JobsRepository) Create(j *model.Jobs) error {
	if err := j.Validate(); err != nil {
		return err
	}

	// if err := j.BeforeCreate(); err != nil {
	// 	return err
	// }

	return r.store.db.QueryRow("INSERT INTO jobs (title, description, image, phone, email) VALUES ($1, $2, $3, $4, $5) RETURNING id",
		j.Title,
		j.Description,
		j.Image,
		j.Phone,
		j.Email,
	).Scan(&j.ID)

}
