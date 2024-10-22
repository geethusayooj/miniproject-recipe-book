
import image from './imagelogo/image.png'
function Navbar(){
    return (
        <div className='headercontainer'>
        <h1 className='heading'>WORLD OF FLAVORS</h1>
        <img  className="imagelogo" src={image} alt="WORLD OF FLAVORS logo" />
        </div>
    )
}
export default Navbar