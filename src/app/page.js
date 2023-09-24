"use client"
import Image from 'next/image'
import User from './componets/User/User'
import Data from './componets/Data'
import { useEffect, useState } from 'react';

export default function Home() {
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

  console.log(data?.aboutinstitutes)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <User/>
        <Data/>
      </div>
    </main>
  )
}
