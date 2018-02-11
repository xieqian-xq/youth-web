export const Type_Base = "Type_Base";
export const Type_Message = "Type_Message";
export const Type_Send = "Type_Send";

// initial state
const initialState = {
    name: "qian_xie",
    age: 23,
    base: { school: "GDCP" },
    message: { msg: "My God" },
    send: { websocket: "send msg to server" }
}

// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case Type_Base:
            let obj = Object.assign({}, state, action.data);
            return obj;
            break;
        case Type_Message:
            return Object.assign({}, state, action.data);
            break;
        case Type_Send:
            return Object.assign({}, state, action.data);
            break;
        default:
            return state;
    }
}

// action creator
export const ActionCreator = {
    UpdateBase: (data) => {
        return {
            type: Type_Base,
            data: {base:data}
        }
    },
    UpdateMessage: (data) => {
        return {
            type: Type_Message,
            data: {message:data}
        }
    },
    UpdateSend: (data) => {
        return {
            type: Type_Send,
            data: {send:data}
        }
    }
}