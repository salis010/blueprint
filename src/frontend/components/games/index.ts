import { connect } from 'react-redux'
import { addGame } from '../../redux-components/actions'
import { Games as Component } from './games'

const mapStateToProps = state => ({
    games: state.games
})

const mapDispatchToProps = dispatch => ({
    addGame: game => dispatch(addGame(game))
})

export const Games = connect(mapStateToProps, mapDispatchToProps)(Component)
