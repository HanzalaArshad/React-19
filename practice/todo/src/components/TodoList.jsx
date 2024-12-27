import { MdCheck, MdDeleteForever } from "react-icons/md";


 const TodoList = ({
  data,
  checked,
  onHandleDelete,
  onhandlechecktodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onhandlechecktodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDelete(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default  TodoList;
