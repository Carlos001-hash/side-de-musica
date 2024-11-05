
import Image from "next/image";
import React, { useCallback } from 'react';
import { MusicaCard1, musicaPares, musicaImpares } from '../app/data/musica1';
import { MusicaCard2, musicaPares2, musicaImpares2 } from '../app/data/musica2';
import { MusicaCard3, musicaPares3, musicaImpares3 } from '../app/data/maisEscutados';
import { artistas, ArtistaCard1 } from '../app/data/artistas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useEmblaCarousel from "embla-carousel-react";


export default function Hero() {
    const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: false })
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const scrollPrev2 = useCallback(() => {
        if (emblaApi2) emblaApi2.scrollPrev()
      }, [emblaApi2])
    
      const scrollNexti = useCallback(() => {
        if (emblaApi2) emblaApi2.scrollNext()
      }, [emblaApi2])

    return (
        <main className=" main  w-full h-auto bg-gray-950  overflow-y-auto mt-0 md:mt-1.5 relative rounded-none md:rounded-t-xl">
            <div className=" main-area flex flex-col w-full min-h-full">
                <section className="flex h-auto w-full">
                    <div className="flex w-full h-60 overflow-hidden">
                        <Image src="https://lh3.googleusercontent.com/pw/AP1GczPjrv_UWqeDNfCdewXBj8zq0W6i513KwGoVDNNnW2b8kj4RAG5YUfvzmRBpPz9hMEyFyPwWTuxDsWdg6RMIMYNHeENCmCso1M7ZcTp2TjFDU0_d_wf9GuUFiDKPggGkJIYSYAsGvP8LU8NQmeNA81kXrg=w617-h617-s-no-gm?authuser=0" 
                        width={1700}
                        height={1300}
                        className=" object-cover shadow- object-center"
                        alt="" />
                    </div>
                </section>

                <section className="w-full pb-4 h-auto flex flex-col">

                    <div className="w-full flex flex-row flex-nowrap items-end justify-start p-3">
                        <h3 className=" text-lg md:text-2xl font-semibold text-white">Seus artistas favoritos</h3>
                    </div>

                    <div className="w-full h-auto flex flex-row justify-around">
                        <div className="embla-container w-full h-auto flex flex-row justify-around items-start">
                            {artistas.map((artista) => (
                            <ArtistaCard1 key={artista.id} artista={artista} />
                            ))}
                        </div>
                    </div>
                </section>
              
                <section className=" w-full h-auto">
                    <div className="w-full flex flex-row flex-nowrap items-end justify-start p-3">
                        <h3 className=" text-lg md:text-2xl font-semibold text-white">Recomendado para a semana</h3>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-around">
                        <div className="embla-container w-auto h-auto flex flex-row justify-around items-start">
                            {musicaImpares3.map((musica) => (
                            <MusicaCard3 key={musica.id} musica={musica} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full h-auto">
                    <div className="w-full flex flex-row flex-nowrap items-end justify-start p-3">
                        <h3 className=" text-lg md:text-2xl font-semibold text-white">Pelo que você anda escutando</h3>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-around">
                        <div className="embla-container w-auto h-auto flex flex-row justify-around items-start">
                            {musicaImpares2.map((musica) => (
                            <MusicaCard2 key={musica.id} musica={musica} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full pb-4">
                    <div className="w-full h-full flex flex-col">
                        <div className="w-full flex flex-row flex-nowrap items-end justify-start p-3">
                            <h3 className=" text-lg md:text-2xl font-semibold text-white">Seu estilo</h3>
                        </div>
                        <div className="w-full">
                            <ul className="flex flex-row flex-nowrap items-start justify-around gap-2">
                                <li className=" bg-gradient-to-r mb-8 mt-3 from-purple-500 to-pink-500 hover:from-purple-300 hover:to-pink-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className=" w-full h-auto flex items-center justify-start">
                                            <p className="truncate">Rock</p>
                                        </div>
                                    </a>
                                </li>

                                <li className=" bg-gradient-to-r mb-8 mt-3 from-pink-500 to-blue-500 hover:from-pink-300 hover:to-blue-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className=" w-full h-auto flex items-center justify-start">
                                            <p className="truncate">POP</p>
                                        </div>
                                    </a>
                                </li>

                                <li className=" bg-gradient-to-r mb-8 mt-3 from-blue-500 to-green-500 hover:from-blue-300 hover:to-green-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className=" w-full h-auto flex items-center justify-start">
                                            <p className="truncate">Samba</p>
                                        </div>
                                    </a>
                                </li>

                                <li className="hidden md:block bg-gradient-to-r mb-8 mt-3 from-green-500 to-yellow-500 hover:from-green-300 hover:to-yellow-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className=" w-full h-auto flex items-center justify-start">
                                            <p className="truncate">Hard rock</p>
                                        </div>
                                    </a>
                                </li>

                                <li className=" hidden lg:block bg-gradient-to-r mb-8 mt-3 from-yellow-500 to-teal-500 hover:from-yellow-300 hover:to-teal-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className=" w-full h-auto flex items-center justify-start">
                                            <p className="truncate">Rock</p>
                                        </div>
                                    </a>
                                </li>

                                <li className=" bg-gradient-to-r mb-8 mt-3 from-teal-500 to-purple-500 hover:from-teal-300 hover:to-purple-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className=" w-full h-auto flex items-center justify-start">
                                            <p className="truncate">Outros</p>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="embla flex flex-col-reverse relative">
                        <div className=" embla__viewport w-auto h-full" ref={emblaRef2}>
                            <div className="embla-container w-auto h-auto flex flex-row justify-around items-start">
                            {musicaImpares.map((musica) => (
                                <MusicaCard1 key={musica.id} musica={musica} />
                            ))}
                            </div>
                        </div>
                        <div className="w-full flex flex-row flex-nowrap items-end justify-between p-3">
                            <h3 className=" text-lg md:text-2xl font-semibold text-white">Para você</h3>
                            <div className=" w-24 flex flex-row items-center justify-around">
                                <button className="embla__prev w-9 h-9 flex items-center justify-center hover:bg-gray-50 border rounded-full" onClick={scrollPrev2}>
                                    <FontAwesomeIcon icon={faChevronRight} className="rotate-180" />
                                </button>
                                <button className="embla__next w-9 h-9 flex items-center justify-center hover:bg-gray-50 border rounded-full" onClick={scrollNexti}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="embla flex flex-col-reverse relative">
                        <div className=" embla__viewport w-auto h-full" ref={emblaRef}>
                            <div className="embla-container w-auto h-auto flex flex-row justify-around items-start">
                                {musicaPares.map((musica) => (
                                    <MusicaCard1 key={musica.id} musica={musica} />
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex flex-row flex-nowrap items-end justify-between p-3">
                            <h3 className=" text-lg md:text-2xl font-semibold text-white">Mais recentes</h3>
                            <div className=" w-24 flex flex-row items-center justify-around">
                                <button className="embla__prev w-9 h-9 flex items-center justify-center hover:bg-gray-50 border rounded-full" onClick={scrollPrev}>
                                    <FontAwesomeIcon icon={faChevronRight} className="rotate-180" />
                                </button>
                                <button className="embla__next w-9 h-9 flex items-center justify-center hover:bg-gray-50 border rounded-full" onClick={scrollNext}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" w-full h-auto">
                    <div className="w-full flex flex-row flex-nowrap items-end justify-start p-3">
                        <h3 className=" text-lg md:text-2xl font-semibold text-white">Para seu dia</h3>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-around">
                        <div className="embla-container w-auto h-auto flex flex-row justify-around items-start">
                            {musicaPares3.map((musica) => (
                            <MusicaCard3 key={musica.id} musica={musica} />
                            ))}
                        </div>
                    </div>
                </section>
                
                <section className="w-full pb-4">
                    <div className="w-full h-full flex flex-col">
                        <div className="w-full flex flex-row flex-nowrap items-end justify-start p-3">
                            <h3 className=" text-lg md:text-2xl font-semibold text-white">Por estilo</h3>
                        </div>
                        <div className="w-full">
                            <ul className="flex flex-row flex-nowrap items-start justify-around gap-2">
                                <li className=" bg-gradient-to-r mb-8 mt-3 from-purple-500 to-pink-500 hover:from-purple-300 hover:to-pink-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className=" w-full h-auto flex items-center justify-start">
                                            <p className="truncate">Rock</p>
                                        </div>
                                    </a>
                                </li>

                                <li className=" bg-gradient-to-r mb-8 mt-3 from-pink-500 to-blue-500 hover:from-pink-300 hover:to-blue-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className=" w-full h-auto flex items-center justify-start">
                                            <p className="truncate">Jazz</p>
                                        </div>
                                    </a>
                                </li>

                                <li className=" bg-gradient-to-r mb-8 mt-3 from-blue-500 to-green-500 hover:from-blue-300 hover:to-green-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className=" w-full h-auto flex items-center justify-start">
                                            <p className="truncate">Bossa Nova</p>
                                        </div>
                                    </a>
                                </li>

                                <li className=" hidden md:block bg-gradient-to-r mb-8 mt-3 from-green-500 to-yellow-500 hover:from-green-300 hover:to-yellow-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className=" w-full h-auto flex items-center justify-start">
                                            <p className="truncate">Country</p>
                                        </div>
                                    </a>
                                </li>

                                <li className="hidden lg:block bg-gradient-to-r mb-8 mt-3 from-yellow-500 to-teal-500 hover:from-yellow-300 hover:to-teal-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className=" w-full h-auto flex items-center justify-start">
                                            <p className="truncate">POP</p>
                                        </div>
                                    </a>
                                </li>

                                <li className="bg-gradient-to-r mb-8 mt-3 from-teal-500 to-purple-500 hover:from-teal-300 hover:to-purple-300 max-w-36 w-36 h-auto rounded-lg overflow-hidden">
                                    <a href="#" className="block w-full h-auto p-3">
                                        <div className="w-full h-auto flex items-center justify-start">
                                            <p className="truncate">outros</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="w-full pb-4 h-auto">
                    <div className="w-full flex flex-row flex-nowrap items-end justify-start p-3">
                        <h3 className=" text-lg md:text-2xl font-semibold text-white">Cheia de atitude</h3>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-around">
                        <div className="embla-container w-auto h-auto flex flex-row justify-around items-start">
                            {musicaPares2.map((musica) => (
                            <MusicaCard2 key={musica.id} musica={musica} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full pb-4 h-auto"></section>
            </div>
        </main>
    );
}