import React from "react";
import Header from '../../components/Header/header';
import './styles.css';
import Video from '../../assets/video.mp4'
import Cards from "../../components/cards/cards";
import Footer from "../../components/Footer/footer";

function Home(){

    return (
        <>
            <Header />
            <div id="banner"></div>
            <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video} />
                        Seu navegador não possui suporte para video                   
                    </video>                               
                    <div id="sinopse">
                        <p className="description">
                            Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade.</p>
                        <button className="button">Compar Ingresso</button>
                    </div>
                </div>            
            </div>
            <Cards />
            <Footer />       
        </>
    )
}

export default Home