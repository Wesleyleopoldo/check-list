import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AdminForm from "../../components/AdminForm";

export default function Admin() {
    return (
        <div className="admin">
            <Header />
            <AdminForm />
            <Footer />
        </div>
    )
}