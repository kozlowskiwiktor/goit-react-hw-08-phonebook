import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const { Helmet } = require('react-helmet');

export const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Phone Book - Registration</title>
      </Helmet>
      <div>
        <h1>Register Form</h1>
        <RegisterForm />
      </div>
    </div>
  );
};
