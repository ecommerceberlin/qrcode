




export function MobileTemplate({headerImageSource, qrCodeImageSource, mainInfo = "USER NOT FOUND", secondaryInfo} : {
    headerImageSource: string
    qrCodeImageSource: string | undefined
    mainInfo: React.ReactNode | undefined
    secondaryInfo: React.ReactNode | undefined
  }): React.ReactNode {
  
    return (
  
      <div tw="flex w-full h-full flex-col justify-center bg-white">
          
          <div tw="flex justify-center"><img tw="mb-10" src={headerImageSource} alt="" width="500" /></div>


          {mainInfo? <div tw="flex justify-center text-5xl mb-30 text-gray-700">{mainInfo}</div>: null}
          
          {qrCodeImageSource? <div tw="flex justify-center"><img src={qrCodeImageSource} width="500" height="500" alt="" /></div>: null}

          {secondaryInfo? <div tw="flex justify-center text-xl mt-20 text-gray-700">{secondaryInfo}</div>: null}

        </div>
  
    )
  
    
}
