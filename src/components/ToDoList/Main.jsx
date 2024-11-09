import "./main.css";
import Input from "../inputs/input";
import Task from "./Task";
import { useEffect, useState } from "react";
const Main = () => {
  const [counter, setCounter] = useState(1);
  const [data, setData] = useState([]);

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
  return (
    <>
      <div className="main">
        <div className="inputs">
          <Input type="text" id="txt" />
          <Input
            type="button"
            id="add"
            value="Add Task"
            data={data}
            setData={setData}
            num={counter}
            setnum={setCounter}
          />
        </div>
        <div className="tasks">
          {/* {console.log(data)} */}
          {data.map((task) => {
            return (
              <Task key={task.id} data={data} task={task} setData={setData} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
