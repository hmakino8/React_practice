export const COLOR = {
  BLUE: "#4285F4",
  RED: "#EA4335",
  YELLOW: "#FBBC05",
  GREEN: "#34A853",
};
export const FORM_LABELS = {
  TITLE: "タイトル",
  PRIORITY: "優先度",
  DEADLINE: "期限",
  COMMENT: "説明",
};
export const initFormData = () => ({
  title: "",
  priority: "",
  deadline: "",
  comment: "",
  isComplete: false,
  isEditing: false,
});

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toDateString();
};

export const generateId = () => {
  const timeStamp = Date.now().toString(36);
  const rondomNumber = Math.random().toString(36).substring(2, 7);
  return timeStamp + rondomNumber;
};

export const CreateToodleIcon = () => {
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
