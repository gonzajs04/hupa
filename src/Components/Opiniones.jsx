
import burgericon from '../images/icons/burgericon.png'
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

                    <div className="opinion"> {/*HACER OBJETO DE PERSONAS PARA MOSTRAR MULTIPLES OPINIONES Y COLOCAR SVG DE ESTRELLAS*/}
                        <div className="container-card-burger">
                            <picture>
                                <img src={burgericon} alt="" />
                            </picture>
                        </div>
                        <div className="opinion-photo">
                            <picture>
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