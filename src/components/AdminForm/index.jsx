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
                    <div className="inputs-div">

                        <div className="label-div-title">
                            <label htmlFor="title-input">Título</label>
                        </div>
                        <input type="text" id="title-input" placeholder="Titulo da nova tarefa..." />
                        <div className="label-div-description"><label htmlFor="description-textarea">Descrição</label></div>
                        <textarea name="description-textarea" id="description-textarea" placeholder="Descrição da tarefa...">
                        </textarea>
                        <div className="button-submit">
                            <button>Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}