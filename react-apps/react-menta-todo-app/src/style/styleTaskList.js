import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { COLOR } from "../utils/constants";

export const taskTitle = {
  width: "100%",
  overflow: "hidden",
  textOverFlow: "ellipsis",
  border: "none",
  backgroundColor: "transparent",
};

export const taskDeadline = (length) => ({
  display: "flex",
  flexDirection: "column",
  width: `${length}ch`,
  overflow: "hidden",
  whiteSpace: "norap",
  // textAlign: "center",
  alignItems: "center",
  backgroundColor: "rgb(240, 240, 240)",
  border: "none",
  borderRadius: "5px",
});

export const checkbox = {
  // marginRight: "20px",
  appearance: "none",
  WebkitAppearance: "none",
  border: "1px solid rgb(200, 200, 200)",
  borderRadius: "50%",
  // marginRight: "15px",
  padding: "8px",
  cursor: "pointer",
  flexDirection: "row",
};

export const iconClock = {
  fontSize: "20px",
};

export const iconMoreVert = {
  fontSize: "1.3rem",
  width: "30px",
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
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
  padding: "10px",
  fontSize: "0",
  borderRadius: "100%",
  border: "2px, solid, rgb(240, 240, 240)",
};

export const priorityColor = {
  High: { backgroundColor: COLOR.RED },
  Medium: { backgroundColor: COLOR.YELLOW },
  Low: { backgroundColor: "#fff" },
};

export const listContents = {
  // position: "absolute",
  boxSizing: "border-box",
  display: "flex",
  // flexBasis: "300px",
  flexDirection: "column",
  width: "calc(100% - 10px)",
  minWidth: "300px",
  maxWidth: "700px",
  // minHeight: "300px",
  height: "calc(100% - 30px)",
  // minHeight: "50px",
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
  // top: "100px",
  // position: "absolute",
  width: "100%",
  borderRadius: "3px",
  maxHeight: "50vh",
  // border: "1px solid",
  // minHeight: "100px",
  overflowY: "auto",
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
  width: "99%",
  minHeight: "50px",
  cursor: "default",
  display: "flex",
  // height: "1.7rem",
  margin: "5px 1px",
  borderRadius: "3px",
  // boxShadow: "0 1.6px 1px rgba(0, 0, 0, 0.1)",
  border: "1.2px solid, rgb(240, 240, 240",
  // alignItems: "center",
  flexDirection: "column",
  padding: "5px",
};

export const listGroupWrapper = (isMenuOpen) => ({
  position: "absolute",
  left: isMenuOpen ? "250px" : "0px",
  display: "flex",
  borderRadius: "5px",
  fontSize: "0.6rem",
  width: isMenuOpen ? "calc(100% - 250px)" : "100%",
  overflowX: "auto",
  height: "100%",
  // margin: "0 auto",
  // justifyContent: "center",
});
