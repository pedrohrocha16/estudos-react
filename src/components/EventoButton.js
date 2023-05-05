import Button from "./Eventos/Button"

function EventoButton() {

    function dispararEvento(){
        console.log('Evento 01 disparado!')
    }
    function dispararEventoDois(){
        console.log('Evento 02 disparado!')
    }
    return(
        <div>
            <h3>Vamos disparar eventos ?</h3>
            <Button event={dispararEvento} text='Primeiro Evento'/>
            <Button event={dispararEventoDois} text='Segundo Evento'/>
        </div>
    )
}

export default EventoButton