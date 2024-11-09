import { useCallback, useState } from "react";
import { useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import Header from "./components/Header/Header";
// import Form from "./components/Form";
import Main from "./components/ToDoList/Main";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
const App = () => {
  // const [dataFetched, setDataFetched] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const GetData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/albums/1/photos "
  //     );
  //     const data = await res.json();
  //     if (res.status === 200) {
  //       setDataFetched(data);
  //       setIsLoading(false);
  //     }
  //     // console.log(data);
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.log(error);
  //   }
  // };
  // useEffect(() => GetData, []);

  return (
    <>
      <div className="content">
        <Main />
      </div>
    </>
  );
};

export default App;
