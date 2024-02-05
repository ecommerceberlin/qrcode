
import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'EGA'
export const size = {
  width: 630,
  height: 1200,
}

/**
 * 
 * 


 */


export async function GET(
  request: NextRequest, 
  { params }: { params: { code: string }} 
  ) {

    const {host, protocol} = request.nextUrl

 

    const cover = `${protocol}//${host}/_next/image?url=${encodeURIComponent(`/${params.code}/qrcode`)}&w=1200&q=75`


    // const interSemiBold = fetch(
    //   new URL('@/Inter/static/Inter-SemiBold.ttf', import.meta.url)
    // ).then((res) => res.arrayBuffer())
   
    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div tw="flex w-full h-full flex-col justify-center bg-white">
        <div tw="flex justify-center text-5xl mb-5">asd</div>
        <div tw="flex justify-center"><img src={cover} width="500" height="500" /></div>
        </div>
      ),
      // ImageResponse options
      {
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
        ...size,
        // fonts: [
        //   {
        //     name: 'Inter',
        //     data: await interSemiBold,
        //     style: 'normal',
        //     weight: 400,
        //   },
        // ],
      }
    )
  }