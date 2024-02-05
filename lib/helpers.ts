import {type NextRequest } from 'next/server'

const EVENTJUICER_TOKEN = `${process.env.EVENTJUICER_TOKEN}`;

export function getAbsoluteFilename(request: NextRequest, path: string): string{
  const {host, protocol} = request.nextUrl

  return `${protocol}//${host}/_next/image?url=${encodeURIComponent(path)}&w=1200&q=75`
}


export async function getFont(){
  const res = await fetch( new URL('@/fonts/Inter/static/Inter-SemiBold.ttf', import.meta.url) ); 
  return await res.arrayBuffer(); 
}

export async function getData(code: string) {
  
  if(!EVENTJUICER_TOKEN){
    throw new Error("EVENTJUICER_TOKEN not set.")
  }


  const res = await fetch(`https://api.eventjuicer.com/v1/services/code/${code}`, {
    headers: {
      "X-EVENTJUICER-TOKEN": EVENTJUICER_TOKEN
    }
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  try{
    const data = await res.json()
    return "data" in data? data.data: data;
  }catch(err){
    return {}
  }
  
}
