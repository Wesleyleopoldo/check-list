import { useState, useContext } from "react";
import "./styles.css"
import { tasks } from "../../datas/data";
import TasksAdmin from "../TasksAdmin";
import { useNavigate } from "react-router-dom";
import { TasksContext } from "../../contexts/TasksContext";

export default function AdminDashboard() {
    const [viewMore, setViewMore] = useState(false);
    const { tasksState, setTasksState, completed, setCompleted } = useContext(TasksContext);
    const navigate = useNavigate();

    function overFlow() {
        setViewMore(true);
    }

    function handleTaskCheck(index, isChecked) {
        const updated = [...completed];
        updated[index] = isChecked;
        setCompleted(updated);
    }

    function handleRemove(id) {
        setTasksState(prev => {
            const idx = prev.findIndex(t => t.id === id);
            const newTasks = prev.filter(t => t.id !== id);
            setCompleted(old => {
                const copy = [...old];
                if (idx !== -1) copy.splice(idx, 1);
                return copy;
            });
            return newTasks;
        });
    }

    function handleEdit(id) {
        // navigate to edit page; AdminUpdateTask can read the id from the route
        navigate(`/admin/update/${id}`);
    }

    const progressPercent = (completed.filter(Boolean).length / tasksState.length) * 100;

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
                        tasksState.map((task, index) => (
                            <TasksAdmin
                                key={task.id}
                                id={task.id}
                                task={task.title}
                                description={task.description}
                                checked={completed[index]}
                                onCheck={(isChecked) => handleTaskCheck(index, isChecked)}
                                onRemove={() => handleRemove(task.id)}
                                onEdit={() => handleEdit(task.id)}
                            />
                        ))
                    }

                </div>

                {tasksState.length > 6 && !viewMore && (<div className="view-more-dashboard">
                    <button onClick={overFlow}>Ver mais</button>
                </div>
                )}
            </div>
        </main>
    )
}