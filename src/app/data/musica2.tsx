import { Musica } from './musica';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'


export const MusicaCard2 = ({ musica }: { musica: Musica }) => {
    return (
      <div className={musica.style}>
        <div className=" gg group relative w-full h-auto rounded-lg flex justify-center items-center overflow-hidden">
          <a href="" className=" gg w-auto h-auto group-hover:">
            <Image src={musica.image}
            width={400}
            height={41.188} 
            alt="" />
          </a>
          <div className="transition-all delay-100 ease-in duration-100 absolute bg-red-600 rounded-full ">
            <button className=" flex items-center justify-center size-8 sm:size-10 hover:size-[34px] sm:hover:size-[42px] hover:bg-red-700 text-[22px] rounded-full outline-none ">
              <FontAwesomeIcon icon={faPlay} className="text-white"/>
            </button>
          </div>
        </div>
      
        <div className="w-full h-auto flex justify-start pt-1 leading-5 text-white group-hover:text-gray-800">
          <a href="" className="flex w-full hover:underline overflow-hidden mt-1">
            <p className="text-redgray-800 text-pretty w-full truncate">{musica.name}</p>
          </a>
        </div>
        <div className=" w-full h-auto flex justify-start pt-1 leading-5 text-xs text-white group-hover:text-gray-800 ">
          <a href="" className="flex w-auto hover:underline overflow-hidden">
            <p className="text-redgray-800 text-wrap w-full truncate">{musica.artist}</p>
          </a>
        </div>
      </div>
    )
}

export const musicas2: Musica[] = [
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNDwqnE9o89r9sMIe0KbsjeyqeMvlvCPGMmalkxQg3tZjQy_zsEbtuBRoWyMiQBndFr3kF6qTxUP5CUpVtclx5Pwz9o7w0orfxCbzBXJdfgJwaDfuQqjngMwA0PlQ4voZt8kYi5yafQ6WC7XZ9Bg0HHJw=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Carlos Vante, Wander Peixoto...',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 2,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPOtucO5fkjH6D1M7M22hmdROWxT_4q6j0o72bdD82eZ1R1KZ0ygdXTNe7_UY8WkEAFyu8x8mgoHV2LgScz_MI_0Mqm1pGfmY9phKeAA2vcRNmg8YIKMC6qYwx6s8Z71HXCkZ7yigfMcT4fkgViIgBDrQ=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Zabo, Anderson Coelho, Antares...',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOTpK4k-buwUTFOqyBcsuDfL2flh3cw0mYzfAB7ZrR-0jJH3tyvGDR-SN8QhQlCVteYSouoXji2B-nkTSnaT8j4DmvjQnBJ770ylaKWv9m87eVg2Xv9rzxquqkeQyCSHKcZNt6OKXQvn7P4O9ESOVQnog=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Zabo, Ultim0s, zzZiz...',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 4,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPEVqduE2sTvXc4E3-KFCac1veAT5aFupooAOgbJnZC_UZLmkQrZA1RibP6v0k9OJzXQIfqP1qYYnIYqo-tkIzu15J5TeyuoCT5QKifZBARrzAtTUSLT_FxvGY6UXWW1c3D1rRbpm-boPTUt5w0FFgusg=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Foton',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 5,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPZ27F2OmTdr8yINMIQ29JOD8Te16NROTkhqti0ZoXFM00YmKZY5oTXrsCFFRXvLEhxefLkPBwvJtje5UPOnuywKkEmOfReOazWrKT1Fz3Fuv7RCyYukUEy9eNAtaENEAAOH7YRgHh_79du_qWsmXBNMw=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Johnny Bluegrass, Joe Tree, Rusty Rhodes, Jeb Carter...',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 6,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOVdORjN06Tss7c9Jcap9WLkLqbXcBtge-gQojDhCE5t_biADzgfJ4bJNvN4jdzHdI5cNcKDmu4kgMIoS7b3-6XwERmY8t6fXLfkt_Ehv9-RwWQ_g8gP0vkSIEK9XqQMOkyhePU05KvnllMTkl6Y2rOSg=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Georgia Moon, Dusty Brown...',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 7,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPDB8CNkvx3LZh1gay-MjDHz1imXE4_QnPYa4ABsfYt4pKEuTOpGfUvrMP8c2OYa0fohEmQqDNapfGh_Q0NzD6RRcrUYLsCfQiTXBZVr36M5_pisQSLqib7xBhdvNd2z9m6awixTpOcJNKSz8RycSJcvg=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Hiroshi',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 8,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN7Rvdr-I1topQcX_G4hMmfoPeNzXbfQ6WuOSVOk_UBeimNr9De4Aqtc9yDDgE12H-SWWb1Q_kYuGX9nhhkYls0a2R857HrgfXDZJmk95lam1IveURitS4egpD38ur2JTWxQriyToBlDQ9TwILNSVhCvQ=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Fim De Semana',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 9,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczM8pUJzqZEnBSE1grPWez7gU5Mur0OdOnvfcRQcByaHbRU6sEM9OHFyNP23WvTJxTCQIuGL00VYW_w5p5ybLwMNFz8wOTtdcMzMRi1UPCkEuFy4TCosrEfy56miUjMvn1aEh5g4jaTXMlNNuiS93VZVYg=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'John River, Scarlett Oak, Walker Steele, Willow Grace...',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 hidden sm:flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 10,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczM5aZJ41ofObytPYbfqJhCYe7qYMrJbJ60haHY2ACtleiIWbmtrfQ9xNyaOcFOtAjOBU8G4u1CEE24ySyF856IzRNkrgDUBSXGmqQU_XMBGG8lIPEReTcbd2VzlNMqLJcOM4pamYwX5qDp2YZOsJ2Tc9g=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'O Melhor Do K-POP',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 hidden sm:flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
];

export const musicaImpares2 = musicas2.filter(musica => musica.id % 2 !== 0);
export const musicaPares2 = musicas2.filter(musica => musica.id % 2 === 0);