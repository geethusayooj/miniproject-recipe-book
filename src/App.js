
import './App.css';

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
function App(){
    return(
      <div className='maincontainer'>
        <Navbar />
        <Sidebar />
        <Footer />
      </div>
    )
}

export default App;
