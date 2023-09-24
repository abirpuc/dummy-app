import React from 'react'
import { getData } from '../api/getData'

export default function Data({data}) {
    // const data = getData()
    console.log(data?.aboutinstitutes)
  return (
    <div>
        <h1 className='text-4xl font-bold text-green'>{data?.aboutinstitutes?.description}</h1>
    </div>
  )
}
