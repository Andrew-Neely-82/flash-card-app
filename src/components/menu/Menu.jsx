import { useState } from "react";
import Icon from "./Icon";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const iconHandler = () => setOpen(!open);

  // Class toggling
  const menuClass = open ? "open" : "closed";
  const menuTextClass = open ? "show" : "hidden";

  return (
    <div className={`menu ${menuClass}`}>
      <Icon iconHandler={iconHandler} />
      <hr />

      <ul>
        <li>
          <button className="btn" onClick={""}>
            <SearchIcon />
            <span className={menuTextClass}>Search</span>
          </button>
        </li>
        <li></li>
        <li></li>
        <li></li>
        {/* <Search /> */}
      </ul>
    </div>
  );
};

export default Menu;
