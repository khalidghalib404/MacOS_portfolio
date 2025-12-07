import React from 'react'
import WindowWrapper from '#hoc/WindowWraper'
import { WindowControls } from '#components'
import useWindowStore from '#store/window.js'

const ImageFile = () => {
  const { windows } = useWindowStore()
  const data = windows.imgfile?.data

  // If no data, return null
  if (!data) return null

  const { name, imageUrl } = data

  return (
    <>
      <div id='window-header'>
        <WindowControls target="imgfile" />
        {name && <p className='flex-1 text-center'>{name}</p>}
      </div>

      <div className='preview'>
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={name || 'Image preview'} 
          />
        )}
      </div>
    </>
  )
}

const ImageFileWindow = WindowWrapper(ImageFile, 'imgfile')
export default ImageFileWindow