import horario1 from '../images/horario1.jpeg'
import horario2 from '../images/horario2.jpeg'
import horario3 from '../images/horario3.jpeg'
import horario4 from '../images/horario4.jpeg'
import horario5 from '../images/horario5.jpeg'
import horario6 from '../images/horario6.jpeg'
import horario7 from '../images/horario7.jpeg'
import horario1w from '../images/compressed/horario1w.webp'
import horario2w from '../images/compressed/horario2w.webp'
import horario3w from '../images/compressed/horario3w.webp'
import horario4w from '../images/compressed/horario4w.webp'
import horario5w from '../images/compressed/horario5w.webp'
import horario6w from '../images/compressed/horario6w.webp'
import horario7w from '../images/compressed/horario7w.webp'

const horarios = [{img: horario1,imgC:horario1w},{img: horario2,imgC:horario2w},{img: horario3,imgC:horario3w},{img: horario4,imgC:horario4w},{img: horario5,imgC:horario5w},{img: horario6,imgC:horario6w},{img: horario7,imgC:horario7w}]
export default function Sucursales() {
    return (
        <section className="sucursales">
            <h2>Donde nos encontramos</h2>
            <div className="separator"></div>
            <div className="sucursales-text">
                <p>Estamos en Argentina en la Ciudad de Buenos Aires y Gran Buenos Aires, para que disfrutes de las mejores hamburguesas y mas sabrosas de todo el pais
                    Si queres hacer un <strong>PEDIDO</strong>, consulta los numeros que aparecen, dependiendo de tu zona!.

                </p>
            </div>



            <div className="container-sucursales-horarios">
                {horarios.length > 0 && horarios.map((horario,index) => (
                    <div className="container-horario-img" key={index}>
                        
                        <picture>

                            {/* <source srcSet=".webp" type="image/webp" /> */}
                            <source srcSet={horario.imgC} type='image/webp' />
                            <img loading="lazy" src={horario.img} alt="horarioimg" />

                        </picture>
                    </div>


                ))}




            </div>

        </section>
    )
}