import { useState } from "react";
import "./styles.css";

export default function AdminDashboard() {
    let progressPercent = 1;
    return (
        <main className="content-admin">
            <div className="admin-container">
                <div className="header-tasks">
                    <div className="title-tasks">
                        <h1>Tarefas</h1>
                    </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${progressPercent}%`}}></div>
                        </div>
                </div>

                <div className="tasks">
                    
                </div>

            </div>
        </main>
    );
}