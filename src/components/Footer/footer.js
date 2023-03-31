import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
import Logo from '../../assets/images1.jpg';

function Footer(){
    return (
        <footer>
            <img id="logo" src={Logo} /> 
            <span>Todos os direitos reservados©</span>
            <span>Desenvolvido por: Vinícius Brust</span>

            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link to= '/'>
                        <li>Home</li>
                    </Link>
                    <Link to="./contato">
                        <li>Contato</li>
                    </Link>
                    <Link to="./fotos">
                        <li>Fotos</li>
                    </Link>
                    <Link to="./comentarios">
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav> 
        </footer>
    )
}

export default Footer