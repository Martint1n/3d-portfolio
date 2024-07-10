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
  const renoskem = <div className='w-full h-full text-center flex flex-col justify-around items-center'>
      <p className='text-whiteBlue text-3xl'>RenoSkem</p>
      <p>{t('projects.renoskem.introduction')}</p>
      <div className='flex flex-col'>
        <a className='text-whiteBlue pb-2 underline' href='https://github.com/craftByElla/RenoSkem_Frontend' target="_blank">{t('projects.renoskem.linkGithubFront')}</a>
        <a className='text-whiteBlue underline' href='https://github.com/craftByElla/RenoSkem_Backend' target="_blank">{t('projects.renoskem.linkGithubFront')}</a>
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

  const tournoi = <div className='w-full h-full text-center flex flex-col justify-around items-center'>
    <p className='text-whiteBlue text-3xl'>Tournoi des maisons</p>
    <p>Ce projet est une site premettant l'affichage de points
    attribués aux participants
    dans le but de créer de l'activité
    sur Instagram</p>
    <p>{t('projects.tounoi.design')}</p>
    <div className='flex flex-col'>
      <a className='text-whiteBlue pb-2 underline' target='_blank' href=''>Lien du site</a>
      <a className='text-whiteBlue pb-2 underline' href='https://github.com/Martint1n/HousesTournament' target="_blank">Lien github frontend</a>
      <a className='text-whiteBlue underline' href='https://github.com/Martint1n/HouseTournamentBackend' target="_blank">Lien github backend</a>
    </div>
  </div>

const lunetoile = <div className='w-full h-full text-center flex flex-col justify-around items-center'>
  <p className='text-whiteBlue text-3xl'>Lunétoile</p>
  <p>Ce projet est une site
  de précommande d'un jeu de 52 cartes
  où chaque carte est illustrée
  par un artiste tatoueur différent
  utilisation de Stripe pour
  l'achat en ligne
  </p>
  <p>Le site est en construction</p>
  <div className='flex flex-col'>
    <a className='text-whiteBlue pb-2 underline' href='https://github.com/Martint1n/lunetoile-frontend' target="_blank">Lien github frontend</a>
    <a className='text-whiteBlue underline' href='https://github.com/Martint1n/lunetoile-backend' target="_blank">Lien github backend</a>
  </div>
</div>

const pokemonStore= <div className='w-full h-full text-center flex flex-col justify-around items-center'>
  <p className='text-whiteBlue text-3xl'>PokémonStore</p>
  <p className='text-whiteBlue'>Ce projet est une site
  d'achat de produits Pokémon
  utilisation de Stripe
  l'achat en ligne
  utilisation de Puppeteer pour
  récupérer des données en ligne
  Le site est en construction
  </p>
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
        className='w-full h-1/2 border-2'
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