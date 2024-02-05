
import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"
import Image from "next/image"
// Route segment config
export const runtime = 'edge'
 

function getAbsoluteFilename(request: NextRequest, path: string): string{
  const {host, protocol} = request.nextUrl

  return `${protocol}//${host}/_next/image?url=${encodeURIComponent(path)}&w=1200&q=75`
}


async function getFont(){
  const res = await fetch( new URL('@/fonts/Inter/static/Inter-SemiBold.ttf', import.meta.url) ); 
  return await res.arrayBuffer(); 
}

async function getData(url: string) {
  const res = await fetch(url, {cache: "no-cache"})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  try{
    return await res.json()
  }catch(err){
    return {}
  }
  
}
 


export async function GET(
  request: NextRequest, 
  { params }: { params: { code: string }} 
  ) {
 

    const api = await getData("https://dupa1111.free.beeceptor.com")



    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div tw="flex w-full h-full flex-col justify-center bg-white">
        
        <div tw="flex justify-center"><img tw="mb-10" src={getAbsoluteFilename(request, "/ega.png")} alt="" width="500" /></div>
        <div tw="flex justify-center text-5xl mb-30 text-gray-700">fname lname</div>
        <div tw="flex justify-center"><img src={getAbsoluteFilename(request, `/${params.code}/qrcode`)} width="500" height="500" alt="" /></div>
        </div>
      ),
      // ImageResponse options
      {
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
        
        width: 630,
        height: 1200,
        
        fonts: [
          {
            name: 'Inter',
            data: await getFont(),
            style: 'normal',
            weight: 400,
          },
        ],
      }
    )
  }