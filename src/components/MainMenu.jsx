import { MainMenuContainer } from '../styles/MainMenuContainer';
import { Link } from 'react-router-dom';
export function MainMenu() {
  return (
    <MainMenuContainer>
      <ul>
        <li><Link to={`/`}>Home</Link></li>
      </ul>
    </MainMenuContainer>
  );
}
