import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Post } from '../Post';
import { RootState, updateSortChoice } from '../store/reducer';
import { Card } from './Card';
import styles from './cardslist.css';

let counter=0;

export function CardsList() {
  const dispatch = useDispatch();

const token = useSelector<RootState>(state => state.token);
const choice = useSelector<RootState>(state => state.choice);
const [posts, setPosts]=useState<any[]>([]);
const [loading,setLoading]=useState(false);
const [errorLoading,setErrorLoading] = useState('');
const [nextAfter, setNextAfter]= useState('');


const bottomOfList= useRef<HTMLDivElement>(null);


async function load(){ 
    setLoading(true);
    setErrorLoading('');

    try{
      const { data:{ data : { after, children} } } = await  axios.get(`https://oauth.reddit.com/${Object(choice).id}/`, {
        headers: {Authorization: `bearer ${token}`},
        params:{
          limit: 5,
          after: nextAfter,
        }
      });

      setNextAfter(after);
      setPosts(prevClidren => prevClidren.concat(...children));
    } catch(error){
      setErrorLoading(String(error));
    }
    setLoading(false);
  }

useEffect(()=>{
  if(Object(choice).bool===true){
    setPosts([]);
    setNextAfter('');
    counter=0;
    dispatch(updateSortChoice({id:Object(choice).id, bool:false}));
  }
const observer = new IntersectionObserver((entries)=>{
if(counter===1 && nextAfter===''){return}
else if(entries[0].isIntersecting && counter<2 && token)  {
  load();
  counter+=1;
};
},{
  rootMargin: '100px'
});

if(bottomOfList.current) observer.observe(bottomOfList.current);

return () =>{
  if(bottomOfList.current) observer.unobserve(bottomOfList.current);
}
},[bottomOfList.current, nextAfter, Object(choice).id]);
  

return ( 
    
    <ul className={styles.cardsList}>
      {posts.length===0 && !loading && !errorLoading && (
        <div style={{ textAlign: 'center' }}>Нет ни одного поста</div>
      )}

      {posts.map(post=>(
        <Card 
        key={post.data.id}
        postId={post.data.id}
        title={post.data.title}
        score={post.data.score}
        author={post.data.author}
        created_utc={post.data.created_utc}
        src={[post.data.url, post.data.thumbnail]}
        />
      ))}

      <div ref={bottomOfList} />

      {counter===2 && (
        <div className={styles.btnWrapper}>
        <button onClick={()=>{
          counter=1;
          load();
          }}
          className={styles.loadbtn}
          >
            <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" fill='#ffffff'>
<g id="surface1">
<path d="M 18.351562 35.140625 C 19.128906 35.140625 19.761719 35.769531 19.761719 36.542969 C 19.761719 37.320312 19.132812 37.953125 18.351562 37.953125 C 8.441406 37.953125 0.398438 29.914062 0.398438 20 C 0.398438 10.085938 8.441406 2.046875 18.351562 2.046875 C 28.269531 2.046875 36.304688 10.085938 36.304688 20 C 36.304688 20.777344 35.675781 21.40625 34.898438 21.40625 C 34.125 21.40625 33.492188 20.78125 33.492188 20 C 33.492188 11.652344 26.699219 4.859375 18.351562 4.859375 C 10.003906 4.859375 3.210938 11.652344 3.210938 20 C 3.210938 28.347656 10.003906 35.140625 18.351562 35.140625 M 34.566406 26.867188 L 29.535156 20.308594 L 39.601562 20.308594 L 34.566406 26.867188 "/>
</g>
            </svg>

            <span className={styles.loadbtnTitle}>Показать еще</span>
        </button>
        </div>
      )}
      
      {loading && (
        <div style={{ textAlign: 'center' }}>Загрузка</div>
        )}

      {errorLoading && (
        <div style={{ textAlign: 'center' }} role="alert">
          {errorLoading}
        </div>
      )}
            <Routes><Route path=":id" element={<Post />} ></Route></Routes>
    </ul>
  );
}
