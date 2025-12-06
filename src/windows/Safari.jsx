import { WindowControls } from '#components'
import React from 'react'
import WindowWrapper from '#hoc/WindowWraper'
import { blogPosts } from '../Constans'
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react'

function Safari() {
  return (
    <>
    <div id="window-header">
    <WindowControls target="safari"/>
    <PanelLeft className=' ml-10  icon'/>
    <div className='flex items-center gap-1 ml-5'>
        <ChevronLeft className='icon'/>
        <ChevronRight className='icon' />
    </div>

   <div className=" flex-1 flex-center gap-3 ">
    <ShieldHalf className='icon'/>
    <div className='search'>
        <Search className='icon' />
        <input type="text" placeholder='search or enter website name' className='flex-1' />

    </div>
   </div>

<div className='flex items-center gap-5'>
    <Share className='icon'/>
    <Plus className='icon'/>
    <Copy className='icon'/>

</div>
    </div>

    <div className='blog'>
        <h2>My Blogs</h2>
        <div className=' space-y-8'>
            {blogPosts.map(({id,image,title,data,link})=>(

                 <div key={id } className='blog-post'>
                <div className='col-span-2'>
                    <img src={image} alt={title}/>
                    </div>

                    <div className='content'>
                        <h3>{title}</h3>
                        <p>{data}</p>
                        <a href={link} target='_blank' rel="noopener noreferrer">
                            Check out the full post  <MoveRight/>
                        </a>
                    </div>
                 </div>
            ))}
    </div> 

    </div>
    </>
  )
}
const SafariWindow = WindowWrapper(Safari,'safari')
export default SafariWindow