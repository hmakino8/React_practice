const style = {
  color: "rgba(255, 255, 255, 0.7)",
  margin: "10px auto 80px",
  padding: "25px",
  textAlign: "center",
  borderRadius: "3px",
  boxShadow: "0 4px 8px black",
  backgroundColor: "darkgreen",
};

export const TodoTitle = () => {
  return (
    <h1 className="title" style={style}>
      TODO App
    </h1>
  );
};
