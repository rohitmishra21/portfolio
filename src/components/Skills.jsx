import React from 'react'
import Card from './Card'
import Border from './Border'

const Skills = () => {
  return (

    <>
      <Border />
      <div className='w-full xl:my-12 h-96'>

        <h1 className="xl:text-7xl text-5xl text-center uppercase py-7 text-[#953269]   font-bold">
          Skills
        </h1>
        <Card />
      </div>
    </>
  )
}

export default Skills