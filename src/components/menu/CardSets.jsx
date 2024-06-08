import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

const CardSets = ({className}) => {

  return (
    <div className={`topics ${className}`}>
      <div className="title-container">
        <span>Card Sets</span>
        <Fab color="primary" aria-label="add" size="small">
          <AddIcon />
        </Fab>
      </div>
      <hr />
      <div className="topics-list">
        <div className="topic-example"></div>
        <span>title 1</span>
        <hr />
        <div className="topic-example"></div>
        <span>title 2</span>
        <hr />
        <div className="topic-example"></div>
        <span>title 3</span>
      </div>
    </div>
  );
};
export default CardSets;

