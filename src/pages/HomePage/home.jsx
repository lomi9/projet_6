import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import Banner_home from '../../assets/landscape_banner.png';


export default function Home() {

  const bannerTitleDesktop = 'Chez vous, partout et ailleurs';
  const bannerTitleMobile = (
    <>
      Chez vous,
      <br />
      partout et ailleurs
    </>
  );
  
    return (
      <div className='home__div'>
      <Header/>
      <Banner backgroundImageUrl={Banner_home} titleDesktop={bannerTitleDesktop} titleMobile={bannerTitleMobile}/>
      <CardWrapper/>
      <Footer/>
    </div>
    );
  }