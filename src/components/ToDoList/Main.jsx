import "./main.css";
import "../inputs/input.css";
// import Input from "../inputs/input";
import Task from "./Task";
import { useEffect, useState } from "react";
const Main = () => {
  const [counter, setCounter] = useState(1);
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState("");
  const [id, setId] = useState(1);
  // const [done, setDone] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("localData");
    if (storedTasks) {
      setData(JSON.parse(storedTasks));
      const storedCounter = localStorage.getItem("counter");
      if (storedCounter) {
        setCounter(Number(storedCounter));
      }
    }
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("localData", JSON.stringify(data));
      localStorage.setItem("counter", counter);
    }
  }, [data, counter]);

  const handleClick = () => {
    if (!isEdit && value.trim()) {
      setData([
        {
          id: data.length + 1,
          isDone: false,
          task: value,
        },
        ...data,
      ]);
    } else if (isEdit && value.trim()) {
      const selectedTask = data.find((task) => task.id === id);
      const updatedData = data.map((task) => {
        selectedTask.task = value;
        return task;
      });
      setData(updatedData);
    }
  };

  return (
    <>
      <div className="main">
        <div className="inputs">
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <input
            type="button"
            value={isEdit ? "Edit" : "Add"}
            onClick={handleClick}
          />
        </div>
        <div className="tasks">
          {/* {console.log(data)} */}
          {data.map((task) => {
            return (
              <Task
                key={task.id}
                data={data}
                task={task}
                setIsEdit={setIsEdit}
                setData={setData}
                setValue={setValue}
                setId={setId}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
