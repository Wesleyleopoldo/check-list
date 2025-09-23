import { useState } from "react";
import "./styles.css"
import Task from "../Task";
import { tasks } from "../../datas/data";

export default function Main() {
    const [viewMore, setViewMore] = useState(false);
    const [completed, setCompleted] = useState(Array(tasks.length).fill(false));

    function overFlow() {
        setViewMore(true);
    }

    function handleTaskCheck(index, isChecked) {
        const updated = [...completed];
        updated[index] = isChecked;
        setCompleted(updated);
    }

    const progressPercent = (completed.filter(Boolean).length / tasks.length) * 100;

    return (
        <main className="content">
            <div className="container-main">
                <div className="header-tasks">
                    <div className="title-tasks">
                        <h1>Tarefas</h1>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
                    </div>
                </div>
                <div className="tasks" style={{ overflowY: viewMore ? "auto" : "hidden" }}>

                    {
                        tasks.map((task) => (
                            <Task
                                key={task.id}
                                task={task.title}
                                description={task.description}
                                checked={completed[task.id]}
                                onCheck={(isChecked) => handleTaskCheck(task.id, isChecked)}
                            />
                        ))
                    }

                </div>

                {tasks.length > 6 && !viewMore && (<div className="view-more">
                    <button onClick={overFlow}>Ver mais</button>
                </div>
                )}
            </div>
        </main>
    )
}