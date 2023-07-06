
import burgericon from '../images/icons/burgericon.png'
import burgericonw from '../images/compressed/burgericonw.webp'
export default function Opiniones({ dataPersonas }) {
    return (
        <section className="opiniones">

            <div className="opiniones-title">
                <span>Experiencia</span>
                <h2>Opiniones</h2>
            </div>
            <div className="separator"></div>

            <div className="container-opiniones">


                {Object.keys(dataPersonas).length > 0 && dataPersonas.map(persona => (

                    <div className="opinion" key={persona.id}> {/*HACER OBJETO DE PERSONAS PARA MOSTRAR MULTIPLES OPINIONES Y COLOCAR SVG DE ESTRELLAS*/}
                        <div className="container-card-burger">
                            <picture>
                                <source srcSet={burgericonw} type='image/webp' />
                                <img src={burgericon} alt="icono burger" />
                            </picture>
                        </div>
                        <div className="opinion-photo">
                            <picture>
                                <source srcSet={dataPersonas.imgPersonaw} type='image/webp' />
                                <img src={persona.imgPersona} alt="imagen persona" />
                            </picture>
                        </div>
                        <div className="opinion-text">
                            <div className="opinion-subject">
                                <p>{persona.categoria}</p>
                            </div>

                            <div className="opinion-subject-text">
                                <p>"{persona.descripcion}"</p>
                            </div>

                            <div className="opinion-stars">
                                <p>{persona.nombre}</p>
                            </div>

                        </div>
                    </div>
                ))}



            </div>

        </section>
    )
}