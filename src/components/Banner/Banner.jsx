

export default function Banner({backgroundImageUrl, titleDesktop, titleMobile}) {
    return (
      <>
    <div className="banner" style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
        <h1 className='banner__title'>{titleDesktop}</h1>
        <h1 className='banner__title-mobile'>{titleMobile}</h1>
    </div>
      </>
    );
  }