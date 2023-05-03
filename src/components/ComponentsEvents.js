function ComponentsEvents() {

    function mudaCor(event) {
        if(event.target.value === "cor 01"){
            document.querySelector('body').style.background = '#b0c4e3'
        } if(event.target.value === "cor 02") {
            document.querySelector('body').style.background = '#77cce5'
        } if(event.target.value === "cor 03") {
            document.querySelector('body').style.background = '#ffba65'
        } if (event.target.value ==='padrão'){
            document.querySelector('body').style.background = 'whitesmoke'
        }
    }
    return(
        <div>
            <input onClick={mudaCor} type='submit'className='btn' value='cor 01'></input>
            <input onClick={mudaCor} type='submit'className='btn' value='cor 02'></input>
            <input onClick={mudaCor} type='submit'className='btn' value='cor 03'></input>
            <input onClick={mudaCor} type='submit'className='btn' value='padrão'></input>
        </div>
    )
}

export default ComponentsEvents