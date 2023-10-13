import './App.css';
import Searchbar from './components/Searchbar.js';
import Menu from './components/Menu.js';
import Cards from './components/Cards.js';
import Slide from './components/Slide';
import Form from './components/Form.js';
import All from './components/All.js';
import './css/bootstrap.css';
function App() {  
  return (
   <>
   <div className='container-fluid'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Slide/>
                <Cards/>
                <All/>
                <Form/>
        </div>
   </div>
   </>
  );
}
export default App;