import { COLOR } from "../utils/constants";

export const taskTitle = {
  width: "40%",
  overflow: "hidden",
  textOverFlow: "ellipsis",
};

export const taskDeadline = {
  display: "flex",
  width: "60%",
  overflow: "hidden",
  whiteSpace: "norap",
  textAlign: "center",
  alignItems: "center",
};

export const checkbox = {
  display: "flex",
  alignItems: "center",
  // marginRight: "20px",
  appearance: "none",
  webkitAppearance: "none",
  borderRadius: "50%",
  // marginRight: "15px",
  padding: "8px",
  cursor: "pointer",
};

export const iconClock = {
  fontSize: "20px",
};

export const iconMoreVert = {
  fontSize: "1.3rem",
  width: "auto",
};

export const buttonTaskEdit = {
  width: "40px",
  height: "40px",
  fontSize: "1px",
  marginRight: "5px",
  borderRadius: "50%",
  border: "none",
  color: "rgb(100, 100, 100)",
};

export const priority = {
  padding: "8px",
  marginRight: "5px",
  borderRadius: "10px",
  border: "2px, solid, rgb(240, 240, 240)",
};

export const priorityColor = {
  High: { backgroundColor: COLOR.RED },
  Medium: { backgroundColor: COLOR.YELLOW },
  Low: { backgroundColor: COLOR.BLUE },
  "": { backgroundColor: "white" },
};

export const listContents = {
  display: "flex",
  flexDirection: "column",
  width: "95%",
  minWidth: "300px",
  maxWidth: "700px",
  backgroundColor: "white",
  borderRadius: "15px",
  border: "1px solid rgb(240, 240 ,240)",
  margin: "15px 5px",
  padding: "5px",
};

export const listTitle = {
  display: "flex",
  justifyContent: "space-between",
  height: "40px",
};

export const listName = {
  fontSize: "20px",
  margin: "5px",
};

export const LabelButtonAddTask = {
  display: "flex",
  fontSize: "1rem",
  height: "10px",
  alignItems: "center",
};

export const ButtonAddTask = {
  display: "flex",
  borderRadius: "10px",
  padding: "5px",
  width: "80%",
  border: "none",
  color: COLOR.BLUE,
};

export const ButtonMoreVert = {
  display: "flex",
  alignItems: "center",
  borderRadius: "50%",
  border: "none",
};

export const IconButtonAddTask = {
  color: "rgb(66, 133, 244)",
  fontSize: "1.2rem",
  marginRight: "5px",
};

export const tasksComplete = {
  width: "100%",
  borderRadius: "3px",
  overflowY: "auto",
  // border: "1px solid",
  // minHeight: "100px",
};

export const listNoData = {
  display: "flex",
  fontSize: "0.5rem",
  margin: "auto",
  border: "1px solid rgb(240, 240, 240)",
  width: "95%",
  height: "95%",
  justifyContent: "center",
  alignItems: "center",
};

export const task = {
  // backgroundColor: "rgb(240, 240, 240)",
  width: "100%",
  minHeight: "50px",
  cursor: "default",
  display: "flex",
  // height: "1.7rem",
  margin: "5px 1px",
  borderRadius: "3px",
  // boxShadow: "0 1.6px 1px rgba(0, 0, 0, 0.1)",
  border: "1.2px solid, rgb(240, 240, 240",
  alignItems: "center",
};

export const listGroupWrapper = {
  display: "flex",
  borderRadius: "5px",
  fontSize: "0.6rem",
  width: "100%",
  overflowX: "auto",
};
