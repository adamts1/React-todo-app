import { Container, Table } from 'react-bootstrap';
import './RowTask.css'
import { IoTrashOutline } from "react-icons/io5";
import { useState } from 'react';


function List(props) {
  // const
  return <tr className="border_bottom">
    <td className="check">
      <input index={props.index} type="checkbox" onChange={props.checkComplete} checked={props.status} />
    </td>
    {props.status
      ? <td className="complete">{props.value}</td>
      : <td className="value">{props.value}</td>
    }
    <td><IoTrashOutline className="iconWarper" onClick={props.clickTarsh} index={props.index} className="icon" /></td>
  </tr>;
}

function RowTask({ tasks, onDelete, onCheck, filter }) {

  if (filter == "Completed") {
    var filterData = tasks.filter(item => item.complete === true)
  } else if (filter == "Active") {
    var filterData = tasks.filter(item => item.complete === false)
  } else {
    var filterData = tasks
  }

  const data = filterData.map((task, index) =>
    <List
      key={index}
      index={index}
      value={task.content}
      status={task.complete}
      clickTarsh={onDelete}
      checkComplete={onCheck}
    />
  )
  return (
    <div className="c-rowtask">
        <Table responsive="sm" id="todo-table" >
          <tbody>
            {data}
          </tbody>
        </Table>
    </div>
  );
}

export default RowTask;



