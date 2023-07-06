import { lazy } from 'react'
import {LinkButton} from '../StyledComponents/LinkButton.jsx'
import menu_adicionales from '../images/menu_adicionales.jpg'
import menu_adicionalesw from '../images/compressed/menu_adicionalesw.webp'

import menu_burgers from '../images/menu_burgers.jpg'
import menu_burgersw from '../images/compressed/menu_burgersw.webp'

import menu_pintas from '../images/menu_pintas.jpg'
import menu_pintasw from '../images/compressed/menu_pintasw.webp'

import burgericon from '../images/icons/burgercard.svg';
import burgericonw from '../images/compressed/burgercardw.webp';

import friesicon from '../images/icons/friesicon.png';
import friesiconw from '../images/compressed/friesiconw.webp';

import beericon from '../images/icons/beericon.png';
import beericonw from '../images/compressed/beericonw.webp';

export default function Categorias() {

    const Categorias = [
        { nombre: "Hamburguesas", icon: burgericon, iconW: burgericonw, desc: "Disfruta de las mejores hamburguesas de toda la Argentina", imgCategoria: menu_burgers, imgCategoriaw:menu_burgersw, direccionWeb: 'https://drive.google.com/file/d/1MyOoNAn4ye-VnElJSf0_LiPSt0giqG1H/view?pli=1' },
        { nombre: "Adicionales", icon: friesicon, iconW:friesiconw,desc: "Acompaña tus hamburguesas con nuestros acompañamientos!", imgCategoria: menu_adicionales,imgCategoriaw:menu_adicionalesw, direccionWeb: 'https://drive.google.com/file/d/1MyOoNAn4ye-VnElJSf0_LiPSt0giqG1H/view?pli=1' },
        { nombre: "Pintas", icon: beericon, iconW:beericonw, desc: "Acompaña tu comida con las mejores pintas para vos!", imgCategoria: menu_pintas, imgCategoriaw:menu_pintasw, direccionWeb: 'https://drive.google.com/file/d/1MyOoNAn4ye-VnElJSf0_LiPSt0giqG1H/view?pli=1' }
    ]
    return (
        <section className="menu">
            <div className="container-categorias">
                {Object.keys(Categorias).length > 0 && Categorias.map((categoria, index) => (
                    <div className="categoria" key={index}>
                        <div className="categoria-img">
                            <picture>
                                <source srcSet={categoria.imgCategoriaw} type='image/webp' />
                                <img loading="lazy" src={categoria.imgCategoria} alt="Imagen categoria" />

                            </picture>
                        </div>

                        <div className="nombre-button">
                            <div className="icon-categoria">
                                <picture>
                                <source srcSet={categoria.iconW} type='image/webp' />
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