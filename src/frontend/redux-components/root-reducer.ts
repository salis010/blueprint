import { ADD_GAME } from "./action-types"

const initialState = {
    games: [ 
      { id: 1, title: "Gonzo's Quest" },
      { id: 2, title: "Divine Fortune" }
    ]
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_GAME:
        return { ...state, articles: [...state.games, action.payload] }
      default:
        return state
    }
  }
