import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="mt-32">
      <h1 className="text-center">Oops!</h1>
      <p className="text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-center">
        <i>{error.statusText || error.message}</i> <br />
        <Link className="text-red-900 font-sans font-bold text-3xl" to="/">
          HOME
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
