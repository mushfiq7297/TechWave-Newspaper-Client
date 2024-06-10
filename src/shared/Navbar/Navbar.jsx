import { Link } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { useContext, } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  

  // update state on toggle
  
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li className="text-white hover:text-secondary">
        <Link to="/">HOME</Link>
      </li>
      <li className="text-white  hover:text-secondary">
        <Link to="allArticle">ALL ARTICLE</Link>
      </li>
      <li className="text-white  hover:text-secondary">
        <Link to="addArticles">ADD ARTICLE</Link>
      </li>
      <li className="text-white  hover:text-secondary">
        <Link to="subscription">SUBSCRIPTION</Link>
      </li>
      {
        user?.email? <>

        <li className="text-white  hover:text-secondary">
        <Link to="/myArticles">MY ARTICLE</Link>
      </li>
      </>
      :
      <div></div>
       
      }
      
    </>
  );
  return (
    <div>
      <div className="fixed navbar bg-black text-white lg:px-10 z-50 top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu5Fill className="w-5 h-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-bold dropdown-content mt-3 z-50 p-2 shadow bg-black text-white rounded-none w-52 mb-10"
            >
              {navOptions}
            </ul>
          </div>
          <img
            src="https://i.ibb.co/TtXrkj1/Tech-Wave-logo.png"
            className="w-10 h-10 md:h-16 md:w-16"
            alt=""
          />
          <div className="hidden lg:block">
            <h1 className="text-sm uppercase px-2 font-bold">
              T e c h W a v e
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{navOptions}</ul>
        </div>

        <div className="navbar-end mx-2">
          {user ? (
            <>
              <div
                className="flex gap-2"
  
              >
                
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button" className="m-1">
                  <img
                  src={user?.photoURL || "/src/assets/userDefaultPic.png"}
                  alt=""
                  className=" rounded w-10 h-10 mt-1 mx-2 "
                />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-black rounded-box w-52"
                  >
                    <li>
                      <a>MY PROFILE</a>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="btn btn-ssecondary uppercase mx-2"
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-secondary uppercase">
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
