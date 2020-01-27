#!/usr/bin/env bash
CD="$(pwd)"
PROTOC_GEN_TS_PATH="$CD/node_modules/.bin/protoc-gen-ts.cmd"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./proto"

protoc ./proto/jobs.proto \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out=service=grpc-web:"${OUT_DIR}" \
