import { generateId } from "./utils";
import { TESTDATA_LISTS, TESTDATA_TASKS } from "../Test/testData";
import { DEFAULT_LIST_NAME } from "./constants";

export const initListGroup = (DEBUG) =>
  DEBUG
    ? TESTDATA_LISTS()
    : [
        {
          listId: generateId(),
          listName: DEFAULT_LIST_NAME,
          isDefault: true,
          isDisplay: true,
          isSortByDateCreated: false,
          isSortBylastUpdated: false,
          tasks: [],
        },
      ];

export const initTasks = (DEBUG) =>
  DEBUG
    ? TESTDATA_TASKS().map((prev) => ({
        ...prev,
        taskId: generateId(),
        dateCreated: new Date(),
        lastUpdated: new Date(),
      }))
    : [];

export const initModalData = () => ({
  listId: "",
  taskId: "",
  title: "",
  priority: "",
  deadline: "",
  comment: "",
  isComplete: false,
  dateCreated: "",
  lastUpdated: "",
});
