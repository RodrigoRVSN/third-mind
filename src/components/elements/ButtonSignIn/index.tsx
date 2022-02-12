import { Button, Loading } from '@nextui-org/react';
import { User } from 'react-iconly';
import { useMoralis } from 'react-moralis';

export function ButtonSignIn(): JSX.Element {
  const {
    authenticate,
    logout,
    isAuthenticated,
    isAuthenticating,
    isLoggingOut,
  } = useMoralis();

  return (
    <Button
      color="gradient"
      shadow
      auto
      icon={<User filled />}
      onClick={isAuthenticated ? () => logout() : () => authenticate()}
    >
      {isAuthenticating || isLoggingOut ? (
        <Loading type="points" color="white" size="sm" />
      ) : isAuthenticated ? (
        'Logout'
      ) : (
        'Login'
      )}
    </Button>
  );
}
