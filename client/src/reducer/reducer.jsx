export const initialState = {
    user: null,
}
const reducer = (state, action) => {

    switch(action.type){
        case 'SET_USER':
            return {
                ...state, 
                user : action.user
            };

        default: 
            throw Error("No case for that type found")
    }
}
export default reducer