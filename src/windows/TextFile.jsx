import React from 'react'
import WindowWrapper from '#hoc/WindowWraper'
import { WindowControls } from '#components'
import useWindowStore from '#store/window.js'

const TextFile = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile?.data

  // If no data, return null
  if (!data) return null

  const { name, subtitle, description } = data

  return (
    <>
      <div id='window-header'>
        <WindowControls target="txtfile" />
      </div>

      <div className='text-file-content p-6 bg-white h-full overflow-auto'>
        {/* Title */}
        {name && (
          <h1 className='text-2xl font-bold mb-4'>{name}</h1>
        )}

        {/* Optional Subtitle */}
        {subtitle && (
          <h2 className='text-lg font-semibold text-gray-700 mb-4'>{subtitle}</h2>
        )}

        {/* Description Paragraphs */}
        {description && Array.isArray(description) && (
          <div className='space-y-4'>
            {description.map((paragraph, index) => (
              <p key={index} className='text-gray-800 leading-relaxed'>
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

const TextFileWindow = WindowWrapper(TextFile, 'txtfile')
export default TextFileWindow