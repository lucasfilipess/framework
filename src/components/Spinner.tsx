import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <BeatLoader color="#4338CA" loading={true} size={25} />
    </div>
  )
}

export default Spinner
