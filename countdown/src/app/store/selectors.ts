import { createSelector } from "@ngrx/store";
import { AppStore, MathStore } from "./models";

const selectMathState = (state: AppStore) => state.math;

export const selectGameInfo = createSelector(
    selectMathState,
    (state: MathStore) => state
)