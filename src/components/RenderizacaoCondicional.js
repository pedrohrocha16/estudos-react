import { useState } from "react"

function RenderizacaoCondicional(){

    const [senha, setSenha] = useState()
    const [senhaVal, setSenhaVal] = useState()

    function revelarSenha(e) {
        e.preventDefault()
        setSenhaVal(senha)
    }
    
    function limparCampo(){
        setSenhaVal('')
    }

    return(
        <div>
            <h3>Revelar senha digitada:</h3>
            <form onSubmit={revelarSenha}>
                <input type="password" placeholder="senha" onChange={(e) => setSenha(e.target.value)} ></input>
                <button>Revelar</button>
                {senhaVal && (
                    <div>
                        <p>A senha digitada foi: {senhaVal}</p>
                        <button onClick={limparCampo}>Limpar campo</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default RenderizacaoCondicional