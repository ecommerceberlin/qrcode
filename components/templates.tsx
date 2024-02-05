




export function MobileTemplate({headerImageSource, qrCodeImageSource, mainInfo = "USER NOT FOUND", secondaryInfo} : {
    headerImageSource: string
    qrCodeImageSource: string | undefined
    mainInfo: React.ReactNode | undefined
    secondaryInfo: React.ReactNode | undefined
  }): React.ReactNode {
  
    return (
  
      <div tw="flex w-full h-full flex-col justify-center bg-white">
          
          <div tw="flex justify-center"><img tw="mb-30" src={headerImageSource} alt="" width="400" /></div>


          
          {qrCodeImageSource? <div tw="flex justify-center mb-20"><img src={qrCodeImageSource} width="500" height="500" alt="" /></div>: null}


          {mainInfo? <div tw="flex justify-center text-5xl mx-10 mb-5 text-gray-700 text-center">{mainInfo}</div>: null}

          {secondaryInfo? <div tw="flex justify-center text-xl text-gray-400 mx-10 text-center">{secondaryInfo}</div>: null}

        </div>
  
    )
  
    
}
