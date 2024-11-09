import "./task.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faRepeat } from "@fortawesome/free-solid-svg-icons";

const element = [
  <FontAwesomeIcon icon={faTrash} />,
  <FontAwesomeIcon icon={faRepeat} />,
];

const Task = (prop) => {
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
            {element[0]}
          </div>
          <div
            className="Edit"
            onClick={(e) => {
              e.stopPropagation();
              const task = document.getElementById(prop.task.id);
              const inp = document.getElementById("txt");
              const btn = document.getElementById("add");
              inp.value = prop.task.task;
              btn.value = "Edit";
              btn.onclick = () => {
                if (btn.value === "Edit") {
                  prop.setData((prevData) => {
                    const updatedData = prevData.map((T) => {
                      if (T.id === prop.task.id) {
                        return { ...T, task: inp.value };
                      }
                      return T;
                    });

                    localStorage.setItem(
                      "localData",
                      JSON.stringify(updatedData)
                    );
                    return updatedData;
                  });
                }
              };
            }}
          >
            {element[1]}
          </div>
        </span>
      </div>
    </>
  );
};

export default Task;
