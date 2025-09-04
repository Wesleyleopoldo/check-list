import "./styles.css";

export default function Task(props) {
    return (
        <div className="task-container">

            <div className="checkbox-div">
                <input type="checkbox" name="checked" id="1" className="custom-checkbox" />
            </div>


            <div className="tasks-details">
                <div className="task-title">
                    <h3>{props.task}</h3>
                </div>
                <div className="task-description">
                    <p>{props.description}</p>
                </div>

                <div className="task-progress">
                    <div className="task-progress-fill"></div>
                </div>
            </div>
        </div>
    )
}