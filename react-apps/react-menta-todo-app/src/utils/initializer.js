import { generateId } from "./utils";
import { DEFAULT_LIST_TITLE } from "./constants";

export const initTaskGroup = () => {
  return [
    {
      projectId: generateId(),
      projectTitle: { DEFAULT_LIST_TITLE },
      taskList: [],
    },
  ];
};

export const initModalData = () => ({
  title: "",
  priority: "",
  deadline: "",
  comment: "",
  isComplete: false,
  isEditing: false,
});
