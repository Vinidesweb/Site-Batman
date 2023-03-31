import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/images1.jpg';
import Footer from "../../components/Footer/footer";

function Fotos(){
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
        <div className="fotos-geral">
            <div className="container-fotos">
                <div className="card fotos-1"></div>
                <div className="card fotos-2"></div>
                <div className="card fotos-3"></div>
                <div className="card fotos-4"></div>
                <div className="card fotos-5"></div>
                <div className="card fotos-6"></div>
            </div>
        </div>
        <Footer />
       </>
    )
}

export default Fotos