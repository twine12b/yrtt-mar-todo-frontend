import './Task.css';

function Task(props) {
    return (
        <li className={`task ${props.complete ? 'task--complete' : ''}`}>
            <p className="task__text">This is a task that needs to be done.</p>
            { props.complete === false && <button className="mui-btn mui-btn--raised btn">Complete</button>}
            <button className="mui-btn mui-btn--raised btn">Delete</button>
        </li >
    );
}

export default Task;
