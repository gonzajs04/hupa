import { lazy } from 'react'
import {LinkButton} from '../StyledComponents/LinkButton.jsx'
import menu_adicionales from '../images/menu_adicionales.jpg'
import menu_burgers from '../images/menu_burgers.jpg'
import menu_pintas from '../images/menu_pintas.jpg'
import burgericon from '../images/icons/burgericon.png';
import friesicon from '../images/icons/friesicon.png';
import beericon from '../images/icons/beericon.png';

export default function Categorias() {

    const Categorias = [
        { nombre: "Hamburguesas", icon: burgericon, desc: "Disfruta de las mejores hamburguesas de toda la Argentina", imgCategoria: menu_burgers, direccionWeb: 'https://drive.google.com/file/d/1MyOoNAn4ye-VnElJSf0_LiPSt0giqG1H/view?pli=1' },
        { nombre: "Adicionales", icon: friesicon, desc: "Acompaña tus hamburguesas con nuestros acompañamientos!", imgCategoria: menu_adicionales, direccionWeb: 'https://drive.google.com/file/d/1MyOoNAn4ye-VnElJSf0_LiPSt0giqG1H/view?pli=1' },
        { nombre: "Pintas", icon: beericon, desc: "Acompaña tu comida con las mejores pintas para vos!", imgCategoria: menu_pintas, direccionWeb: 'https://drive.google.com/file/d/1MyOoNAn4ye-VnElJSf0_LiPSt0giqG1H/view?pli=1' }
    ]
    return (
        <section className="menu">
            <div className="container-categorias">
                {Object.keys(Categorias).length > 0 && Categorias.map((categoria, index) => (
                    <div className="categoria" key={index}>
                        <div className="categoria-img">
                            <picture>

                                <img loading="lazy" src={categoria.imgCategoria} alt="Imagen categoria" />

                            </picture>
                        </div>

                        <div className="nombre-button">
                            <div className="icon-categoria">
                                <picture>
                                    <img loading="lazy" src={categoria.icon} alt="icono" /> {/*COMPRIMIRLA Y HACERLA WEBP */}
                                </picture>

                            </div>
                            <div className="categoria-nombre">
                                <p>{categoria.nombre}</p>
                            </div>
                            <LinkButton href={categoria.direccionWeb}>Consultar</LinkButton>
                        </div>

                    </div>
                ))}
            </div>
        </section>

    )
}