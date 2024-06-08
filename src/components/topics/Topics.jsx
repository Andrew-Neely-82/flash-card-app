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
      <span>this is where they will go</span>
    </div>
  );
};
export default Topics;
