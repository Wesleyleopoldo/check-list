import { useState } from "react"
import "./styles.css"

export default function AdminForm({ initial = { title: "", description: "" }, onSubmit, onCancel, submitLabel = "Salvar" }) {
    const [title, setTitle] = useState(initial.title || "")
    const [description, setDescription] = useState(initial.description || "")

    function handleSubmit(e) {
        e.preventDefault()
        if (onSubmit) onSubmit({ title: title.trim(), description: description.trim() })
    }

    return (
        <main className="content-admin">
            <div className="admin-container">
                <div className="header-form-task">
                    <button className="icon-exit" type="button" onClick={() => onCancel && onCancel()}>
                        &times;
                    </button>

                    <h3 className="title-form">Cadastrar nova tarefa</h3>

                </div>
                <form action="" className="admin-form" onSubmit={handleSubmit}>
                    <div className="inputs-div">

                        <div className="label-div-title">
                            <label htmlFor="title-input">Título</label>
                        </div>
                        <input type="text" id="title-input" placeholder="Titulo da nova tarefa..." value={title} onChange={e => setTitle(e.target.value)} />
                        <div className="label-div-description"><label htmlFor="description-textarea">Descrição</label></div>
                        <textarea name="description-textarea" id="description-textarea" placeholder="Descrição da tarefa..." value={description} onChange={e => setDescription(e.target.value)}>
                        </textarea>
                        <div className="button-submit">
                            <button>{submitLabel}</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}