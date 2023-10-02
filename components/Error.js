import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError()
    console.log(err);
  return (
    <div>
      <h1>Opps Something is Wrong !!</h1>
      <h2>NOT FOUND JUST CHECK IT OUT </h2>
      <h3>{err.status + " : " + err.statusText}</h3>
      <img
        alt="errorimage"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4X8EFtCjQ1gRMpC2u7GYY9P6UgpYt1Qhzzw&usqp=CAU"
      />
    </div>
  );
}

export default Error;