import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/images1.jpg';
import Poster from '../../assets/The_Batman_poster.jpg';
import Footer from "../../components/Footer/footer";

function Contato(){
    return (
        <>        
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/comentarios'>
                        <li>Comentários</li>                    
                    </Link>
                </ul>
            </nav>
        </header>
        <div className="contact">
            <form className="formulario">
                <p>Envie uma mensagem preenchendo o formulário abaixo</p>
            <div className="field">
                <label for="nome">Seu Nome:</label>
                <input className="text" id="nome" placeholder="Digite seu nome*" />
            </div>
            <div className="field">
                <label for="telefone">Seu Telefone:</label>
                <input className="text" id="telefone" placeholder="Digite seu Telefone" />
            </div>
            <div className="field">
                <label for="email">Seu E-Mail:</label>
                <input className="email" id="email" placeholder="Digite seu E-Mail*" />
            </div>
            <div className="radiobox">
                <span>Deseja receber nossas novidades?</span>
                <input className="radio" type="radio" id="radio" name="novidades" value="Sim" /><label for="sim">Sim</label>        
                <input className="radio" type="radio" id="radio" name="novidades" value="Não" /><label for="não">Não</label>           
            </div>
            <textarea className="mensagem" id="mensagem" rows="10" placeholder="mensagem"></textarea>
            <button className="button">Enviar</button>
            </form>
        </div>
        <Footer />             
        </>
    )
}

export default Contato