import React from "react";
import { grpc } from "@improbable-eng/grpc-web";
import { GetAllJobsRequest } from "../proto/proto/jobs_pb"
import { JobService } from '../proto/proto/jobs_pb_service';

const Home = () => {
  const [counter, setCounter] = React.useState(1);
  React.useEffect(() => {
    const jobs = new GetAllJobsRequest();
    grpc.unary(JobService.GetAllJobs, {
      request: jobs,
      host: "https://localhost:3050",
      onEnd: res => {
        console.log(res.message.toObject());
      },
    })
  }, [counter]);

  return (
    <>
      <h1>Hello world!</h1>
      <button onClick={() => setCounter(counter + 1)}>Inc {counter}</button>
    </>
  );
};

export default Home;
