import * as Style from "../style/styleTaskList";

export const Clock = () => {
  return (
    <span className="material-symbols-outlined" style={Style.iconClock}>
      schedule
    </span>
  );
};

export const MoreVert = () => {
  return (
    <span className="material-symbols-outlined" style={Style.iconMoreVert}>
      more_vert
    </span>
  );
};

export const ToggleMenuProject = () => {
  return <span className="material-symbols-outlined">menu</span>;
};

export const AddTask = () => {
  return (
    <span className="material-symbols-outlined" style={Style.IconButtonAddTask}>
      add_task
    </span>
  );
};
