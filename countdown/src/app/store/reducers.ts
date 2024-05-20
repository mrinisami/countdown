import { createReducer, on } from "@ngrx/store";
import { MathStore } from "./models";
import { addGameNumbers } from "./actions";

export const initialState: MathStore = {
    chosenNbs: [],
    targetNb: 0
}

export const mathReducers = createReducer(
    initialState,
    on(addGameNumbers, (state, action) => {
        console.log(state, action)
        return ({ ...state, chosenNbs: action.numbers, targetNb: action.gameNumber })
    })
)