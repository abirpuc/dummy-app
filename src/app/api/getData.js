
export const getData = async function(){
    const res = await fetch('http://localhost:3001/api');
    const data = await res.json()
    return data;
} 