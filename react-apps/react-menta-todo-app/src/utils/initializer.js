import { generateId } from "./utils";
import { DEFAULT_LIST_NAME } from "./constants";

export const initTaskGroup = () => {
  return [
    {
      listId: generateId(),
      listName: DEFAULT_LIST_NAME,
      tasks: [],
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
