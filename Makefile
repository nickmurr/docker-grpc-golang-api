.PHONY: gp
gp:
	./server/generate.sh

.PHONY: pt
pt:
	psql -h localhost -p 7557 -U postgres postgres
