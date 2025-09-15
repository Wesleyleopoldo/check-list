import "./styles.css"

export default function Header() {
    return (
        <header className="header" style={{boxShadow: '0px 4px 16px 0px rgba(0,0,0,0.25)'}}>
            <div className="logo">
                <h2><a href="#">CheckList</a></h2>
            </div>
        </header>
    )
}