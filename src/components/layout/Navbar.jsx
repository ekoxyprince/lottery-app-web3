import img1 from '../../assets/images/img1.jfif'
import Button,{TransparentButton} from '../ui/Button';
import { useAuth } from '../../utilities/AuthContext';

const Navbar = ()=>{
  const auth = useAuth()
    return(
        <header className="bg-darkGreen px-6 py-4 flex flex-col">
         <nav className="flex justify-between items-center text-white">
           <div className="flex items-center">
            <img src={img1}  className='w-[80px] h-[80px] rounded-[50%]' alt="" />
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold">ParafawDraw</h3>
              <p className="text-sm ">User: {auth.user.slice(0,7)+"..."+auth.user.slice(34,42)}</p>
            </div>
           </div>
           <div className='hidden md:flex space-x-3'>
           <Button text='Buy Tickets'/>
           <TransparentButton text='Logout'/>
           </div>
           <div className='flex space-x-4'>
           <i className="fa fa-bars" aria-hidden="true"></i>
           </div>
         </nav>
        </header>
    )
}
export default Navbar