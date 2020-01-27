// package: jobspb
// file: proto/jobs.proto

import * as proto_jobs_pb from "../proto/jobs_pb";
import {grpc} from "@improbable-eng/grpc-web";

type JobServiceCreateJob = {
  readonly methodName: string;
  readonly service: typeof JobService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_jobs_pb.CreateJobRequest;
  readonly responseType: typeof proto_jobs_pb.CreateJobResponse;
};

type JobServiceGetAllJobs = {
  readonly methodName: string;
  readonly service: typeof JobService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_jobs_pb.GetAllJobsRequest;
  readonly responseType: typeof proto_jobs_pb.GetAllJobsResponse;
};

export class JobService {
  static readonly serviceName: string;
  static readonly CreateJob: JobServiceCreateJob;
  static readonly GetAllJobs: JobServiceGetAllJobs;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class JobServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createJob(
    requestMessage: proto_jobs_pb.CreateJobRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_jobs_pb.CreateJobResponse|null) => void
  ): UnaryResponse;
  createJob(
    requestMessage: proto_jobs_pb.CreateJobRequest,
    callback: (error: ServiceError|null, responseMessage: proto_jobs_pb.CreateJobResponse|null) => void
  ): UnaryResponse;
  getAllJobs(
    requestMessage: proto_jobs_pb.GetAllJobsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_jobs_pb.GetAllJobsResponse|null) => void
  ): UnaryResponse;
  getAllJobs(
    requestMessage: proto_jobs_pb.GetAllJobsRequest,
    callback: (error: ServiceError|null, responseMessage: proto_jobs_pb.GetAllJobsResponse|null) => void
  ): UnaryResponse;
}

