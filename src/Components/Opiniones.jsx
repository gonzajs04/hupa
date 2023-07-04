
import burgericon from '../images/icons/burgercard.svg'
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
                            <svg fill="#121212" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#121212"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M42.667,458.667V480c0,17.673,14.327,32,32,32h362.667c17.672,0,32-14.327,32-32v-21.333H42.667z"></path> </g> </g> <g> <g> <path d="M437.333,288H74.667c-17.673,0-32,14.328-32,32c0,17.673,14.327,32,32,32c39.998,0,56.002,10.667,96,10.667 c40,0,45.329-10.667,85.329-10.667c40.001,0,45.337,10.667,85.338,10.667c40.001,0,55.999-10.667,96-10.667 c17.672,0,32-14.327,32-32C469.333,302.328,455.006,288,437.333,288z"></path> </g> </g> <g> <g> <path d="M464.585,377.892c-8.274,3.91-17.509,6.108-27.251,6.108c-16.98,0-28.58,2.209-42.013,4.768 c-14.514,2.765-30.966,5.899-53.987,5.899c-23.714,0-37.678-3.285-49.998-6.183c-10.645-2.505-19.053-4.483-35.34-4.483 c-16.286,0-24.691,1.978-35.334,4.482c-12.319,2.899-26.281,6.185-49.995,6.185c-23.02,0-39.472-3.134-53.987-5.899 C103.247,386.209,91.646,384,74.667,384c-9.742,0-18.977-2.197-27.251-6.108c-3.009,4.878-4.749,10.622-4.749,16.774 c0,17.673,14.327,32,32,32h362.667c17.672,0,32-14.327,32-32C469.333,388.514,467.594,382.77,464.585,377.892z"></path> </g> </g> <g> <g> <polygon points="240,0 240,74.667 272,74.667 272,53.333 320,53.333 320,0 "></polygon> </g> </g> <g> <g> <path d="M256,106.667c-106.038,0-213.333,66.859-213.333,149.333h426.667C469.333,173.525,362.038,106.667,256,106.667z M182.627,207.842L160,185.215l22.627-22.627l22.627,22.627L182.627,207.842z M257.294,183.921l-22.627-22.627l22.627-22.627 l22.627,22.627L257.294,183.921z M329.373,207.842l-22.627-22.627l22.627-22.627L352,185.215L329.373,207.842z"></path> </g> </g> </g></svg>
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