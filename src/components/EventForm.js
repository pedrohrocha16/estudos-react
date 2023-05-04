import Styles from './EventForm.module.css'
import { useState } from 'react'

function EventForm() {

    function cadastrarCliente(event){
        event.preventDefault()
       console.log(`O usuário ${user}, nascido em ${nasc}, com o número de telefone ${tel} e com o e-mail ${email}, foi cadastrado com sucesso!`)
    }

const [user, setUser] = useState()
const [nasc, setNasc] = useState()
const [tel, setTel] = useState()
const [email, setEmail] = useState()

    return (
        <div>
            <h3>Preencha os dados abaixo para cadastrar:</h3>
            <form onSubmit={cadastrarCliente}>
                <div>
                    <label className= {Styles.label} htmlFor='user'>Nome: </label>
                    <input className={Styles.campoDados} type='text' id='user' onChange={(e) => setUser(e.target.value)}></input>
                </div>
                <div>
                    <label className= {Styles.label} htmlFor='nasc'>Data nascimento: </label>
                    <input className={Styles.campoDados} type='date' id='nasc' onChange={(e) => setNasc(e.target.value)}></input>
                </div>
                <div>
                    <label className= {Styles.label} htmlFor='tel'>Tel/WhatsApp: </label>
                    <input className={Styles.campoDados} type='tel' id='tel' onChange={(e) => setTel(e.target.value)}></input>
                </div>
                <div>
                    <label className= {Styles.label} htmlFor='email'>E-mail: </label>
                    <input className={Styles.campoDados} type='email' id='email' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <input className={Styles.submit} type='submit' value='Cadastrar'></input>
                </div>
            </form>
        </div>
    )
}

export default EventForm