import { LinkButton } from "../StyledComponents/LinkButton"
export default function Trabaja(){

    function handleEnviarMail(e){
        e.preventDefault()
        window.location.href = "mailto:hupafabrica@gmail.com?subject=Trabaja para nosotros | Enviar CV"
    }
    return(
        <section className="trabaja">
                <p>- Envia tu CV -</p>
        <h2>¿Deseas trabajar para HUPA?</h2>
    
        <LinkButton style={{
            // color: "black",
            // padding: ".7rem 1rem",
            // border: "2px solid black"
            
        }} onClick={handleEnviarMail}>Enviar mail</LinkButton>




    </section>
    )
}