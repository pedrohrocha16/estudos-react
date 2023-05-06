function RenderizandoLista({itens}) {
   return (
      <div>
         <h3>Lista de coisas boas:</h3>
        {itens.length > 0 ? (
        itens.map ((item) => (
         <p>{item}</p>
         ))) : (
            <p>Essa lista não possui itens!</p>
         )
      }
      </div>
   )
}

export default RenderizandoLista