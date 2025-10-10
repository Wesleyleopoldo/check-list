import { useState } from "react";
import "./styles.css"
import { tasks } from "../../datas/data";
import TasksAdmin from "../TasksAdmin";

export default function AdminDashboard() {
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
        <main className="content-dashboard">
            <div className="container-main-dashboard">
                <div className="header-tasks-dashboard">
                    <div className="title-tasks-dashboard">
                        <h1>Tarefas</h1>
                    </div>
                    <div className="progress-bar-dashboard">
                        <div className="progress-fill-dashboard" style={{ width: `${progressPercent}%` }}></div>
                    </div>
                </div>
                <div className="tasks-dashboard" style={{ overflowY: viewMore ? "auto" : "hidden" }}>

                    {
                        tasks.map((task) => (
                            <TasksAdmin
                                key={task.id}
                                task={task.title}
                                description={task.description}
                                checked={completed[task.id]}
                                onCheck={(isChecked) => handleTaskCheck(task.id, isChecked)}
                            />
                        ))
                    }

                </div>

                {tasks.length > 6 && !viewMore && (<div className="view-more-dashboard">
                    <button onClick={overFlow}>Ver mais</button>
                </div>
                )}
            </div>
        </main>
    )
}