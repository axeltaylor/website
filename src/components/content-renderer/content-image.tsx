import NextImage from 'next/image'
import { useEffect, useState } from 'react'

import { ImageContentBlock } from '../../models/content-block'

type ContentImageProps = {
  block: ImageContentBlock
}

const ContentImage = ({ block }: ContentImageProps) => {
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null
  )
  // Workaround to get the dynamic size of the remote image
  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setSize({ width: img.width, height: img.height })
    }
    img.src = block.url
  }, [setSize, block.url])
  return (
    size && (
      <div className="w-full flex justify-center items-center mb-4">
        <div className="max-w-lg">
          <NextImage
            src={block.url}
            alt={block.alt}
            layout="intrinsic"
            width={size.width}
            height={size.height}
          />
        </div>
      </div>
    )
  )
}

export default ContentImage
