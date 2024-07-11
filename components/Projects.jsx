import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import React from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useTranslation } from 'react-i18next';

function Projects () {
  const {t} = useTranslation();
  const swiperRef = React.useRef();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const renoskem = <div className='w-[60vw] h-full text-center flex flex-col justify-around m-auto lg:w-4/5'>
      <p className='text-whiteBlue text-3xl'>RenoSkem</p>
      <p className=''>{t('projects.renoskem.introduction')}</p>
      <div className='flex flex-col'>
        <a className='text-yellow pb-2 underline' href='https://github.com/craftByElla/RenoSkem_Frontend' target="_blank">{t('projects.renoskem.linkGithubFront')}</a>
        <a className='text-yellow underline' href='https://github.com/craftByElla/RenoSkem_Backend' target="_blank">{t('projects.renoskem.linkGithubBack')}</a>
      </div>
      
      <p className='text-yellow underline' onClick={onOpen}>{t('projects.renoskem.video')}</p>
      <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
              <ModalBody>
                <video src='../RenoSkem_Finale.mp4' type='video/mp4' controls />
              </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>

  const tournoi = <div className='w-[60vw] h-full text-center flex flex-col justify-around m-auto lg:w-4/5'>
    <p className='text-whiteBlue text-3xl'>Tournoi des maisons</p>
    <p>{t('projects.tournoi.introduction')}</p>
    <p>{t('projects.tournoi.design')}</p>
    <div className='flex flex-col'>
      <a className='text-yellow pb-2 underline' target='_blank' href='https://houses-tournament.vercel.app'>{t('projects.tournoi.websiteLink')}</a>
      <a className='text-yellow pb-2 underline' href='https://github.com/Martint1n/HousesTournament' target="_blank">{t('projects.tournoi.linkGithubFront')}</a>
      <a className='text-yellow underline' href='https://github.com/Martint1n/HouseTournamentBackend' target="_blank">{t('projects.tournoi.linkGithubBack')}</a>
    </div>
  </div>

const lunetoile = <div className='w-[60vw] h-full text-center flex flex-col justify-around m-auto lg:w-4/5'>
  <p className='text-whiteBlue text-3xl'>Lunétoile</p>
  <p>{t('projects.lunetoile.introduction')}</p>
  <p>{t('projects.lunetoile.websiteLink')}</p>
  <div className='flex flex-col'>
    <a className='text-yellow pb-2 underline' href='https://github.com/Martint1n/lunetoile-frontend' target="_blank">{t('projects.lunetoile.linkGithubFront')}</a>
    <a className='text-yellow underline' href='https://github.com/Martint1n/lunetoile-backend' target="_blank">{t('projects.lunetoile.linkGithubBack')}</a>
  </div>
</div>

const pokemonStore= <div className='w-[60vw] h-full text-center flex flex-col justify-around m-auto lg:w-4/5'>
  <p className='text-whiteBlue text-3xl'>PokémonStore</p>
  <p className='text-whiteBlue'>{t('projects.pokemonStore.introduction')}</p>
  <p>{t('projects.lunetoile.websiteLink')}</p>
</div>
return (
<Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={0}
        slidesPerView={1}
        className='w-full h-full flex justify-center lg:w-4/5'
      >
        <SwiperSlide >{renoskem}</SwiperSlide>
        <SwiperSlide >{tournoi}</SwiperSlide>
        <SwiperSlide >{lunetoile}</SwiperSlide>
        <SwiperSlide >{pokemonStore}</SwiperSlide>

        <div class="swiper-button-prev" onClick={() => swiperRef.current?.slidePrev()}></div>
        <div class="swiper-button-next" onClick={() => swiperRef.current?.slideNext()}></div>
      </Swiper>
)
}

export default Projects