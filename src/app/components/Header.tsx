"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [conta, setConta] = useState(false);
    const refDiv = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        const handleClickFora = (event: MouseEvent) => {
          if (refDiv.current && !refDiv.current.contains(event.target as Node)) {
            setConta(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickFora);
    
        return () => {
          document.removeEventListener('mousedown', handleClickFora);
        };
      }, []);

    return (
        <header className=" w-full h-28 bg-gray-950 shadow-inner shadow-color-red-500/50 rounded-tr-xl flex justify-between border-b-2 md:border-none border-gray-800 p-3">
            <a className="w-9 ml-3 flex lg:hidden flex-row items-center gap-1" href="">
                <Image 
                className=""
                src="https://lh3.googleusercontent.com/pw/AP1GczMZcvgm-adsZrHe5HoQAfNQ8C8xj3wc-VDAzwOrRbQXswvuZGq8td-pp5aH-sNhPWfFFT2OG8iefxt8vwTiqoHyCScTW2ixckoqIOSpcFU26aih9qd770IZCnGbPYK0IbhK8yYxdA6vkiNLg6ge5wjRSg=w394-h617-s-no-gm?authuser=0" 
                width={47}
                height={47}
                alt="ddd" 
                />
            </a>
            <div className="w-2/4 flex items-center pl-1.5 ml-3">
                <div className="searchArea focus-within:bg-white focus-within:text-gray-950 focus-within:shadow-md focus-within:shadow-black relative w-full bg-gray-900 flex flex-nowrap rounded-full">
                    <input 
                    type="text" 
                    name="Pesquisar" 
                    id="search"
                    placeholder="Pesquisar..." 
                    className="group/pe text-black bg-transparent 
                    outline-none border-none w-full h-12 rounded-l-3xl pl-3 text-ellipsis z-auto" 
                    />
                    <button className="group/pe bg-none w-14 rounded-r-3xl text-xl text-red-500">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className=" right-0 size-10 hover:bg-red-600 rounded-full flex items-center justify-center">
                    <div className="size-full justify-center relative">
                        <div className=" absolute bg-green-500 border border-black size-[13px] text-sm flex items-center justify-center rounded-full right-2 top-2 cursor-pointer">4</div>
                        <button className="size-full bg-transparent rounded-full text-white hover:shadow-md shadow-slate-400 text-xl">
                            <FontAwesomeIcon icon={faBell} />
                        </button>
                    </div>
                </div>
                <div className="w-14 h-full flex items-center focus:">
                    {conta ? (
                        <div className="group w-10 h-10 bg-gray-950 rounded-full cursor-pointer shadow-sm overflow-hidden">
                            <Image src="https://lh3.googleusercontent.com/pw/AP1GczPJPJVCpAaDh4mmIN6YeDtjt-6o354Fjd4NLigPobVwhiAOMCale6grfKqDziVFEDYpmtEr-WoElL7Gfs70Kl30nWETcurp07dcWku6tF8iUygkDzNIwdOAfzvJ8PtXVfhd6perynRlBvzQEniqsQzXPQ=w599-h617-s-no-gm?authuser=0" 
                            width={400} 
                            height={41.188} 
                            className="" 
                            alt="Foto do perfil" />
                        </div>
                    ):(
                        <button onClick={() => setConta(true)} className="group w-10 h-10 bg-gray-950 rounded-full shadow-sm overflow-hidden">
                            <Image src="https://lh3.googleusercontent.com/pw/AP1GczPJPJVCpAaDh4mmIN6YeDtjt-6o354Fjd4NLigPobVwhiAOMCale6grfKqDziVFEDYpmtEr-WoElL7Gfs70Kl30nWETcurp07dcWku6tF8iUygkDzNIwdOAfzvJ8PtXVfhd6perynRlBvzQEniqsQzXPQ=w599-h617-s-no-gm?authuser=0" 
                            width={400} 
                            height={41.188} 
                            className="" 
                            alt="Foto do perfil" />
                        </button>
                    )}
                    {conta && (
                            <div ref={refDiv} className="block absolute w-40 md:w-52 h-auto top-[69px] right-[20px] shadow-md rounded-lg bg-gray-950 border border-gray-800 overflow-hidden z-10">
                                <ul className="flex flex-col text-white">
                                    <li className=" group border-b-[1px] flex flex-row justify-start items-cent cursor-auto p-2">
                                        <div className="w-14 h-14 rounded-full  overflow-hidden mx-1.5">
                                            <Image src="https://lh3.googleusercontent.com/pw/AP1GczPJPJVCpAaDh4mmIN6YeDtjt-6o354Fjd4NLigPobVwhiAOMCale6grfKqDziVFEDYpmtEr-WoElL7Gfs70Kl30nWETcurp07dcWku6tF8iUygkDzNIwdOAfzvJ8PtXVfhd6perynRlBvzQEniqsQzXPQ=w599-h617-s-no-gm?authuser=0" 
                                            width={400} 
                                            height={41.188} 
                                            alt="Foto de perfil"
                                            className="rounded-full>/>
                                        </div>
                                        <div className="w-full h-auto text-start">
                                            <h3 className="leading-5">Coisa Linda</h3>
                                            <a href="#" className="text-xs text-center underline hover:text-blue-500">Conta</a>
                                        </div>
                                    </li>
                                    <li className="flex flex-row items-center justify-center hover:bg-gray-900 hover:text-red-500 ">
                                        <a href="#" className="w-full h-auto p-3 text-center">Sair</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                </div>
            </div>
        </header>
    )
}
