import { HeaderContainer } from '../styles/HeaderContainer';
import { MainMenu } from './MainMenu';

export function Header() {
  return (
    <HeaderContainer>
      <h1>My Movies</h1>
      <MainMenu />
    </HeaderContainer>
  );
}
