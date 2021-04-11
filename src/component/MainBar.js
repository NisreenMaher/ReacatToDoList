import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function MainBar({ handelAdd, onHandelCheck, checkVal }) {
  const handelChangecheckBox = (e) => onHandelCheck(e);

  return (
    <div>
      <h1 className="MainContent">
        To-Do List
        <span className="icon">
          <FontAwesomeIcon icon={faPlus} onClick={handelAdd} />
        </span>
        <div className="check">
          <input
            type="checkbox"
            value={checkVal}
            onChange={handelChangecheckBox}
          />
          <span className="label">show completed misson</span>
        </div>
      </h1>
    </div>
  );
}
