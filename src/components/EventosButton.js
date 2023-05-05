import EventButton from "./Eventos/EventButton"

function disparoUm(){
    console.log('O evento um foi disparado!')
    document.querySelector('body').style.background = '#1f9b4a'
}
function disparoDois(){
    console.log('O evento dois foi disparado!')
    document.querySelector('body').style.background = '#ff7ddd'
}
function disparoTres(){
    console.log('O evento três foi disparado!')
    document.querySelector('body').style.background = '#57bf64'
}
function EventosButton(){
    return(
        <div>
            <h3>Buttons disparadores de eventos:</h3>
            <EventButton event={disparoUm} text='Disparo 01'/>
            <EventButton event={disparoDois} text='Disparo 02'/>
            <EventButton event={disparoTres} text='Disparo 03'/>
        </div>  
    )
}

export default EventosButton