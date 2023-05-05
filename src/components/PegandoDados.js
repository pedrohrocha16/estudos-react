import { useState } from "react"

function PegandoDados(){

    function enviarDados(e){
        e.preventDefault()
       console.log(`O usuário ${nome}, ${dataNas}, ${email}, Tel: ${tel}, foi cadastrado com sucesso!`)
    }
const [nome, setNome] = useState()
const [dataNas, setDataNas ] = useState()
const [email, setEmail] = useState()
const [tel, setTel] = useState()

    return (
        <div>
            <h3>Preencha o formulário abaixo e veja o resultado no console:</h3>
            <form onSubmit={enviarDados}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" placeholder="seu nome" id='nome'onChange={(e) => setNome(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="data">Data nascimento: </label>
                    <input type="date" id='data' onChange={(e) => setDataNas(e.target.value)}></input>
                </div>  <div>
                    <label htmlFor="email">E-mail: </label>
                    <input type="text" placeholder="user@user" id='email' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="telefone">Telefone: </label>
                    <input type="tel" placeholder="telefone" id='telefone' onChange={(e) => setTel(e.target.value)} ></input>
                </div>
                    <button type="submit">Enviar Dados</button>
            </form>
        </div>
    )
}

export default PegandoDados