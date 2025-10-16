import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AdminForm from "../../components/AdminForm";
import AdminDashboard from "../../components/AdminDashboard";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";

export default function AdminUpdateTask() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasksState, setTasksState } = useContext(TasksContext);

    // If no id param, render the dashboard (list + edit/remove)
    if (!id) {
        return (
            <div className="admin">
                <Header />
                <AdminDashboard />
                <Footer />
            </div>
        )
    }

    const task = tasksState.find(t => t.id === id);

    function handleSubmit(updated) {
        setTasksState(prev => prev.map(t => t.id === id ? { ...t, ...updated } : t));
        navigate('/admin/update');
    }

    if (!task) {
        return (
            <div className="admin">
                <Header />
                <main style={{ padding: 20 }}><p>Tarefa não encontrada.</p></main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="admin">
            <Header />
            <AdminForm initial={{ title: task.title, description: task.description }} onSubmit={handleSubmit} onCancel={() => navigate('/admin/update')} submitLabel="Atualizar" />
            <Footer />
        </div>
    )
}