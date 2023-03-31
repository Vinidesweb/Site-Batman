import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/images1.jpg';
import Perfil from '../../assets/Batman-Logo-2016.png';
import Star from '../../assets/star.svg';
import Footer from "../../components/Footer/footer";

function Comentarios(){
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
        <h1>Comentários</h1>
        <section className="comment-cards">
            <div className="cards">
                <img id="logo" src={Perfil} />
                <h3>Marcos</h3>
                <div className="star">
                    <img className="star" id="star" src={Star} />
                    <img className="star" id="star" src={Star} />
                    <img className="star" id="star" src={Star} />
                    <img className="star" id="star" src={Star} />                    
                </div>
                <p>Filme muito legal!</p>
            </div>
            <div className="cards">
                <img id="logo" src={Perfil} />
                <h3>Sandra</h3>
                <div className="star">
                    <img className="star" id="star" src={Star} />
                    <img className="star" id="star" src={Star} />
                    <img className="star" id="star" src={Star} />
                    <img className="star" id="star" src={Star} />
                    <img className="star" id="star" src={Star} />
                </div>
                <p>O melhor filme do ano! Produção, trilha sonora, elenco AMEIII!</p>
            </div>
            <div className="cards">
                <img id="logo" src={Perfil} />
                <h3>Dona Helenice</h3>
                <div className="star">
                    <img className="star" id="star" src={Star} />
                    <img className="star" id="star" src={Star} />
                    <img className="star" id="star" src={Star} />
                    <img className="star" id="star" src={Star} />
                    <img className="star" id="star" src={Star} />
                </div>
                <p>Já vi 3 vezes e tô amando esse filme! Nota 10!</p>
            </div>
        </section>    
        <Footer />
       </>
    )
}

export default Comentarios