import { useMoralis } from 'react-moralis';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export function ButtonSignIn(): JSX.Element {
  const {
    authenticate,
    logout,
    isAuthenticated,
    isAuthenticating,
    isLoggingOut,
  } = useMoralis();

  return isAuthenticated ? (
    <Button type="button" onClick={() => logout()} variant="contained">
      {isAuthenticating ? <CircularProgress color="secondary" /> : 'Logout'}
    </Button>
  ) : (
    <Button type="button" onClick={() => authenticate()} variant="contained">
      {isLoggingOut ? <CircularProgress /> : 'Login'}
    </Button>
  );
}
