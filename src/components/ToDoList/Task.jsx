import "./task.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faRepeat } from "@fortawesome/free-solid-svg-icons";

const Task = (prop) => {
  const handleEdit = (e) => {
    e.stopPropagation();
    prop.setIsEdit(true);
    prop.setValue(prop.task.task);
    prop.setId(prop.task.id);
  };

  return (
    <>
      {/* {console.log(prop.task)} */}
      <div
        className={`task ${prop.task.isDone ? "done" : ""}`}
        id={prop.task.id}
        onClick={(e) => {
          e.currentTarget.classList.toggle("done");

          prop.setData(
            prop.data.map((task) => {
              if (task.id == e.currentTarget.id) {
                return { ...task, isDone: !task.isDone };
              }
              return task;
            })
          );
        }}
      >
        <div className="txt">{prop.task.task}</div>
        <span>
          <div
            className="Delete"
            onClick={(e) => {
              e.stopPropagation();
              const updatedData = prop.data.filter(
                (task) => task.id !== prop.task.id
              );
              prop.setData(updatedData);

              // تحديث الـ localStorage
              localStorage.setItem("localData", JSON.stringify(updatedData));
            }}
          >
            {<FontAwesomeIcon icon={faTrash} />}
          </div>
          <div className="Edit" onClick={handleEdit}>
            {<FontAwesomeIcon icon={faRepeat} />}
          </div>
        </span>
      </div>
    </>
  );
};

export default Task;
