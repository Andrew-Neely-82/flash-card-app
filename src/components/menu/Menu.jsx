import StyleIcon from "@mui/icons-material/Style";
import LayersIcon from "@mui/icons-material/Layers";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Search from "./Search";
import Icon from "./Icon";
import CardSets from "./CardSets";

const Menu = () => {
  // * Menu show handling
  const [open, setOpen] = useState(false);
  const iconHandler = () => {
    setOpen(!open);
    setSearchOpen(false);
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
    setTopicOpen(!topicOpen);
  };

  // * Class toggling
  const classes = {
    menuClass: open ? "open" : "closed",
    menuTextClass: open ? "show" : "hidden",
    searchClass: searchOpen ? "show" : "hidden",
    topicsClass: topicOpen ? "show" : "hidden",
  };

  return (
    <>
      <div className={`menu ${classes.menuClass}`}>
        <button onClick={iconHandler} className="btn">
          <Icon iconHandler={iconHandler} />
        </button>

        <hr />

        <ul>
          <li>
            <button className="btn" onClick={searchHandler}>
              <SearchIcon />
              <span className={classes.menuTextClass}>Search</span>
            </button>
          </li>

          <li>
            <button className="btn" onClick={topicsHandler}>
              <LayersIcon />
              <span className={classes.menuTextClass}>Cards Sets</span>
            </button>
          </li>

          <li>
            <button className="btn" onClick={iconHandler}>
              <StyleIcon />
              <span className={classes.menuTextClass}>Tags</span>
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
