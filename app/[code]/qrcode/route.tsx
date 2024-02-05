
import { NextRequest, NextResponse } from "next/server"
import QRCode from 'qrcode' 


// Route segment config
export const runtime = 'edge'



const QRCodeOpts = {
  errorCorrectionLevel: 'Q',
  type: 'svg',
  // quality: 0.3,
  margin: 1,
  color: {
    dark:"#000000",
    light:"#ffffff"
  }
}


/**
 * 
 * 
 const cover = `${protocol}//${host}/_next/image?url=${encodeURIComponent(
  searchParams.get('cover') || '/cover.jpg'
)}&w=1200&q=75`

 */


export async function GET(
  request: NextRequest, 
  {params }: { params: { code: string }}
  ) {




    const blob = await QRCode.toString(`https://expojuicer.com/p/${params.code}`, QRCodeOpts)


    const response = new NextResponse(blob)
    response.headers.set("content-type", "image/svg+xml");
    // const interSemiBold = fetch(
    //   new URL('@/Inter/static/Inter-SemiBold.ttf', import.meta.url)
    // ).then((res) => res.arrayBuffer())
   
    return response
  }