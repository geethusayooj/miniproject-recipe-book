
import image from './imagelogo/image.png'


function Navbar(){
    return (
        <div className='headercontainer'>
        <img className="imagelogo" src={image} alt="WORLD OF FLAVORS logo" />
        <h1 className='heading'>WORLD OF FLAVORS</h1>
        
        </div>
    )
}
export default Navbar