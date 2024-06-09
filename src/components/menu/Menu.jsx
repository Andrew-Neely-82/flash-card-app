import LayersIcon from "@mui/icons-material/Layers";
import SearchIcon from "@mui/icons-material/Search";
import StyleIcon from "@mui/icons-material/Style";

import CardSets from "./CardSets";
import { useState } from "react";
import Search from "./Search";
import Icon from "./Icon";

const Menu = () => {
  // * Menu show handling
  const [open, setOpen] = useState(false);
  const [menuTextDelay, setMenuTextDelay] = useState(false);

  const iconHandler = () => {
    const listItem = document.querySelectorAll(".menuTextClass");
    setOpen(!open);
    setSearchOpen(false);

    if (!open) {
      listItem.forEach((item) => item.classList.remove("disappear"));
      setTimeout(() => {
        setMenuTextDelay(true);
      }, 250);
    } else {
      listItem.forEach((item) => item.classList.add("disappear"));
      setTimeout(() => {
        setMenuTextDelay(false);
      }, 250);
    }
  };

  // * Search option show handling
  const [searchOpen, setSearchOpen] = useState(false);
  const searchHandler = () => {
    setOpen(true);
    setSearchOpen(!searchOpen);
  };

  // * Handle showing topics
  const [topicOpen, setTopicOpen] = useState(false);
  const topicsHandler = () => {
    setOpen(false);
    setSearchOpen(false);
    setMenuTextDelay(false);
    setTopicOpen(!topicOpen);
  };

  // * Class toggling
  const classes = {
    menuClass: open ? "open" : "closed",
    menuTextClass: menuTextDelay ? "show-menu-text" : "disappear d-none",
    searchClass: searchOpen ? "show" : " d-none",
    topicsClass: topicOpen ? "topics-show" : "topics-hidden",
  };

  return (
    <>
      <div className={`menu ${classes.menuClass}`}>
        <button onClick={iconHandler} className="btn no-underline">
          <Icon iconHandler={iconHandler} />
        </button>

        <hr />

        <ul>
          <li>
            <button className="btn" onClick={searchHandler}>
              <SearchIcon />
              <span className={`menuTextClass ${classes.menuTextClass}`}>Search</span>
            </button>
          </li>

          <li>
            <button className="btn" onClick={topicsHandler}>
              <LayersIcon />
              <span className={`menuTextClass ${classes.menuTextClass}`}>Cards Sets</span>
            </button>
          </li>

          <li>
            <button className="btn" onClick={iconHandler}>
              <StyleIcon />
              <span className={`menuTextClass ${classes.menuTextClass}`}>Tags</span>
            </button>
          </li>
          <li></li>

          <div className="autocomplete">
            <Search className={`${classes.searchClass}`} />
          </div>
        </ul>
      </div>
      <CardSets className={classes.topicsClass} />
    </>
  );
};

export default Menu;
