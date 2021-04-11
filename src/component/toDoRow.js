import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function toDoRow({
  todo,
  done,
  handelClickLi,
  dataindex,
  showCompleted,
  onDelete,
}) {
  const handelclick = (e) => handelClickLi(dataindex);

  const onDeltemisson = (e) => {
    e.stopPropagation();
    onDelete(dataindex);
  };
  return (
    <li
      data-index={dataindex}
      onClick={handelclick}
      style={{
        color: done ? (!showCompleted ? "gray" : "#666") : "#666",
        textDecoration: done
          ? !showCompleted
            ? "line-through"
            : "none"
          : "none",
      }}
    >
      <span>
        <FontAwesomeIcon icon={faTrash} onClick={onDeltemisson} />
      </span>
      {todo}
    </li>
  );
}
