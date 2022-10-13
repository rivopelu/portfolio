import './style/App.scss'
import { FooterComp, NavbarComp } from "./components";
import { HomePage } from './pages';
import DevelopMode from './components/atoms/DevelopMode';
import MainRouter from './Routes';

function App() {
  return (
    <div className='w-full flex items-center flex-col '>
      <DevelopMode />
      <NavbarComp />
      <MainRouter/>
      <FooterComp />
    </div>
  );
}

export default App;
