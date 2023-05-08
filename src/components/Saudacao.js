function Saudacao({nome}) {
   
   function gerarSaudacao(){
      return `Olá ${nome}, seja bem-vindo!`
   }
   
   return(
      <div>
         {nome && <p>{gerarSaudacao(nome)}</p>}
      </div>
   )
}
export default Saudacao