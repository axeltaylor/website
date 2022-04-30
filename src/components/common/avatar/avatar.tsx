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
      className="overflow-hidden rounded-full bg-notwhite border-4 border-black shadow">
      <Image
        src={mePic}
        alt="Axel Taylor's avatar"
        height={height}
        width={width}
      />
    </div>
  )
}

export default Avatar
