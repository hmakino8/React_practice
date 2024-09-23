import { generateId } from "./utils";
import { DEFAULT_LIST_NAME } from "./constants";

export const initListGroup = () => [
  {
    listId: generateId(),
    listName: DEFAULT_LIST_NAME,
    isDefault: true,
    isDisplay: true,
    tasks: [],
  },
];

export const initModalData = () => ({
  listId: "",
  taskId: "",
  title: "",
  priority: "",
  deadline: "",
  comment: "",
  isComplete: false,
  isEditing: false,
});
