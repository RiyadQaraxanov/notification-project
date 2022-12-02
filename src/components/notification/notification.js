import React from 'react'
import "./notification.css"
import data from '../../data/data'
import {useState} from "react"
import { ReactDOM } from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

export default function Notification() {

  const [read,setRead] = useState(data)

  const changeRead = (i) =>{
    setRead(read[i].readed=true) 
    console.log("asd")
  }

  return (
    <div className='container'>
        {
            data.forEach((i)=>{
            })
        }
      <div className='header'>
        <div className='notification-div'>
            <div className='notification-text'>Notifications</div>
            <div className='notification-number'>3</div>
        </div>
        <div onClick={data.forEach((i)=>{
          })} className='mark-as-read'>
            Mark as read
        </div>
      </div>
      <div className='body'>
        {
            data.map((boxes,i)=>{
              if(boxes.readed===false)
                return(
                    <div onClick={()=>changeRead(i)} className='boxes readed'>
                        <div><img className='avatar' src={boxes.avatar} /></div>
                        <div className='boxes-texts'>
                            <div className='name-message'>
                                <div className='name'>{boxes.fullname}</div>
                                <div className='message'>{boxes.notification}</div>
                                <div className='circle'></div>
                            </div>
                            <div className='time'>{dayjs(boxes.time).fromNow()}</div>
                        </div>
                    </div>
                );
              
            })
          }
          {
            data.map((boxes) =>{
              if(boxes.readed===true)
                  return(
                    <div className='boxes'>
                        <div><img className='avatar' src={boxes.avatar} /></div>
                        <div className='boxes-texts'>
                            <div className='name-message'>
                                <div className='name name-readed'>{boxes.fullname}</div>
                                <div className='message message-readed'>{boxes.notification}</div>
                            </div>
                            <div className='time time-readed'>{dayjs(boxes.time).fromNow()}</div>
                        </div>
                    </div>
                  );
            })
          }
      </div>
    </div>
  )
}
