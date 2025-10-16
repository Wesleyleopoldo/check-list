import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AdminForm from "../../components/AdminForm";
import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";

export default function Admin() {
    const { tasksState, setTasksState, setCompleted } = useContext(TasksContext);

    function handleCreate(newTask) {
        const id = String(Date.now());
        setTasksState(prev => [...prev, { id, title: newTask.title, description: newTask.description }]);
        setCompleted(prev => [...prev, false]);
    }

    return (
        <div className="admin">
            <Header />
            <AdminForm onSubmit={handleCreate} onCancel={() => {}} submitLabel={"Cadastrar"} />
            <Footer />
        </div>
    )
}