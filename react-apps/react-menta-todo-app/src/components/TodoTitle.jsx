const style = {
  color: "white",
  margin: "10px auto 80px",
  padding: "25px",
  textAlign: "center",
  borderRadius: "3px",
  boxShadow: "0 4px 8px black",
  backgroundColor: "green",
};

export const TodoTitle = () => {
  return (
    <h1 className="title" style={style}>
      Todo App
    </h1>
  );
};
