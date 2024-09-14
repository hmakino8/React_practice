export const PRIORITYCOLOR = {
  High: "red",
  Medium: "yellow",
  Low: "grey",
  NoData: "white",
};

export const initializeTodoInfo = () => ({
  title: "",
  priority: "",
  deadline: "",
  comments: "",
  isComplete: false,
  isNew: true,
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
