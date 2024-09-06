export const ColorfulMessage = (props) => {
  const contentStyleA = {
    color: props.color,
    fontSize: "18px",
  };

  return <p style={contentStyleA}>{props.message}</p>
};
