import './AddTask.css';

function AddTask() {
    return (
        <div className="mui-row add-task__actions">
            <label htmlFor="add-task-input" className="visuallyhidden">add new todo task:</label>
            <input id="add-task-input" className="mui-col-xs-12 mui-col-md-9 add-task__input-field"></input>
            <button className="mui-btn mui-btn--raised btn mui-col-xs-12 mui-col-md-3">Add</button>
        </div>
    );
}

export default AddTask;
