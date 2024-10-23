
import './App.css';

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import ListOfItems from './component/ListOfItems';

function App(){
    return(
      <div className='maincontainer'>
        <Navbar />
        <Sidebar /> 
        <ListOfItems />
        <Footer />
      </div>
    )
}

export default App;
