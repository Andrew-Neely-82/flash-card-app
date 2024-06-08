import { useState } from "react";
import Icon from "./Icon";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const iconHandler = () => setOpen(!open);

  return (
    <div className="menu">
      <Icon iconHandler={iconHandler} />

      <ul>
        <li>icon then text</li>
        <li>icon then text</li>
        <li>icon then text</li>
        <li>icon then text</li>
      </ul>
    </div>
  );
};

export default Menu;
