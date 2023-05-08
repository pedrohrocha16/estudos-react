function StateLift({setNome}) {
   return (
      <div>
         <p>Digite seu nome:</p>
         <input type='text' placeholder="nome" onChange={(e) => setNome(e.target.value)}/>
      </div>
   )
}

export default StateLift