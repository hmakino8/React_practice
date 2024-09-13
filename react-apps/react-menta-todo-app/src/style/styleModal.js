export const tasks = {
  display: "flex",
};

export const tasksParagraph = {
  fontWeight: "bold",
};

export const tasksButtonAdd = {
  border: "none",
  backgroundColor: "green",
  color: "white",
  fontWeight: "lighter",
  width: "120px",
  height: "35px",
  fontSize: "12.5px",
  borderRadius: "3px",
  marginLeft: "auto",
};

export const modal = {
  /* display: none; デフォルトでは非表示 */
  position: "fixed" /* スクロールしてもモーガルが画面上に固定 */,
  zIndex: "1" /* 要素が重なった際の前後関係 */,
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)" /*背景の半透明*/,
};

export const modalContent = {
  backgroundColor: "#fff",
  margin: "15% auto",
  padding: "20px",
  border: "1px solid #888",
  width: "80%",
  maxWidth: "400px",
  borderRadius: "10px",
};