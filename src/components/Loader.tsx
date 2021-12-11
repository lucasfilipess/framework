import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <BeatLoader color="#06B6D4" loading={true} size={25} />
    </div>
  )
}

export default Loader
