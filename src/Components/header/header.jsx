import "./header.css";
import CartIcon from "../../assests/trolley.png";

import { useNavigate } from 'react-router-dom';



const Header = (props) => {
  const navigate = useNavigate(); // hook from react router dom
 


  const navigateToHome = () => {
    navigate("/");
  };
  const navigateTocart = () => {
    navigate("/cart")
  };


    return (
        <div className="header-container">
        <div className="left">
          <div className="logo"  onClick={navigateToHome}>
            EBay
          </div>
          </div>
          <div className="right">
        <div className="cart-icon">
          <img
            src={CartIcon}
            alt="Cart"
            width={30}
            height={30}
            onClick={navigateTocart}
           
           
          />
           <span className="cart-count">{props.cartCount}</span>
          </div>
          </div>
          </div>

    )
}

export default Header;