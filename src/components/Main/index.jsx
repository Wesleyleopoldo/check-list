import { useState } from "react";
import "./styles.css"
import Task from "../Task";
import { tasks } from "../../datas/data";

export default function Main() {
    const [viewMore, setViewMore] = useState("hidden");
    const [expand, setExpand] = useState(false);

    function overFlow() {
        setViewMore("auto");
        setExpand(false);
    }

    return (
        <main className="content">
            <div className="container-main">
                <div className="header-tasks">
                    <div className="title-tasks">
                        <h1>Tarefas</h1>
                    </div>
                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>
                </div>
                <div className="tasks" style={{ overflowY: `${viewMore}` }}>
                    
                    {  
                        tasks.map((task) => (
                            <Task task={task.title} description={task.description} />
                        ))
                    }
                    
                </div>

                { (!expand) && (tasks.length > 6 && <div className="view-more">
                        <button onClick={overFlow}>Ver mais</button>
                    </div>
                )}
            </div>
        </main>
    )
}