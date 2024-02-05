
import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"
import { getAbsoluteFilename, getFont, getData, getRoles } from "@/lib/helpers"
import { MobileTemplate } from "@/components/templates"
import {get, uniq} from 'lodash'

export const runtime = 'edge'
 
const size = {
  width: 675,
  height: 1200,
}

export async function GET(
  request: NextRequest, 
  { params }: { params: { code: string }} 
  ) {
 

    const api = await getData(params.code)

    if(!get(api, "id")){
      return new ImageResponse( <MobileTemplate 
        headerImageSource={getAbsoluteFilename(request, "/ega.png")}
       />, size)
    }

    return new ImageResponse(
      (
        <MobileTemplate 
          headerImageSource={getAbsoluteFilename(request, "/ega.png")}
          qrCodeImageSource={getAbsoluteFilename(request, `/${params.code}/qrcode`)} 
          mainInfo={`${get(api, "fname", "")} / ${get(api, "cname2", "")}`}
          secondaryInfo={`${get(api, "event", "")} / ${getRoles(get(api, "tickets", []))}`}
          />
      ),
      {
        ...size,
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

/**
 * 
 

{
  id: 220657,
  fname: 'Nico',
  lname: 'Hess',
  cname2: 'ePages',
  position: 'CFO',
  company_role: '',
  participant_type: '',
  vip: '',
  tickets: [ 'party' ],
  event: 'E-commerce Berlin (8) 2024'
}


{
  "user-agent": "Vercel Edge Functions",
  "accept-encoding": "gzip",
  "cdn-loop": "cloudflare; subreqs=1",
  "cf-connecting-ip": "2a06:98c0:3600::103",
  "cf-ew-via": "15",
  "cf-ray": "850de86ed6aa6ace-FRA",
  "cf-visitor": "{\"scheme\":\"https\"}",
  "cf-worker": "cloudflare-workers.vercel-infra-production.com",
  "x-forwarded-for": "172.71.246.37",
  "x-forwarded-host": "dupa1111.free.beeceptor.com",
  "x-forwarded-proto": "https",
  "x-middleware-subrequest": "b778db7e9735e53017bf2f084a883174a925cb05",
  "x-vercel-id": "fra1::579db-1707164991619-6d0d4409051d"
}


*/