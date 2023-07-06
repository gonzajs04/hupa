import socialmedia1 from '../images/socialmedia1.jpg'
import socialmedia1w from '../images/compressed/socialmedia1w.webp'

import socialmedia2 from '../images/socialmedia2.jpg'
import socialmedia2w from '../images/compressed/socialmedia2w.webp'


import socialmedia3 from '../images/socialmedia3.jpg'
import socialmedia3w from '../images/compressed/socialmedia3w.webp'

import socialmedia4 from '../images/socialmedia4.jpg'
import socialmedia4w from '../images/compressed/socialmedia4w.webp'

import socialmedia5 from '../images/socialmedia5.png'
import socialmedia5w from '../images/compressed/socialmedia5w.webp'


export default function Socials() {
    return (
        <section className="socials">
            <div className="socials-images-text">
                <div className="socials-fila primera">
                    <div className="social-image">
                        <a href="https://www.instagram.com/hupahamburguesas/">
                            <picture>
                                <source srcSet={socialmedia1w} type='image/webp' />
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
                                <source srcSet={socialmedia2w} type='image/webp' />
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
                                <source srcSet={socialmedia3w} type='image/webp' />

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
                                <source srcSet={socialmedia4w} type='image/webp' />

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
                                <source srcSet={socialmedia5w} type='image/webp' />

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