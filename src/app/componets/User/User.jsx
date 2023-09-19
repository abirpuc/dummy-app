import { getData } from '@/app/api/getData'
import React from 'react'

export default async function User() {
    const user = await getData()
  return (
    <div>
        <h1 className='text-8xl'>Total User : <span className='text-green-500'>{user.length}</span></h1>
    </div>
  )
}
