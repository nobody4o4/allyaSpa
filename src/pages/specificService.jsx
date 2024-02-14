import React from 'react'
import TopDetails from '../components/specificServices/topDetails'
import MainTopics from '../components/mainHeaders/mainTopics'
import Description from '../components/specificServices/description'

export default function SpecificService() {
  return (
    <div className='mx-20 flex flex-col gap-10 mt-14 mb-14'>
      <TopDetails />
      <MainTopics Headers={"Description"}/>
      <Description />
    </div>
  )
}
