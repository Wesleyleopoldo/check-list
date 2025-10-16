import { useState } from "react";
import "./styles.css";
import Modal from "../Modal";

export default function Task(props) {
    const [progress, setProgress] = useState(0);
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);

    function fillTask(e) {
        const isChecked = e.target.checked;
        setChecked(isChecked);
        setProgress(isChecked ? 100 : 0);

        props.onCheck(e.target.checked);
    }

    function openModal() { setOpen(true) }
    function closeModal() { setOpen(false) }

    return (
        <div className="task-container">

            <div className="checkbox-div">
                <input type="checkbox" name="checked" id="1" className="custom-checkbox"
                checked={checked}
                onChange={fillTask}
                />
            </div>


            <div className="tasks-details" onClick={openModal} role="button" tabIndex={0}>
                <div className="task-title">
                    <h3>{props.task}</h3>
                </div>
                <div className="task-description">
                    <p>{props.description}</p>
                </div>

                <div className="task-progress">
                    <div className="task-progress-fill" style={{width: `${progress}%`}}></div>
                </div>
            </div>

            <Modal open={open} onClose={closeModal} title={props.task} description={props.description} />
        </div>
    )
}