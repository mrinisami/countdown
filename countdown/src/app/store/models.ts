export interface MathStore {
    chosenNbs: number[],
    targetNb: number
}

export interface AppStore {
    math: MathStore
}