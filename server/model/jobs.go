package model

import (
	validation "github.com/go-ozzo/ozzo-validation"
	_ "golang.org/x/crypto/bcrypt"
)

type Jobs struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Email       string `json:"email"`
	Phone       string `json:"phone"`
}

func (j *Jobs) Validate() error {
	return validation.ValidateStruct(j,
		validation.Field(&j.Title, validation.Required),
		validation.Field(&j.Description, validation.Required),
		// validation.Field(&j.Title, validation.By(requiredIf(j.EncryptedPassword == "")), validation.Length(6, 100)),
	)

}
