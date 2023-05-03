import PropTypes from 'prop-types'

function ListItem({titulo_filme, ano_lancamento}) {
    return(
        <>
           <li>{titulo_filme} - {ano_lancamento}</li>
        </>
    )
}

ListItem.propTypes = {
    titulo_filme: PropTypes.string,
    ano_lancamento: PropTypes.number,
}
ListItem.defaultProps = {
    titulo_filme: 'Sem título',
    ano_lancamento: 0,
}

export default ListItem