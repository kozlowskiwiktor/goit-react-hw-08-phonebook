import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Book - Not Found Page</title>
      </Helmet>
      <div>
        <h2>Error 404 - page doesn't exist</h2>
        <button type="submit">
          <Link to="/">Back to main page</Link>
        </button>
      </div>
    </div>
  );
};
