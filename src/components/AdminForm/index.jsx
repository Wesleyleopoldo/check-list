import "./styles.css"

export default function AdminForm() {

    return (
        <main className="content-admin">
            <div className="admin-container">
                <div className="header-form-task">
                    <button className="icon-exit">
                        &times;
                    </button>
                    
                    <h3 className="title-form">Cadastrar nova tarefa</h3>
                    
                </div>
                <form action="" className="admin-form">
                    <input type="text" />
                    <textarea name="description-textarea" id="description-textarea">
                    </textarea>
                </form>
            </div>
        </main>
    )
}