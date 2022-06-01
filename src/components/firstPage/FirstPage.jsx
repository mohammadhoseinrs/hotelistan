import React, { useRef, useState } from 'react'
import './FirstPage.css'

import audio1 from './../../audio/1.mp3'
import audio2 from './../../audio/2.mp3'

import image1 from './../../images/1.png'
import image2 from './../../images/2.png'
import image3 from './../../images/3.png'
import image4 from './../../images/4.png'
import image5 from './../../images/5.png'
import { Link } from 'react-router-dom'


const button=[
    {id:1,name:'1.içerik' , audio:new Audio(audio1) , img:image1 , visited:false},
    {id:2,name:'2.içerik' , audio:new Audio(audio2) , img:image2 , visited:false},
    {id:3,name:'3.içerik' , audio:new Audio(audio1) , img:image3 , visited:false},
    {id:4,name:'4.içerik' , audio:new Audio(audio2) , img:image4 , visited:false},
    {id:5,name:'5.içerik' , audio:new Audio(audio1) , img:image5 , visited:false},
]
export default function FirstPage() {
    const allvisited=button[0].visited
    && button[1].visited
    && button[2].visited
    && button[3].visited
    && button[4].visited
    console.log(allvisited);
    const [image,setImage]=useState(button[0].img)
   const [currentId,setCurrentId]=useState(null)
   const [showBtn,setShowBtn]=useState(true)
    const audioRef=useRef()

    const start=(id)=>{
        if(audioRef.current && id === currentId){
            audioRef.current.pause();
            return
        }
        if(audioRef.current && !audioRef.current.paused){
             audioRef.current.pause()
        }
        let newbtn=button.find(btn=>btn.id===id)
        setImage(newbtn.img)
        audioRef.current=newbtn.audio
        newbtn.audio.play()
        setCurrentId(id)
        button.forEach(btn=>{
            if(btn.id===id){
                return btn.visited=!btn.visited
            }
        })
        console.log(button);
    }
    const linkhandler=()=>{
        audioRef.current.pause();
    }
  return (
    <section className='firspage'>
        <div className="firspage__conatiner">
        <div className="firstpage__button">
        {button.map(btn=>(
          <button className={btn.visited ? 'audio__btn__visited' : 'audio__btn'}
           key={btn.id}
          onClick={()=>start(btn.id)}
          >{btn.name}</button>
        ))}
        </div>
        <div className="firstpage__image">
            <img src={image} alt='car' />

            {allvisited &&
              <Link to='/secondpage'
              onClick={linkhandler}
             className='page__btn'>ileri</Link>}
        </div>
        </div>
    </section>
  )
}
