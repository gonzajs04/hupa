import socialmedia1 from '../images/socialmedia1.jpg'
import socialmedia2 from '../images/socialmedia2.jpg'
import socialmedia3 from '../images/socialmedia3.jpg'
import socialmedia4 from '../images/socialmedia4.jpg'
import socialmedia5 from '../images/socialmedia5.png'

export default function Socials() {
    return (
        <section className="socials">
            <div className="socials-images-text">
                <div className="socials-fila primera">
                    <div className="social-image">
                        <a href="https://www.instagram.com/hupahamburguesas/">
                            <picture>
                                <img src={socialmedia1} alt="socialimage1" />
                            </picture>
                            <div className="social-panel">
                                <p>Instagram</p>
                            </div>
                        </a>
                    </div>

                    <div className="container-socials-text">
                        <p>- Mira tu favorita -</p>
                        <h2>Nuestras Redes</h2>
                    </div>

                    <div className="social-image">
                        <a href="https://www.facebook.com/hupahamburguesas/">
                            <picture>
                                <img src={socialmedia2} alt="socialimage1" />
                            </picture>
                            <div className="social-panel">
                                <p>Facebook</p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="socials-fila">
                    <div className="social-image">
                        <a href="https://www.tiktok.com/@hupa_hamburguesas">
                            <picture>
                                <img src={socialmedia3} alt="socialimage1" />
                            </picture>
                            <div className="social-panel">
                                <p>TikTok</p>
                            </div>
                        </a>
                    </div>

                    <div className="social-image">
                        <a href="https://www.linktr.ee/hupahamburguesas">
                            <picture>
                                <img src={socialmedia4} alt="socialimage1" />
                            </picture>
                            <div className="social-panel">
                                <p>Linktr</p>
                            </div>
                        </a>
                    </div>

                    <div className="social-image">
                        <a href="https://www.twitter.com/hupahamburguesas/">
                            <picture>
                                <img src={socialmedia5} alt="socialimage1" />
                            </picture>
                            <div className="social-panel">
                                <p>Twitter...</p>
                            </div>
                        </a>
                    </div>
                </div>



            </div>
        </section>
    )
}