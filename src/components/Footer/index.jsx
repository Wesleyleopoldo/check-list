import { FaInstagram } from "react-icons/fa"
import "./styles.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="direitos">
                <p>Todos os direitos reservados <br/><span>&copy;Wesley Silva</span></p>
            </div>
            
            <div className="icon-container">
                <h3>Me siga no instagram</h3>
                <a href="https://instagram.com/wesleyleopoldo_" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon"></FaInstagram>
                </a>
            </div>
        </footer>
    )
}