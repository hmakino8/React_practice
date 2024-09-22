import * as Style from "../style/styleTaskList";

export const Clock = () => {
  return (
    <span className="material-symbols-outlined" style={Style.iconClock}>
      schedule
    </span>
  );
};

export const VisibilityOff = () => {
  return <span className="material-symbols-outlined">visibility_off</span>;
};

export const Info = () => {
  return <span className="material-symbols-outlined">info</span>;
};

export const Trash = () => {
  return <span className="material-symbols-outlined">delete</span>;
};

export const Search = () => {
  return <span className="material-symbols-outlined">search</span>;
};

export const ArrowRight = () => {
  return <span className="material-symbols-outlined">arrow_right</span>;
};

export const ArrowDown = () => {
  return <span className="material-symbols-outlined">arrow_drop_down</span>;
};

export const KeyboardArrowDown = () => {
  return <span className="material-symbols-outlined">keyboard_arrow_down</span>;
};

export const KeyboardControlKey = () => {
  return (
    <span className="material-symbols-outlined">keyboard_control_key</span>
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

export const CreateTaskList = () => {
  return (
    <span
      className="material-symbols-outlined"
      style={{ marginRight: "15px", fontSize: "1.6rem" }}
    >
      add
    </span>
  );
};
