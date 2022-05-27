import './style/App.scss'
import { NavbarComp } from "./components";
import { HomePage } from './pages';
import DevelopMode from './components/atoms/DevelopMode';

function App() {
  return (
    <div className='w-full flex items-center flex-col '>
      <DevelopMode />

      <NavbarComp />

      <HomePage />

    </div>
  );
}

export default App;
