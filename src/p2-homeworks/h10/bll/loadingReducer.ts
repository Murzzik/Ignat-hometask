type LoadingAT = {
    type: "LOADING-STATUS"
    isLoading: boolean
}

export type InitST = {
    isLoading: boolean
}

export type AppStoreType = {
    loading: InitST
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingAT): InitST => { // fix any
    switch (action.type) {
        case 'LOADING-STATUS': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingAT => {
    return {type: "LOADING-STATUS", isLoading}
} // fix any