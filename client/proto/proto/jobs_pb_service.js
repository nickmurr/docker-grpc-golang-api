// package: jobspb
// file: proto/jobs.proto

var proto_jobs_pb = require("../proto/jobs_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var JobService = (function () {
  function JobService() {}
  JobService.serviceName = "jobspb.JobService";
  return JobService;
}());

JobService.CreateJob = {
  methodName: "CreateJob",
  service: JobService,
  requestStream: false,
  responseStream: false,
  requestType: proto_jobs_pb.CreateJobRequest,
  responseType: proto_jobs_pb.CreateJobResponse
};

JobService.GetAllJobs = {
  methodName: "GetAllJobs",
  service: JobService,
  requestStream: false,
  responseStream: false,
  requestType: proto_jobs_pb.GetAllJobsRequest,
  responseType: proto_jobs_pb.GetAllJobsResponse
};

exports.JobService = JobService;

function JobServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

JobServiceClient.prototype.createJob = function createJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(JobService.CreateJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

JobServiceClient.prototype.getAllJobs = function getAllJobs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(JobService.GetAllJobs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.JobServiceClient = JobServiceClient;

