
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Outlet } from 'react-router';
import Navigation  from './components/navigation';



function App(){
  return(
    <div>
        <Navigation />
        <div className="container p-4">
          <Outlet/>

        </div>
    </div>
  );
}

export default App;