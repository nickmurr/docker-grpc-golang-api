import React from 'react';
import { grpc } from '@improbable-eng/grpc-web';
import { GetAllJobsRequest } from '../proto/proto/jobs_pb';
import { JobService } from '../proto/proto/jobs_pb_service';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const [counterGRPC, setCounterGrpc] = React.useState(1);
  const [counter, setCounter] = React.useState(1);
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    re().then(d => setData(d));
  }, [counterGRPC]);

  React.useEffect(() => {
    fetch('/api/job');
  }, [counter]);

  return (
    <>
      <h1>Hello world now</h1>
      <button onClick={() => setCounterGrpc(counterGRPC + 1)}>
        Inc GRC {counterGRPC}
      </button>
      <button onClick={() => setCounter(counter + 1)}>
        Inc HTTP {counter}
      </button>
      <pre>{JSON.stringify(data, null, ' ')}</pre>
    </>
  );
};

const re = () => {
  return new Promise((resolve, rej) => {
    const jobs = new GetAllJobsRequest();
    grpc.unary(JobService.GetAllJobs, {
      request: jobs,
      host: 'https://localhost:3050',
      onEnd: res => {
        resolve(res.message ? res.message.toObject() : res.message);
      }
    });
  });
};

export default React.memo(Home);
