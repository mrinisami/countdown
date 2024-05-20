import { createAction, props } from "@ngrx/store";

export const addGameNumbers = createAction('[Add game numbers]', props<{ numbers: number[], gameNumber: number }>())