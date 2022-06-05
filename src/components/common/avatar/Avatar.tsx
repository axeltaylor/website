import Image from 'next/image'

import mePic from '../../../../public/images/me.png'

type AvatarProps = {
  height?: number
  width?: number
}

const Avatar = ({ height = 100, width = 100 }: AvatarProps) => {
  return (
    <div
      style={{ height, width }}
      className="overflow-hidden rounded-full border-4 border-not-blue border-opacity-50 shadow">
      <div className="bg-not-white">
        <Image
          src={mePic}
          alt="Axel Taylor's avatar"
          height={height}
          width={width}
        />
      </div>
    </div>
  )
}

export default Avatar
