import { Button } from "../StyledComponents/Button"
export default function Trabaja() {

    function handleEnviarMail(e) {
        e.preventDefault()
        window.location.href = "mailto:hupafabrica@gmail.com?subject=Trabaja para nosotros | Enviar CV"
    }
    return (
        <section className="trabaja">
            <p>- Envia tu CV -</p>
            <h2>¿Deseas trabajar para HUPA?</h2>
            <Button onClick={handleEnviarMail}>Enviar mail</Button>
        </section>
    )
}