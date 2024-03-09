import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // const loginData = {
    //   email: form.elements.email.value,
    //   password: form.elements.password.value,
    // };
    dispatch();
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};
