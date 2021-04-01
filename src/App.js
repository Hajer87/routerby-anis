import './App.css';
import { Link, Route } from 'react-router-dom';
import {data} from './data'
import Me from './Me';

function App(props) {
  return (
    <div className="App">
     <h1>this is home</h1>
     {data.map(el=><Link to ={`/me/${el.id}`}><h1>{el.name}</h1></Link>)}
     <Route exact path='/me/:id' render={(props )=><Me {...props}/>}/>
{console.log(props)}
    </div>
  );
}

export default App;
