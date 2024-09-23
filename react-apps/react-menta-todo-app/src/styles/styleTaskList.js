export const buttonTaskEdit = {
  width: "40px",
  height: "40px",
  fontSize: "1px",
  marginRight: "5px",
  borderRadius: "50%",
  border: "none",
  color: "rgb(100, 100, 100)",
};

export const ButtonMoreVert = {
  display: "flex",
  alignItems: "center",
  borderRadius: "50%",
  border: "none",
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
