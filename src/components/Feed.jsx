import React from 'react'
import ReactLoading from 'react-loading'
import { FeedWrapper } from '../styles/FeedStyles'
import Post from './Post'


export default function Feed() {
  return (
    <FeedWrapper className='pd-t-3'>
        {/* <ReactLoading type='bubbles' color='black' height={1000} width={1000} className="loading__feed"/> */}
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

    </FeedWrapper>
  )
}
