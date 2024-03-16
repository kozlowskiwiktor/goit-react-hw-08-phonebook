import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Book - Home</title>
      </Helmet>
      <header></header>
      <main>
        <div>
          <h1>Welcome in Phone Book</h1>
        </div>
      </main>
    </div>
  );
};
