import React from 'react';
import './PageNotFound.css';
import Header from '../header/Header';

function PageNotFound() {
  return (
    <>
    <Header/>
    <div className='image'>
        <img src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk=" alt="Image Not found" />
    </div>
    </>
  )
}

export default PageNotFound