import {useTodos} from '../../TodosContext.jsx';


function AddTodoModal() {

    const store = useTodos();

    function addTaskHandler() {
        let newTodo = {isDone: false};
        newTodo.title = document.querySelector('input[name=title]').value;
        newTodo.description = document.querySelector('textarea[name=description]').value
        if (newTodo.title && newTodo.description) {
            store.dispatch({type: 'added', newTodo});
            store.setModalIsActive(false);
        } else {
            alert('Please enter the title and description for the todo.');
        }
    }
 
    return (
    <>
        <div className="form">      
            <h3>Add a new task</h3>
            <label htmlFor="title">Title *</label>
            <input type="text" name="title" placeholder="Enter a title..." /><br />
            <label htmlFor="description">Description *</label>
            <textarea name="description" rows="4" placeholder="Enter a description..." /><br />
            <button onClick={addTaskHandler} className="btn gray">Add Task</button>
        </div>
    </>
    )
  }
  
  export default AddTodoModal