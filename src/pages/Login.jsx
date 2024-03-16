import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Book - Login</title>
      </Helmet>
      <div>
        <h1>Login Form</h1>
        <LoginForm />
      </div>
    </div>
  );
};
