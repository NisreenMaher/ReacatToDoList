import React from "react";

export default function AddInput({ val, onHandel, onHandelSave }) {
  const handelInput = (e) => {
    if (e.keyCode === 13) {
      onHandelSave(e.target.value);
    }
  };

  const handelInputChange = (e) => onHandel(e.target.value);

  return (
    <div>
      <input
        type="text"
        placeholder="Add New Todo"
        value={val}
        onKeyDown={handelInput}
        onChange={handelInputChange}
      />
    </div>
  );
}
