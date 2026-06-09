import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Header() {
  const { user, logout } = useAuth();
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
      <Link to="/contact">Contact</Link>
      {user && (
        <span>
          {" "}
          | Hi, {user.name} <button onClick={logout}>Logout</button>
        </span>
      )}
    </nav>
  );
}
export default Header;
