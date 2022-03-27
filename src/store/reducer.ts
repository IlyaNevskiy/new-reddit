import { ActionCreator, ActionFromReducer, Reducer } from 'redux';
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from './me/actions';
import { meReducer, MeState } from './me/reducer';

export type RootState = {
    commentText:string;
    token: string;
    me: MeState;
    choice: object;
}
const initialState: RootState={
    commentText: '',
    token: '',
    me:{
        loading:false,
        error: '',
        data:{},
    },
    choice:{
        id:'best',
        bool:false,
    },
    
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction ={
    type: typeof UPDATE_COMMENT;
    text:string;
}
export const updateComment: ActionCreator<UpdateCommentAction> =(text) => ({ 
    type: 'UPDATE_COMMENT',
    text, 
});

const UPDATE_SORTCHOICE = 'UPDATE_SORTCHOICE';
type UpdateSortChoice={
type: typeof UPDATE_SORTCHOICE;
choice: object;
}
export const updateSortChoice: ActionCreator<UpdateSortChoice> =(choice) =>({
    type:'UPDATE_SORTCHOICE',
    choice,
})

const UPDATE_TOKEN = 'UPDATE_TOKEN';
type UpdateTokenAction ={
    type: typeof UPDATE_TOKEN;
    token:string;
}
export const updateToken: ActionCreator<UpdateTokenAction> =(token) => ({ 
    type: 'UPDATE_TOKEN',
    token, 
});


type Action = UpdateCommentAction
 | UpdateTokenAction
 | MeRequestAction
 | MeRequestSuccessAction
 | MeRequestErrorAction
 | UpdateSortChoice
export const rootReducer: Reducer<RootState, Action> = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_COMMENT:
        return {
            ...state,
            commentText: action.text,
        };
        case UPDATE_TOKEN:
        return {
            ...state,
           token: action.token,
        };
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            };
        case UPDATE_SORTCHOICE:
            return{
                ...state,
                choice: action.choice,
            }
        default:
            return state;
    }
}