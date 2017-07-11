import Actions from '../constants/Constants';

const login = (state=[], action)=> {
    // let message = null;
    switch(action.type){
        case Actions.LOGIN:
            console.log(action.payload.msg);
            break;
        default:
            console.log("Welcome to my first redux web App");
    }
};


export default login;