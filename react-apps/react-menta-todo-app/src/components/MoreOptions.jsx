import { useState, useEffect, useRef } from "react";
import { ListMoreOptions } from "./ListMoreOptions";
import { TaskMoreOptions } from "./TaskMoreOptions";
import { ButtonMoreOptions } from "./ButtonMoreOptions";
import styles from "./styles/MoreOptions.module.css";

export const MoreOptions = (props) => {
  const { list, setListGroup, task, setTasks, setIsModalOpen, setModalData } =
    props;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <ButtonMoreOptions list={list} setIsOpen={setIsOpen} />
      {isOpen &&
        (list ? (
          <ListMoreOptions
            list={list}
            setListGroup={setListGroup}
            dropdownRef={dropdownRef}
          />
        ) : (
          <TaskMoreOptions
            task={task}
            setTasks={setTasks}
            setIsModalOpen={setIsModalOpen}
            setModalData={setModalData}
            dropdownRef={dropdownRef}
          />
        ))}
    </div>
  );
};
