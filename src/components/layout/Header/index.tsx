import { ButtonSignIn } from '@App/components/elements/ButtonSignIn';
import { Row, Switch, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';

export function Header(): JSX.Element {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <Row justify="space-between">
      <Switch
        checked={isDark}
        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
      />
      <ButtonSignIn />
    </Row>
  );
}
