import { COLOR } from "./constants";

export const TodleButtonAdd = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          padding: "18px",
          top: "4px",
          left: "12px",
          backgroundColor: "#fff",
          zIndex: "0",
          border: "none",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          padding: "6px 2px",
          top: "16px",
          left: "41px",
          backgroundColor: "#fff",
          zIndex: "2",
          border: "none",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          padding: "6px 2px",
          top: "16px",
          left: "15px",
          backgroundColor: "#fff",
          zIndex: "2",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          padding: "2px 6px",
          top: "33px",
          left: "24px",
          backgroundColor: "#fff",
          zIndex: "2",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          padding: "2px 6px",
          top: "7px",
          left: "24px",
          backgroundColor: "#fff",
          zIndex: "2",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          padding: "5px",
          top: "10px",
          left: "18px",
          backgroundColor: "#fff",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          padding: "5px",
          top: "10px",
          left: "32px",
          backgroundColor: "#fff",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          padding: "5px",
          top: "24px",
          left: "32px",
          backgroundColor: "#fff",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          padding: "5px",
          top: "24px",
          left: "18px",
          backgroundColor: "#fff",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "12px",
          background: `conic-gradient(${COLOR.BLUE} 0% 25%, ${COLOR.GREEN} 25% 50%, ${COLOR.YELLOW} 50% 75%, ${COLOR.RED} 75% 100%)`,
          transform: "rotate(45deg)",
          padding: "10px",
          left: "20px",
        }}
      ></div>
    </>
  );
};
