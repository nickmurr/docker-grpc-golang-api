.PHONY: migrate-up
migrate-up:
	docker run --network host migrator -path=/migrations -database "postgresql://postgres:docker@localhost:7557/postgres?sslmode=disable" up

.PHONY: migrate-down
migrate-down:
	docker run --network host migrator -path=/migrations -database "postgresql://postgres:docker@localhost:7557/postgres?sslmode=disable" down -all

.PHONY: migrate-force
migrate-force:
	docker run --network host migrator -path=/migrations -database "postgresql://postgres:docker@localhost:7557/postgres?sslmode=disable" force 1


.PHONY: gp
gp:
	./server/generate.sh

.PHONY: pt
pt:
	psql -h localhost -p 7557 -U postgres postgres
