<<<<<<< HEAD
"use client"

import Image from "next/image";
import { PlaylistPlace, playlist } from "../../data/playlistPlaces"




export default function PlayList() {
  return (
    <div className=" flex flex-col w-full h-screen bg-black pt-1.5">
      <section className="w-full h-52">
        <div className=" relative w-full h-auto flex items-center justify-center bg-gray-950 rounded-lg px-7 py-1.5 ">
          <div className="relative group flex items-center justify-center w-full h-40 bg-gray-900  overflow-hidden boder-2 rounded-lg border-red-500 ">
            <Image src="https://lh3.googleusercontent.com/pw/AP1GczNNI6rY-LdN_gRYqZrNWD1dGD_7ya2DTvJfNAfDwKwHGiSyU0Fij82LdoQnq-sKMxzTFC8uL1TQHwGJI6h9rXtzs453C-fJsKvRUPiTeNVHN2sbyxY-0jcYQr0K9PZA3te3GCz3CqOWXH40X0dwFH0n1g=w617-h617-s-no-gm?authuser=0" 
            width={4000}
            height={204}
            alt=""
            className="rounded-lg bg-center "/>
            <h1 className="block group-hover:text-white transition  delay-150 duration-1000 ease-in-out w-full h-full truncate absolute md:left-20 md:-bottom-2 left-0 -bottom-5  text-[100px] text-transparent font-semibold">Tocaia</h1>
            <h3 className="block group-hover:text-white transition  delay-700 duration-500 ease-out w-52 h-auto absolute top-1 md:right-72 right-20 text-5xl bg-red-60 text-nowrap text-transparent font-semibold decoration-none">Carlos Vante</h3>
          </div>
          <div className="absolute -bottom-16  size-36 rounded-full bg-gray-900  border-8 border-black overflow-hidden">
            <Image src="https://lh3.googleusercontent.com/pw/AP1GczMnAGEDSjBZPi8ILzsdRNHtqrKSaDcrkOKDbRD-A3wXZCNV_DScLj88FbNiBbdNEvRa-2SjJemtfWAd0fK2UynwLqU6-IHmew8J8wRmxqdkwFaOqzQhvxNGGyHr2G8o3J4QUmdwnDgl7M2icALgmHwrMA=w617-h617-s-no-gm?authuser=0"
            fill
            alt="eeew" />
          </div>
        </div>
      </section>
      <section className="flex w-full h-full pt-2">
        <div className="w-full h-[100px] min-h-full bg-gray-950
         rounded-lg px-7 py-2">
          <div className="w-full h-full overflow-auto bg-gray-900 rounded-lg p-1.5">
            {playlist.map((play) => (
              <PlaylistPlace key={play.id} playlist={play} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
=======
"use client"

import Image from "next/image";
import { PlaylistPlace, playlist } from "../../data/playlistPlaces"




export default function PlayList() {
  return (
    <div className=" flex flex-col w-full h-screen bg-black pt-1.5">
      <section className="w-full h-52">
        <div className=" relative w-full h-auto flex items-center justify-center bg-gray-950 rounded-lg px-7 py-1.5 ">
          <div className="relative group flex items-center justify-center w-full h-40 bg-gray-900  overflow-hidden boder-2 rounded-lg border-red-500 ">
            <Image src="https://lh3.googleusercontent.com/pw/AP1GczNNI6rY-LdN_gRYqZrNWD1dGD_7ya2DTvJfNAfDwKwHGiSyU0Fij82LdoQnq-sKMxzTFC8uL1TQHwGJI6h9rXtzs453C-fJsKvRUPiTeNVHN2sbyxY-0jcYQr0K9PZA3te3GCz3CqOWXH40X0dwFH0n1g=w617-h617-s-no-gm?authuser=0" 
            width={4000}
            height={204}
            alt=""
            className="rounded-lg bg-center "/>
            <h1 className="block group-hover:text-white transition  delay-150 duration-1000 ease-in-out w-full h-full truncate absolute md:left-20 md:-bottom-2 left-0 -bottom-5  text-[100px] text-transparent font-semibold">Tocaia</h1>
            <h3 className="block group-hover:text-white transition  delay-700 duration-500 ease-out w-52 h-auto absolute top-1 md:right-72 right-20 text-5xl bg-red-60 text-nowrap text-transparent font-semibold decoration-none">Carlos Vante</h3>
          </div>
          <div className="absolute -bottom-16  size-36 rounded-full bg-gray-900  border-8 border-black overflow-hidden">
            <Image src="https://lh3.googleusercontent.com/pw/AP1GczMnAGEDSjBZPi8ILzsdRNHtqrKSaDcrkOKDbRD-A3wXZCNV_DScLj88FbNiBbdNEvRa-2SjJemtfWAd0fK2UynwLqU6-IHmew8J8wRmxqdkwFaOqzQhvxNGGyHr2G8o3J4QUmdwnDgl7M2icALgmHwrMA=w617-h617-s-no-gm?authuser=0"
            fill
            alt="eeew" />
          </div>
        </div>
      </section>
      <section className="flex w-full h-full pt-2">
        <div className="w-full h-[100px] min-h-full bg-gray-950
         rounded-lg px-7 py-2">
          <div className="w-full h-full overflow-auto bg-gray-900 rounded-lg p-1.5">
            {playlist.map((play) => (
              <PlaylistPlace key={play.id} playlist={play} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
>>>>>>> a74dab28d1723fe46ff149d6ceb3873ea102958c
