import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{user.name}</p>
      <button type="submit" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
