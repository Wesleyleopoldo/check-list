import { useState } from "react";
import "./styles.css";

export default function TasksAdmin(props) {
    const [progress, setProgress] = useState(0);
    const [checked, setChecked] = useState(false);

    function fillTask(e) {
        const isChecked = e.target.checked;
        setChecked(isChecked);
        setProgress(isChecked ? 100 : 0);

        props.onCheck(e.target.checked);
    }

    return (
        <div className="task-container">

            <div className="checkbox-div">
                <input type="checkbox" name="checked" id="1" className="custom-checkbox"
                    checked={checked}
                    onChange={fillTask}
                />
            </div>


            <div className="tasks-details">
                <div className="task-title">
                    <h3>{props.task}</h3>
                </div>
                <div className="task-description">
                    <p>{props.description}</p>
                </div>

                <div className="task-progress">
                    <div className="task-progress-fill" style={{ width: `${progress}%` }}></div>
                </div>

            </div>

            <div className="options-admin">
                <button className="btn-editar">Editar</button>
                <button className="btn-remover">Remover</button>
            </div>
        </div>
    )
}