import './style/App.scss'
import { NavbarComp } from "./components";
import { HomePage } from './pages';

function App() {
  return (
    <div className='w-full flex items-center flex-col '>

      <NavbarComp />

      <HomePage />

    </div>
  );
}

export default App;
