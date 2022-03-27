import { useNavigate } from "react-router-dom";

export function useToken(str:string){
    if(str.includes('auth')){
       return (
           str.substring(str.indexOf('access_token')+13, str.indexOf('token_type')-1)
           )
    }

    return '';	
}