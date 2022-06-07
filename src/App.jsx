import './style/App.scss'
import { FooterComp, NavbarComp } from "./components";
import { HomePage } from './pages';
import DevelopMode from './components/atoms/DevelopMode';

function App() {
  return (
    <div className='w-full flex items-center flex-col '>
      <DevelopMode />

      <NavbarComp />

      <HomePage />


      <FooterComp />
    </div>
  );
}

export default App;
