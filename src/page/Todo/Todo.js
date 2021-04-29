import './Todo.css'
import FormInput from '../../components/FormInput/FormInput'
import { useState, useEffect } from 'react';
import RowTask from '../../components/RowTask/RowTask';
import TaskModel from '../../Model/TaskModel'
import SortSection from '../../components/SortSection/SortSection'
import { Container ,Row, Col } from 'react-bootstrap';


function Todo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [filter, setFilter] = useState("");
    const [activeCounter, setActiveCounter] = useState(0);

    useEffect(() => {
        setActiveCounter(tasks.filter(item => item.complete === false).length)
    }); 
    
    // Only re-run the effect if count changes
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && event.target.value) {
          setTasks(tasks.concat(new TaskModel(event.target.value, false)));
          setTask("")
        }
      }
    
      
    const populateInput = (event) => {
      setTask(event.target.value) 
    }

    const deleteItem = (e) => {
      if(e.target.tagName == 'svg'){
        var taskIndex = e.target.getAttribute("index")
      }else{
        var taskIndex = e.target.parentNode.getAttribute("index") 
      }

      setTasks(tasks.filter(item => item !== tasks[taskIndex]))     
    }

    const checkedTask = (e) => { 
      const isChacked = tasks[(e.target.getAttribute("index"))].complete
      tasks[(e.target.getAttribute("index"))].complete = !isChacked
   
      setTasks(tasks.filter(item => item == item))     
    }

    //Filter
    const getFilter = (e) =>{
      setFilter(e.target.innerHTML)

    }

    return (
        <div className='p-todo'>
          <Container>
            <Row>
            <Col lg="12" xs="6">
              <h1>Todos1</h1>
            </Col>           
            <Col lg="12"  xs="6">
              <h5>Made by Adam Tsityat</h5>
            </Col>
            </Row>
            <FormInput value={task} onKeyDown={handleKeyDown}  onChange={populateInput}/>
            <RowTask filter={filter} tasks = {tasks} onDelete={deleteItem} onCheck={checkedTask}/>
            <SortSection onClick={getFilter} coubnterComplete={activeCounter} />
          </Container>

        </div>
    );
}

export default Todo;
