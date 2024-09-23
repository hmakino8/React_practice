export const searchEngine = (searchKey, listGroup) => {
  if (!searchKey) return listGroup;

  const filterTasks = (tasks) =>
    tasks.filter((task) => task.title.includes(searchKey));

  return listGroup.map((list) => {
    const filteredTasks = filterTasks(list.tasks);

    return {
      ...list,
      tasks: filteredTasks,
      isDisplay: filteredTasks.length > 0 ? list.isDisplay : false,
    };
  });
};
