import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className='max-w-screen-xl mx-auto'>
        <Outlet></Outlet> 
        </div>
           
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;