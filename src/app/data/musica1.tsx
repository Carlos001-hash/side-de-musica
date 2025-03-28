import { Musica } from './musica';
import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'


export const MusicaCard1 = ({ musica }: { musica: Musica }) => {
    return (
      <div className="card min-w-[25%] sm:min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg">
        <div className=" gg group relative w-full h-auto rounded-lg flex justify-center items-center overflow-hidden">
          <Link href="about/first-post" className=" gg w-auto h-auto group-hover:">
            <Image src={musica.image}
            width={400}
            height={41.188} 
            alt="" />
          </Link>
          <div className="transition-all delay-100 ease-in duration-100 absolute bottom-2 bg-red-600/0 group-hover:bg-red-600 rounded-full   group-hover:bottom-3 ">
            <button className=" flex items-center justify-center size-10 hover:size-[42px] hover:bg-red-700 text-[22px] rounded-full outline-none ">
              <FontAwesomeIcon icon={faPlay} className="transition-all ease-in delay-75 duration-100 text-red-600/0 group-hover:text-white"/>
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

export const musicas: Musica[] = [
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNNI6rY-LdN_gRYqZrNWD1dGD_7ya2DTvJfNAfDwKwHGiSyU0Fij82LdoQnq-sKMxzTFC8uL1TQHwGJI6h9rXtzs453C-fJsKvRUPiTeNVHN2sbyxY-0jcYQr0K9PZA3te3GCz3CqOWXH40X0dwFH0n1g=w617-h617-s-no-gm?authuser=0',
        name: 'Tocaia',
        artist: 'Carlos Vante',
        style: '',
      },
    {
        id: 2,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczM9F2BV1wQIaV7xnooGxtdtmBtSRXIyRh3-vmz3STkUzToaRodntykIPsX_vhywIUuZtHr8Za5qZOO2FcOjcS0SQqyAtLiGPLzbxntjNkbRLoAp91O5BuVTsEEKXvSotCom2sI16qHkBF1wxTiUhVNTsQ=w616-h616-s-no-gm?authuser=0',
        name: 'Levemente',
        artist: 'Carlos Vante',
        style: '',
      },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMQQGJMXl6JEQqBHpaigtgxkElWXVr08-Z6DHNGhWWA0dBzz7dMB2NiowX8568NHvI8syZGViq4WDB9oMIjusBFvsNQij8Ch-Z_1SxeR47Vs6p4QJn1hzeyTN3kM-tDEEMMJ-_eTQLXZ-Q39HjNm5QLiA=w616-h616-s-no-gm?authuser=0',
        name: 'Dango',
        artist: 'wander Peixoto',
        style: '',
      },
    {
        id: 4,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOJNzPVMl4GwWiB03e7LiNZlHOlhJlLFmuz9DpEImpiI4SjWdDoTqQO1ciiy6wenpdnMA2-C0TjZArphpYYwzrnhrqd8xyB7bcL7TpYP4mpHWH94Et3K_GpN4JKuONqQafsuUSH-_NmGABalKHSvw0lbA=w616-h616-s-no-gm?authuser=0',
        name: 'Confuso',
        artist: 'Wander Peixoto',
        style: '',
      },
    {
        id: 5,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczO6gQcOLLGqe3einVpLorel6vQkjkieBEodQFrkxc4lugguqOsosxbV8lsTAzNp492isZaLJWFHls-6VOmq5L1OXy5_vJNh5B0lsLOf-TOlCFmSEE4Ns-IbYYE2g9-ha7GfLoNnbDWtIFMkK4_9lLHtIA=w616-h616-s-no-gm?authuser=0',
        name: 'Como Ela Vai',
        artist: 'Tati',
        style: '',
      },
    {
        id: 6,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPjrv_UWqeDNfCdewXBj8zq0W6i513KwGoVDNNnW2b8kj4RAG5YUfvzmRBpPz9hMEyFyPwWTuxDsWdg6RMIMYNHeENCmCso1M7ZcTp2TjFDU0_d_wf9GuUFiDKPggGkJIYSYAsGvP8LU8NQmeNA81kXrg=w617-h617-s-no-gm?authuser=0',
        name: 'Montagem 101%',
        artist: 'Zabo',
        style: '',
      },
    {
        id: 7,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczM1BB8egftZyVHR2HyVlgvBGyXvZEzw_rFYwMtYACxZcgvUp1jePqyMlSoonk_207QaneVid0_esi_AvxFi24ERamx0MCV7rLRTrrkiyDFg6UU4rI4DqISjcsF1Iltbsw81RCAbqHTsqm2UzaLt27uoFQ=w617-h617-s-no-gm?authuser=0',
        name: 'Consequência',
        artist: 'Carlos Vante',
        style: '',
      },
    {
        id: 8,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN0cx1qNkHqWi7qPw9ETLRQKfAEocUlTkMlNF2Arzk06wQ8tLoOfe5yNeEXqcYPuFR70AkyhBz77ftj2BZ0XlEyU5wPr12EFdNh1_-fBL7T6aix_ewg_niLw8SVw8hn9ggu1ytLYfqCSdbRg8A0siYoyg=w617-h617-s-no-gm?authuser=0',
        name: 'Abertura De "will Return"',
        artist: 'Hiroshi',
        style: '',
      },
    {
        id: 9,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN7Kipr4dJH0m5ThwI8q9D1WCuG0tY7V2jfsdXIV0AwH3AO06g9knhoXBziP-5IhUr9KlAjLStDSxfk2p3gcl7c6N5Au0s_Q37U1jJdN8DP2gzdeC5Vjtwn4LXCr0Qn0imFASt_pYIVXMIMXCEV5lc88A=w617-h617-s-no-gm?authuser=0',
        name: 'My Girl',
        artist: 'Joe Tree',
        style: '',
      },
    {
        id: 10,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOxarnWpjZvo6FGaDTY9tRnSy_5Sxu6SaqJ5M91DGK4rs0gMrAAO2cxPDdcnRZvGUXBpa61ZEdOI6KVaOVHlNT0F84zdBLhyCz9vVgiPEI5WLl7qUu1yKXyeloAyplpemzEDePJ31szCr1qL-QFQ7HOqA=w617-h617-s-no-gm?authuser=0',
        name: 'Run',
        artist: 'Anderson Coelho',
        style: '',
      },
    {
        id: 11,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczM135dVah8wRVz_KOHN9PFKI2QBOrCbTTmKuzD0k42hD_nWRj1GUI4LfppNurRASEmvYroIjSEvZ3cCMeCfN8Q1mtIoMX9f7-o26ni3xS__9kK1FTubflmHhe4jq54wfI_6BRKVX3BKjsYwtK_tyXdmlQ=w617-h617-s-no-gm?authuser=0',
        name: 'Break It',
        artist: 'Zabo',
        style: '',
      },
    {
        id: 12,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczO57GDIRefyVdSzGXrjlBIe1xrTl1j7TUp6lVHx95f7-xyDWOFywQgh0YqrROI_X_g17vD43To9spX_AnpxRtqD0WL9AV_pVJbmnmmV7D66FoKYp22vJoGTpO4XPR1Wooigq3fP3rKOaG6vps-7fGTcTA=w617-h617-s-no-gm?authuser=0',
        name: 'Óbvio',
        artist: 'IO',
        style: '',
      },

    {
        id: 13,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPXECiDpte1kWjnCCOW0RbeQCZ1TNmRjgSqoSYwRimB-wjz5OKjvU6hmas2Ke4nwSEusXToVtQdKyDgCS6EfHpf3GL9DnNZFlLU1d91KSg0hYHcGEw5VBO2WZfFJm0RYqEq-emwwjYvoItwDZ1vTPR9Yw=w617-h617-s-no-gm?authuser=0',
        name: 'A Coisa',
        artist: 'Foton',
        style: '',
      },



];

export const musicaImpares = musicas.filter(musica => musica.id % 2 !== 0);
export const musicaPares = musicas.filter(musica => musica.id % 2 === 0);

