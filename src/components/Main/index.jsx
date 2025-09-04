import "./styles.css"
import Task from "../Task";

export default function Main() {
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
                <Task task="Lavar prato" description="Faça isso, isso e isso."/>

                <Task task="Lavar prato" description="Faça isso, isso e isso."/>

                <Task task="Lavar prato" description="Faça isso, isso e isso."/>

                <Task task="Lavar prato" description="Faça isso, isso e isso."/>

                <Task task="Lavar prato" description="Faça isso, isso e isso."/>

            </div>
        </main>
    )
}