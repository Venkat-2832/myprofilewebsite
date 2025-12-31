// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import MouseTrail from './Utils/MouseTrail';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <MouseTrail/>
      <Header/>
      <h1>My Profile Website</h1>
      {/* <Skills /> */}
    </div>
  );
}

export default App;
