import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

const Topics = () => {
  return (
    <div className="topics">
      <div className="title-container">
        <span>TOPICS</span>
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
export default Topics;
