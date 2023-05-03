import ListItem from "./ListItem"
function ComponentList() {
    return (
        <>
            <h3>Meus filmes favoritos:</h3>
            <ul>
                <ListItem titulo_filme="Velozes e Furiosos" ano_lancamento={2004} />
                <ListItem titulo_filme="Harry Potter" ano_lancamento={2001} />
                <ListItem titulo_filme="As Branquelas" ano_lancamento={2004} />
            </ul>        
        </>
    )
}

export default ComponentList