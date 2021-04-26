import * as React from 'react'

export const Games = ({ games }) =>
    <ul>
        {games.map(game => <li key={game.id}>{game.title}</li>)}
    </ul>
    
