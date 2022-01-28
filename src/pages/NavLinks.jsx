import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
//const activea = { color: "red" };
export default function NavLinks() {
  const { search } = useLocation();
  console.log(search);
  return (
    <ul>
      <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
          end
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive && search === "" ? "green" : "black",
          })}
          end
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
          end
          to="/profile"
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
          end
          to="/profile/1"
        >
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive && search ? "green" : "black",
          })}
          end
          to="/about?name=mark"
        >
          About?name
        </NavLink>
      </li>
    </ul>
  );
}
