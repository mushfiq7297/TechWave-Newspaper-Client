import {
  
  FaHome,
 
  FaSearch,
 
  FaUserPlus,
  FaUsers,
 
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

import { FaPaypal } from "react-icons/fa6";



const Dashboard = () => {
 
  
  return (
    <div className="flex flex-col md:flex-row lg:flex-row">
      {/* dashboard side bar */}
      <div className="w-full md:w-64 min-h-screen bg-neutral-content justify-center">
      <Link to='/'>
      <div className="flex  flex-col justify-center">
        <div className="flex justify-center">
        <img src="https://i.ibb.co/jk47LpJ/black-logo.png" className="w-20 h-20" alt="" />
        </div>
        <div className="text-center font-bold">
          <h2>TECHWAVE</h2>
        </div>
      </div>
      </Link>
        <ul className="menu p-4">
          
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addPublisher">
                  <FaUserPlus />
                  Add Publishers
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allUser">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adminAllArticle">
                  <FaSearch></FaSearch>
                  All Articles
                </NavLink>
              </li>
            </>
         
            <>
              {/* shared nav links */}
              <li>
                <NavLink to="/dashboard/payment">
                  <FaPaypal></FaPaypal>
                  Payment
                </NavLink>
              </li>           
            </>
          
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
