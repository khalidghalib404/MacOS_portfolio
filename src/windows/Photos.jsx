import React from 'react'
import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWraper'
import { photosLinks, gallery } from '#constants'
import useWindowStore from '#store/window.js'

const Photos = () => {
  const { openWindow } = useWindowStore()

  const handleImageClick = (image) => {
    openWindow('imgfile', {
      name: `Gallery Image ${image.id}`,
      imageUrl: image.img
    })
  }

  return (
    <>
      <div id='window-header'>
        <WindowControls target="photos" />
      </div>

      <div className='bg-white flex h-full'>
        {/* Sidebar */}
        <div className='sidebar'>
          <h2>Albums</h2>
          <ul>
            {photosLinks.map((link) => (
              <li key={link.id}>
                <img src={link.icon} alt={link.title} />
                <p>{link.title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Grid */}
        <div className='gallery'>
          <ul>
            {gallery.map((image) => (
              <li 
                key={image.id} 
                onClick={() => handleImageClick(image)}
                className='cursor-pointer hover:opacity-80 transition-opacity'
              >
                <img src={image.img} alt={`Gallery ${image.id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const PhotosWindow = WindowWrapper(Photos, 'photos')
export default PhotosWindow