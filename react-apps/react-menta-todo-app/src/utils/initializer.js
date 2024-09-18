import { generateId } from "./utils";
import { DEFAULT_LIST_NAME } from "./constants";

export const initListGroup = () => {
  return [
    {
      id: generateId(),
      listName: DEFAULT_LIST_NAME,
      tasks: [],
    },
  ];
};

export const initModalData = () => ({
  id: "",
  title: "",
  priority: "",
  deadline: "",
  comment: "",
  isComplete: false,
  isEditing: false,
});
