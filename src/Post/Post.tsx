import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import { Text } from '../Text'
import { CommentsBlock } from '../CommentsBlock';
import { CommentFormContainer } from '../CommentFormContainer/CommentFormContainer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { PostImage } from './PostImage';
import axios from 'axios';
import { EIcon, Icon } from '../Icons';
import { PostImageGallery } from './PostImageGallery';


export function Post( ) {
  const [url, setUrl]=useState('');
  const token = useSelector<RootState>(state=>state.token);
  const ref=useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [child, setChild]=useState({});
  

  useEffect(()=>{
      function handleClick(event: MouseEvent){
        if( event.target instanceof Node && !ref.current?.contains(event.target) ){
          navigate('/posts')
        }
      }

    async function load(id:string){ 
    try{
      const { data:{ data : { children } } } = await  axios.get(`https://oauth.reddit.com/by_id/${id}`, {
        headers: {Authorization: `bearer ${token}`},
      });
      setChild(children[0]);
    } catch(error){
      console.log(error);
    }
  }
    setUrl(document.location.href);
    if(url!=='') load('t3_'+url.substring(url.indexOf('posts')+6))

    document.addEventListener('click', handleClick);
    

    return ()=>{
      document.removeEventListener('click', handleClick);
    }
  },[url])


  const node =document.querySelector('#modal-root');
  if(!node) return null;


  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      
      <button className={styles.closeBtn} onClick={()=>{navigate('/posts')}}> 
      <Icon name={EIcon.close} size={20} desktopTabletSize={30} />
            </button> 
      <Text As='h2' size={20}>{Object(Object(child).data).title}</Text>
       
      <div className={styles.content}>
        {Object(Object(child).data).media_metadata && (
          <PostImageGallery mediaMetaData={Object(Object(child).data).media_metadata} galleryData={Object(Object(Object(child).data).gallery_data).items} />
        )}
         
        <PostImage url={Object(Object(child).data).url} />
        {Object(Object(child).data).selftext!='' && (
          <p>{Object(Object(child).data).selftext}</p>
        )}
        
      </div>

      {/* <CommentFormContainer /> 

      <CommentsBlock /> */}
    </div>
  ), node);
  
}
