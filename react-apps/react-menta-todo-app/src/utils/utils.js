import { COLOR } from "./constants";

export const FORM_LABELS = {
  TITLE: "タイトル",
  PRIORITY: "優先度",
  DEADLINE: "期限",
  COMMENT: "説明",
};
export const initTaskInfo = () => ({
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
