import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { BiMenuAltRight } from "react-icons/bi";
// import { getMenuStyles } from "../../utils/common";
// import OutsideClickHandler from "react-outside-click-handler";
// import { NavLink } from "react-router-dom";



const Header = () => {
  // const [menuOpened, setMenuOpened] = React.useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();




  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 rounded-full bg-white p-1 h-9 w-9 overflow-hidden">
            <img
              src="https://drive.google.com/uc?id=11NV0qDjL4ZPS2xCsS0q67CDrY37OJIXe"
              alt="Logo"
              className="w-full"
            />
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="/" className="text-white hover:text-gray-200">Reading List</a>
            <a href="/" className="text-white hover:text-gray-200">Favourites</a>
          </nav>
        </div>

    
    {/* <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flex items-center space-x-4">
          <div
            className="text-white"
            style={getMenuStyles(menuOpened)}>
            <NavLink to="/properties">Properties</NavLink>

            <a href="mailto:zainkeepscode@gmail.com">Contact</a>

            {/* add property 
            <div onClick={logout}>Add Property</div>
          </div>
          </OutsideClickHandler> */}
        
           {/* login button */}
           <div className="-mr-40 text-lg md:mr-5 md:text-lg">
           {!isAuthenticated ? (
              <button className="button text-white" onClick={() => loginWithRedirect()}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
            </div>
           
          <div className="md:hidden text-white">
           {/* Slant toolbar for mobile view  */}
           <BiMenuAltRight size={30} />
        </div>
        
      </div>
    </header>
  );
};

export default Header;
