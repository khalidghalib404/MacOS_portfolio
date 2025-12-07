import React from 'react'
import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWraper'
import { socials } from '#constants'

const Contact = () => {
  return <>
  <div id='window-header'>
    
    <WindowControls target="contact" />
    <h2>Contact Me</h2>
  </div>
  <div className='p-5 space-y-5'>
    <img src="/images/adrian-3.jpeg" alt="adrian"className='w-15 rounded-full' />
    <h3>Lets Connect</h3>
    <p>Got an idea? let's build it together</p>
    <ul>
        {socials.map(({id,bg,link,icon,text }) =>
        <li key={id} style={{backgroundColor:bg}} >
            <a href={link} target='_blank' rel='noopener noreferrer' title={text}>
                <img src={icon}  alt="text" className='size-5' />
                <p>{text}</p>
            </a>
        </li>
        
        )}
    </ul>

  </div>
  </>

}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow;