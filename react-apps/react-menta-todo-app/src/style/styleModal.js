import { calculateNewValue } from "@testing-library/user-event/dist/utils";

export const inputForm = {
  display: "flex",
  flexFlow: "column",
  width: "100%",
  marginBottom: "20px",
};

export const label = {
  marginBottom: "5px",
};

export const priorityAndDeadline = {
  display: "flex",
};

export const priority = {
  marginRight: "20px",
};

export const deadline = {
  width: "100%",
};

export const tasks = {
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
  // hight: "100vh",
};

export const tasksParagraph = {
  fontWeight: "bold",
};

export const buttonAddList = {
  position: "absolute",
  top: "58px",
  alignSelf: "flex-start",
  display: "flex",
  fontSize: "3rem",
  border: "none",
  borderRadius: "30px",
  paddingleft: "80px",
  paddingTop: "2px",
  padding: "0",
  margin: "10px",
  width: "180px",
  height: "45px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

export const buttonAddTaskParagraph = {
  fontSize: "0.8rem",
  width: "100%",
  textAlign: "right",
  marginRight: "15px",
};

export const modal = {
  position: "absolute",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 3 /* 要素が重なった際の前後関係 */,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  overflowY: "auto",
};

export const modalContents = {
  backgroundColor: "#fff",
  padding: "20px",
  border: "1px solid rgba(240, 240, 240)",
  borderRadius: "10px",
  minWidth: "500px",
  maxHeight: "500px",
  margin: "10px",
};
