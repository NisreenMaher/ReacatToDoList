import "./App.css";
import MainBar from "./component/MainBar";
import AddInput from "./component/AddInput";
import ToDoRow from "./component/toDoRow";
import { useEffect, useState } from "react";

function App() {
  const [toDoList, settoDoList] = useState([
    { toDo: "Study to physic", done: false },
    { toDo: "Go to the Shoping", done: true },
  ]);
  const [r, setr] = useState(0);
  const [toggel, settoggel] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [valInput, setValInput] = useState("");

  const handelInput = (data) => setValInput(data);
  const onHandelCheck = (e) => setShowCompleted(e.target.checked);
  const handelAdd = () => {
    var tog = toggel;
    settoggel(!tog);
  };

  const handelInputSave = (data) => {
    var a = toDoList;
    a.push({ toDo: data, done: false });
    settoDoList(a);
    setValInput("");
  };
  const handelClickLi = (dataindex) => {
    if (showCompleted) return;
    var a = toDoList;
    a[dataindex].done = !a[dataindex].done;
    setr(Math.random());
    settoDoList(a);
  };

  const onDelete = (index) => {
    var a = toDoList;
    a.splice(index, 1);
    settoDoList(a);
    setr(Math.random());
  };

  useEffect(() => {
    var a = toDoList;
    settoDoList(a);
  }, [r, toDoList]);
  return (
    <div style={{ margin: "auto", width: "450px" }}>
      <MainBar
        handelAdd={handelAdd}
        onHandelCheck={onHandelCheck}
        checkVal={showCompleted}
      />
      {toggel ? (
        <AddInput
          val={valInput}
          onHandel={handelInput}
          onHandelSave={handelInputSave}
        />
      ) : null}
      <ul>
        {toDoList.map((e, index) => {
          if (showCompleted && !e.done) return null;
          return (
            <ToDoRow
              todo={e.toDo}
              key={index}
              showCompleted={showCompleted}
              dataindex={index}
              done={e.done}
              handelClickLi={handelClickLi}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
