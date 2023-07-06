import friesicon from '../images/icons/friesicon.png';
import nosotrosimg from '../images/nosotrosimg.jpg';
import nosotrosimgw from '../images/compressed/nosotrosimgw.webp';

export default function Nosotros() {
    return (

        <section className="nosotros">
            <div className="contenedor-nosotros">

                <div className="contenedor-texto-nosotros">
                    <div className="title-nosotros">
                        <h2>Nacimos salvajes</h2>
                        {/* <div className="contenedor-fries-icon">
                            <picture>

                                <img src={friesicon} loading="lazy" alt="icono papas" />
                            </picture>
                        </div> */}
                    </div>

                    <div className="nosotros-parrafos">
                        <div className="parrafo-nosotros">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi dicta nemo natus sapiente alias, ullam laborum quod provident animi quas debitis eveniet. Nihil, vel porro magnam eius blanditiis quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptate delectus optio similique vero tenetur ex eius, nihil iste possimus exercitationem perspiciatis necessitatibus incidunt rerum culpa aliquam unde eos voluptatum.</p>
                        </div>

                        <div className="nosotros-numeros">
                            <p>40</p>
                            <p>04</p>
                            <p>+125k</p>
                        </div>
                        <div className="nosotros-numeros-texto">
                            <p>Recetas unicas</p>
                            <p>Sucursales</p>
                            <p>Seguidores</p>
                        </div>
                    </div>

                </div>





            </div>



            <div className="contenedor-imagen-nosotros">
                <picture>
                    <source srcset={nosotrosimgw} type='image/webp' />
                    <img src={nosotrosimg} loading='lazy' alt="Imagen nosotros" />
                </picture>

            </div>

        </section>

    )
}