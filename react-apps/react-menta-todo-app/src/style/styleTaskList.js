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
  marginRight: "15px",
};

export const iconClock = {
  fontSize: "20px",
};

export const buttonTaskEdit = {
  padding: "0",
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

export const listContentsWrapper = {
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  border: "1px solid, rgb(220, 220, 220",
  fontSize: "0.6rem",
  display: "flex",
  overflowX: "auto",
  width: "100%",
};

export const MenuBar = {
  width: "300px",
  fontSize: "0.6rem",
  display: "flex",
};

export const listContents = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minWidth: "300px",
  backgroundColor: "white",
  borderRadius: "15px",
  boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
  border: "1px solid, rgb(250, 250, 250)",
  margin: "5px",
};
export const tasksWrapper = {
  width: "100%",
  borderRadius: "3px",
  overflowY: "auto",
  border: "1px solid",
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
  display: "flex",
  height: "1.7rem",
  margin: "5px 1px",
  borderRadius: "3px",
  boxShadow: "0 1.6px 1px rgba(0, 0, 0, 0.1)",
  border: "1.2px solid, rgb(220, 220, 220",
  alignItems: "center",
};
