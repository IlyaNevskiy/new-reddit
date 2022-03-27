import React, { ChangeEvent, FormEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from '../CommentForm';
import { RootState, updateComment } from '../store/reducer';

export function CommentFormContainer() {
  const value= useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
    dispatch(updateComment(event.target.value))
  }

  function handeSubmit(event: FormEvent){
   event.preventDefault();
  }

  return (
 <CommentForm
    value= {value} 
    onChange={handleChange}
    onSubmit = {handeSubmit}
 />
  );
}
