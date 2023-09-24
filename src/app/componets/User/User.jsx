"use client"
import { getData } from '@/app/api/getData'
import React, { useEffect, useState } from 'react'
import Data from '../Data';

export default function User() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // const user = await getData()
  // console.log(user)
  useEffect(() => {
    // Fetch data from the API
    fetch('https://academyims.com/api/indexdata')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <h1>Hello Next.js</h1>
      <h1 className='text-md text-justify text-green-500'>{data?.aboutinstitutes?.description}</h1>
    </div>
  )
}
