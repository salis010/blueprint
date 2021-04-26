import * as React from 'react'

export const Games = ({ games }) =>
    <>
        <h1>Games</h1>
        <ul>
            {games.map(game => <li key={game.id}>{game.title}</li>)}
        </ul>
    </>

