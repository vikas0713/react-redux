import ACTION_TYPE from '../constants/Constants';


export const login = (username, password) => {
    console.log("LOGIN ACTION");
    if (username === 'vikas0713' && password === "root") {
        return {
            type: ACTION_TYPE.LOGIN,
            payload: {
                "msg": username + " logged in successfully",
                "status": true
            }
        }
    }else{
        return {
            type: ACTION_TYPE.LOGIN,
            payload: {
                "msg": "Authentication Error!",
                "status": false
            }
        }
    }
};


