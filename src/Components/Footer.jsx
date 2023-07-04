import Logo_hupa from '../images/Logo_hupa.png'
export default function Footer(){ {/*FALTA REDES SOCIALES */}
    return(
        <footer className="footer">
            <div className="img-footer">
                <picture>
                    <img src={Logo_hupa} alt="Logo hupa" />
                </picture>
            </div>
            <div className="text-footer">
                <p>La más salvaje de todas</p>
                <p className='p-cv'>Empleo: hupafabrica@gmail.com </p>
                <p>Hupa Hamburgueserias &copy; Todos los derechos reservados</p>
            </div>
        </footer>
    )
}