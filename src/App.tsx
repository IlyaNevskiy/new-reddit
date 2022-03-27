import React, { useEffect } from 'react';
import './main.global.css'
import { Layout } from './Layout';
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { Provider } from 'react-redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer, updateToken } from './store/reducer';
import thunk from 'redux-thunk';
import { useToken } from './hook/useToken';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
 
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
)); 

const NotFoundPage = () => {
    return (
      <div>
        <h1 style={{ color: "red", fontSize: 100 }}>404</h1>
        <h3>Page Not Found</h3>
        <p>
          <Link to="/posts">Go Home</Link>
        </p>
      </div>
    );
  };

 function AppComponent(){
    if(((document.location.href).indexOf('auth'))>0) localStorage.setItem('href',document.location.href);

    useEffect(()=>{
        let token;
        if(localStorage.getItem('token')) token=localStorage.getItem('token');
        else if(localStorage.getItem('href')){
           token = useToken(String(localStorage.getItem('href')));
        }  
        
        localStorage.removeItem('href');

        store.dispatch(updateToken(token));
        if(token){
            localStorage.setItem('token',token);
        }
    },[])
 
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Header/>
                    <Content>
                        <Routes>
                            <Route path='posts/*' element={<CardsList />} /> 
                            <Route path="auth" element={<Navigate to="/posts" />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Content>
                </Layout>
            </BrowserRouter>
        </Provider>
    );

}

export const App = AppComponent;