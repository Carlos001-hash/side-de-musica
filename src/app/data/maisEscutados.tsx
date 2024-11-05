import { Musica } from './musica';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'


export const MusicaCard3 = ({ musica }: { musica: Musica }) => {
    return (
      <div className={musica.style}>
        <div className=" gg group relative w-full h-auto rounded-lg flex justify-center items-center overflow-hidden">
          <a href="" className=" gg w-auto h-auto group-hover:">
            <Image src={musica.image}
            width={400}
            height={41.188} 
            alt="" />
          </a>
          <div className="transition-all delay-100 ease-in duration-100 absolute bottom-2 bg-red-600/0 group-hover:bg-red-600 rounded-full   group-hover:bottom-3 ">
            <button className=" flex items-center justify-center size-10 hover:size-[42px] hover:bg-red-700 text-[22px] rounded-full outline-none ">
              <FontAwesomeIcon icon={faPlay} className="transition-all ease-in delay-75 duration-100 text-red-600/0 group-hover:text-gray-950"/>
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

export const musicas3: Musica[] = [
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMMunDEMwHsnZz_1yk3j7GR_q9QbKuf2715LiHxZ8lQXLpA8M1LaKKwN9t4BuwLYbyCpBdc9y3ZpFDzmeRwYb9tSO-cMgGvIOm7jjMs4a4e7xPoqrlUNvbUW-zvXAJcEAmk7MuX-cRGktKpw0MSjk61DQ=w617-h617-s-no-gm?authuser=0',
        name: 'New You',
        artist: 'R730',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 2,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMN9uT8M5TcHYi-fUzRbNIhMT8j7Q8JrL5OmV9WAAEDjCQagIQhQoQrTRHrPLErlesUswyqUP1XpWRmFPjL1jBr6_85YKQA2aI80MnWf-8XD5Mt0CqqP-yyY3scou9JkuI8z3lYdUxcOeW5CW32YZy1Pw=w617-h617-s-no-gm?authuser=0',
        name: 'Sinta O Vento',
        artist: 'Fernada Lima',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPBweVl_b1QLS1dV8y78p8CQGfWMInOmR-cNN0FLb0YdDDOEOlGBOoM9cFowZFAi_TYd-bz2yRhKhB00mI590528bvMTrJMM7hVcPoHJhCpuqbNo4LK1SWcxKdvn5Q9D49c1b2NvEv0RSROEG6k0lbnVQ=w617-h617-s-no-gm?authuser=0',
        name: 'Somos Us',
        artist: 'Michael Ethan',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 4,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMdiNvpxQeApLx_5XC1xVj3ssNcpjRGOKtcfpfTB4CbDeHr6RQmcR3Tmkc_VhoQQWSZucapweIy9b-qfrrEjSO85pntQ584PNkdN0w_TjjmkhDLGvGmcLglYeADCcDs1rg8oIRkDUVzUHMz9mrrbQRoqQ=w617-h617-s-no-gm?authuser=0',
        name: 'Meia Noite',
        artist: 'Foton',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 5,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOiYNNlwWJGRzUwAnVJAWq_g7LfG299BDubjwOJGt19RGONiNEMZlsGHiXBYwFULjN7M1OJPLqk1i_smVUZMa8bBvlqJqk5q0yozfCluWWk1dNAwN0e9WzyMghK2Ru6rVDYTDSapiK95fFeVFiauKUpnA=w617-h617-s-no-gm?authuser=0',
        name: 'MHS',
        artist: 'Zabo',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 6,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPaaZ5Lkz3I5KTbLF-y87To9eMNRfNXivLNgCJWF3jbeElncgq6Djv2AfUrEDqv2-9Qhh2JolX1K0GDRGWQ76dIo5fya6qteds0zgMjnd2K1eXG8oTwtA_mHJ8t_kRY2mMEel9fOtvfO4JCFdKNsevXbA=w617-h617-s-no-gm?authuser=0',
        name: 'Choro Da Noite',
        artist: 'Pedro Lisboa',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 7,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNkDFo7TBhbA54JJowNTBq75qAmC-1Tu8CmrjU4WKfr2P6u8O_DfNw1gjYKtBYvf_U0OD4hAXc1p5xQr4Fs-qdhtxokNFmmit_zdZ6814Rr8WzF0luhbgY6iMYAXJkgfPk5AncbmnlSFRYUzS-Vj_jL8A=w617-h617-s-no-gm?authuser=0',
        name: 'New I',
        artist: 'R730',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 8,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOqAH-tzHCHoqrRdvrCqIGWdelg98M_JHVhy1_kMMH577KVs4q3OKu8Ugdj330Kub6eDtYjPBGW1OPoadlTo54Az8SdqJ5eLFHWu1DtaXHab6Vspy_vRKqQe83iuMIM0y_QD92-IaGkb2_WiOSxcJSvSw=w617-h617-s-no-gm?authuser=0',
        name: 'Abertura de "will Return"',
        artist: 'Hiroshi',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 9,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMf8MBan-Ugyq5oodHfrRYSlN0IMK8IFn7tmOlwdc4W33xIlfk5x_v-RUZNl650nd4rgSSMuoP7YsQTQcLgZ9531Hx8aL0y1h7ULexYEKkiN9AGQ3tchsMK7PeH2hvrvX_Y1fw99tiCsTyN5YNRIW73Hw=w617-h617-s-no-gm?authuser=0',
        name: 'À toa',
        artist: 'Tati',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 hidden sm:flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 10,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPQCbqpAMKMJADjNMTUc9_dFuRAEFuTEF9dKvAOJ-Gvk-mno8XkE0_l8If8gldcL7MKFaQTbUOO0cjAooSj0Ih-vD1onxE6CJOmbRm9YtjjuifNijh5nvp-dk9I0EIsNFfkvjl8xkYuM99hEjex_wbHSQ=w617-h617-s-no-gm?authuser=0',
        name: 'Four Days',
        artist: 'John River',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 hidden sm:flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
];

export const musicaImpares3 = musicas3.filter(musica => musica.id % 2 !== 0);
export const musicaPares3 = musicas3.filter(musica => musica.id % 2 === 0);