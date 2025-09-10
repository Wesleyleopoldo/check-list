import { useState } from "react";
import "./styles.css"
import Task from "../Task";

export default function Main() {
    const [viewMore, setViewMore] = useState("hidden");
    const [expand, setExpand] = useState(false);

    function overFlow() {
        setViewMore("auto");
        setExpand(true);
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
                    
                    <Task task="Lavar prato" description="Faça isso, isso e isso."/>
                    <Task task="Lavar prato" description="Faça isso, isso e isso."/>
                    <Task task="Lavar prato" description="Faça isso, isso e isso."/>
                    <Task task="Lavar prato" description="Faça isso, isso e isso."/>
                    <Task task="Lavar prato" description="Faça isso, isso e isso."/>
                    <Task task="Lavar prato" description="Faça isso, isso e isso."/>

                    <Task task="Lavar prato" description="Faça isso, isso e isso."/>
                    <Task task="Lavar prato" description="Faça isso, isso e isso."/>
                    <Task task="Lavar prato" description="Faça isso, isso e isso."/>
                    <Task task="Lavar prato" description="Faça isso, isso e isso."/>
                </div>

                { !expand && <div className="view-more">
                        <button onClick={overFlow}>Ver mais</button>
                    </div>
                }
            </div>
        </main>
    )
}