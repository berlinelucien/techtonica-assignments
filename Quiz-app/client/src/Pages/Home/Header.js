import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
       <Link to="/quiz" className="title">
        Trivia 
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;