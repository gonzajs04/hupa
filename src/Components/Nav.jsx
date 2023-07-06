import{Link} from 'react-scroll'
export default function Nav({isOpenList}) {


    return (

        <div className="containerg-nav">

            <div className={`container-nav ${isOpenList ? 'visible' : ''}`}>
               
                <div className="nav">
                   <Link activeClass="active" to="header" spy={true} smooth={true} offset={0} duration={100}>Inicio</Link>
                    <Link activeClass="active" to="menu" spy={true} smooth={true} offset={50} duration={500}>Menu</Link>
                    <Link activeClass="active" to="sucursales" spy={true} smooth={true} offset={50} duration={500}>Sucursales</Link>
                    <Link activeClass="active" to="nosotros" spy={true} smooth={true} offset={50} duration={500}>Nosotros</Link>
                    <Link activeClass="active" to="opiniones" spy={true} smooth={true} offset={50} duration={500}>Opiniones</Link>
                    <Link activeClass="active" to="socials" spy={true} smooth={true} offset={50} duration={500}>Redes Sociales</Link>
                    <Link activeClass="active" to="trabaja" spy={true} smooth={true} offset={50} duration={500}>Empleo</Link>


                </div>
            </div>
        </div>

    )
}