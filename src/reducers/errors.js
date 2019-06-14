const errorsDefaultState = [];

export default (state = errorsDefaultState, action) => {
    switch (action.type){
        case 'SET':
            return  action.errors
        default:
            return state
    }
};

