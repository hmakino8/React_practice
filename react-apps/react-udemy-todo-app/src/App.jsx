import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickButton = () => alert();
  const contentStyleB = {
    color: "green",
    fontSize: "18px",
  };

  return (
    <>
      <h1 style={{color: "red"}}>こんにちは！</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <p style={contentStyleB}>元気です！</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
