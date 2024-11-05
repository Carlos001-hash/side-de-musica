
import Image from "next/image";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faPlay, faVolumeHigh, faShuffle, faRepeat, faSliders, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className=" absolute bottom-0 mt-auto w-full h-20 bg-gray-950 rounded-none md:rounded-b-xl flex flex-row items-center justify-between border-t md:border-none border-red-500">
            <div className="mx-4 h-full w-full bg-yellow-5000 flex items-center justify-between gap-2">
                <div className="w-auto md:w-[205px] h-full flex items-center">
                    <div className=" bg-gray-300 w-9 md:size-12 mr-3 rounded-full overflow-hidden hover:animate-spin">
                        <Image src="https://lh3.googleusercontent.com/pw/AP1GczPjrv_UWqeDNfCdewXBj8zq0W6i513KwGoVDNNnW2b8kj4RAG5YUfvzmRBpPz9hMEyFyPwWTuxDsWdg6RMIMYNHeENCmCso1M7ZcTp2TjFDU0_d_wf9GuUFiDKPggGkJIYSYAsGvP8LU8NQmeNA81kXrg=w617-h617-s-no-gm?authuser=0" 
                        width={400} 
                        height={41.188} 
                        alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="bg-red-7000 flex items-end no-underline text-base font-normal">
                            <a href="" className="w-12 truncate md:w-36 h-auto font-bold text-white text-sm text-nowrap  hover:underline overflow-hidden">Montagem 101%</a>
                        </div>
                        <div className="bg-green-7000 flex font-normal text-white text-sm text-nowrap  no-underline">
                            <a href="" className="w-12 truncate md:w-36 h-auto font-bold text-xs hover:underline overflow-hidden">Zabo</a>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-6000 w-2/5 flex flex-col justify-center px-1">
                    <div className="bg-red-7000 flex justify-center ">
                        <div className="bg-green-7000 w-28 sm:w-52 flex justify-around pb-1">
                            <button className="bg-transparent size-6 sm:size-9 p-0 relative outline-none rounded-full hover:bg-red-700 hover:drop-shadow-md shadow-yellow-600 flex items-center justify-center text-[15px] sm:text-[22px] text-white">
                                <FontAwesomeIcon icon={faShuffle} />
                            </button>
                            <button className="bg-transparent size-6 sm:size-9 p-0 relative outline-none rounded-full hover:bg-red-700 hover:drop-shadow-md shadow-yellow-600 flex items-center justify-center text-[15px] sm:text-[22px] text-white">
                                <FontAwesomeIcon icon={faBackwardStep} />
                            </button>
                            <button className="group/de bg-blue-7000 size-6 sm:size-9 p-0 relative outline-none rounded-full bg-red-600 hover:bg-red-700 hover:drop-shadow-md shadow-yellow-600 flex items-center justify-center text-[15px] sm:text-[22px] text-white">
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                            <button className="bg-transparent size-6 sm:size-9 p-0 relative outline-none rounded-full hover:bg-red-700 hover:drop-shadow-md shadow-yellow-600 flex items-center justify-center text-[15px] sm:text-[22px] text-white">
                                <FontAwesomeIcon icon={faBackwardStep} className="rotate-180"/>
                            </button>
                            <button className="bg-transparent size-6 sm:size-9 p-0 relative outline-none rounded-full hover:bg-red-700 hover:drop-shadow-md shadow-yellow-600 flex items-center justify-center text-[15px] sm:text-[22px] text-white">
                                <FontAwesomeIcon icon={faRepeat} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center bg-slate-5000 font-normal leading-5 text-[7px] sm:text-xs no-underline text-white">
                        <p className="font-bold">00:00</p>
                        <input type="range" id="" name="" min="0" max="100" className="w-full h-1 mx-1 cursor-pointer"/>
                        <p className="font-bold">04:00</p>
                    </div>
                </div>
                <div className="inline-flex gap-0">
                    <button className="bg-transparent size-6 md:size-9 p-0 relative outline-none rounded-full hover:bg-red-700 hover:drop-shadow-md shadow-yellow-600 flex items-center justify-center text-[15px] sm:text-[22px] text-white">
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </button>
                    <div className="w-auto h-auto flex flex-row items-center">
                        <div>
                            <button className="bg-transparent size-6 md:size-9 p-0 relative outline-none rounded-full hover:bg-red-700 hover:drop-shadow-md shadow-yellow-600 flex items-center justify-center  text-[15px] sm:text-[22px] text-white">
                                <FontAwesomeIcon icon={faVolumeHigh} />
                            </button>
                        </div>
                        <input 
                        type="range" 
                        name="" 
                        id="" 
                        min="0"
                        max="100" 
                        className="w-6 md:w-16 h-1 mx-1 cursor-pointer" 
                        />
                    </div>
                    <button className="bg-transparent size-6 md:size-9 p-0 relative outline-none rounded-full hover:bg-red-700 hover:drop-shadow-md shadow-yellow-600 flex items-center justify-center  text-[15px] sm:text-[22px] text-white">
                        <FontAwesomeIcon icon={faSliders} />
                    </button>
                </div>
            </div>
        </footer>
    );
}