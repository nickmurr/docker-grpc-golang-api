package serverconfig

type Config struct {
	BindAddr    string
	LogLevel    string
	DatabaseURL string
}

// New Config ...
func NewConfig() *Config {
	return &Config{
		BindAddr:    ":8080",
		LogLevel:    "debug",
		// DatabaseURL: os.Getenv("DATABASE_URL"),
		DatabaseURL: "user=postgres password=docker host=postgres dbname=postgres port=5432 sslmode=disable",
	}
}
