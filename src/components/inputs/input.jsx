import "./input.css";
const inp = (prop) => {
  return (
    <>
      <input
        type={prop.type}
        value={prop.value}
        id={prop.id}
        onClick={() => {
          if (prop.setData) {
            let txt = document.getElementById("txt");
            const btn = document.getElementById("add");
            let cond = true;
            prop.data.map((task) => {
              if (task.task == txt.value) cond = false;
            });
            if (txt.value.trim() && cond && btn.value !== "Edit") {
              let newTask = {
                id: prop.num,
                task: txt.value,
                isDone: false,
              };

              console.log(newTask);
              prop.setnum(prop.num + 1);
              prop.setData([newTask, ...prop.data]);
            }
            txt.value = "";
          }
        }}
      />
    </>
  );
};

export default inp;
