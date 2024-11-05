import { Musica } from './musica';
import Image from "next/image";


export const ArtistaCard1 = ({ artista }: { artista: Musica }) => {
    return (
        <div className={artista.style}>
            <div className="group relative w-full h-auto rounded-full flex justify-center items-center overflow-hidden">
            <a href="" className="w-auto h-auto group-hover:">
                <Image src={artista.image}
                width={400}
                height={41.188} 
                alt="" />
            </a>
            </div>
            <div className=" w-full h-auto flex justify-center pt-3 leading-5 text-xs text-white ">
            <a href="" className="flex w-auto hover:underline overflow-hidden">
                <p className="text-redgray-800 text-wrap w-full truncate">{artista.artist}</p>
            </a>
            </div>
        </div>
    )
}

export const artistas: Musica[] = [
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMnAGEDSjBZPi8ILzsdRNHtqrKSaDcrkOKDbRD-A3wXZCNV_DScLj88FbNiBbdNEvRa-2SjJemtfWAd0fK2UynwLqU6-IHmew8J8wRmxqdkwFaOqzQhvxNGGyHr2G8o3J4QUmdwnDgl7M2icALgmHwrMA=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Carlos Vante',
        style: 'w-[100px] h-auto mb-2 flex  flex-col items-center justify-center hover:bg-gray-900 hover:shadow-md shadow-red-600 p-2 rounded-lg',
    },
    {
        id: 2,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMad2dU9lN1A85EzoqBgRVmPoS_UZOTb-6xz6ne_Zp7_mG9_aA5FHQOmcmzxfpL8bIRiasWBjUMBO-91xYvGNsv78w190BSeN3kezruRn44-n5TsmhbI9dxuWV7iEA72FwS2BrUeD4YohouCKPUcI8sBg=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Robert Sky',
        style: 'w-[100px] h-auto mb-2 flex  flex-col items-center justify-center hover:bg-gray-900 hover:shadow-md shadow-red-600 p-2 rounded-lg',
    },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNppLR4fYg4D0q_3SRTLDoiNt3TSHMTFHL8o7O1HBkWwoeCsf1UYAa3rEnEjDrPPj5jzEwBBEqQQmFGnlse1NXNscJkdr43CbA4CZ63XVlC7Fz21ULxzm4YTJONcPUjRs7z0jDpgGiUwVO6G8DN71nb7w=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Foton',
        style: 'w-[100px] h-auto mb-2 flex  flex-col items-center justify-center hover:bg-gray-900 hover:shadow-md shadow-red-600 p-2 rounded-lg',
    },
    {
        id: 4,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOZAv46lflRnWNDR6H_XUgFqUJ2m83r57sDHnDq9CN97L1UMyZrBRwCiWj3Iznvln7aDjO1wfxHUDHzdapfbwAKqAddAmpsDOqzzfu-VLw8oNBAIIEFyxQn1PLIRN11dJHjdIqJ3JECafWlPf3jm7k6-w=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Joe Tree',
        style: 'w-[100px] h-auto mb-2 flex  flex-col items-center justify-center hover:bg-gray-900 hover:shadow-md shadow-red-600 p-2 rounded-lg',
    },
    {
        id: 5,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOd9SzOQyyd9yPaQXATAnpYI-4bTI8Nxsmtze6QrKsELuJ-s2iHPBu5KY73PWATft5KD0WzjcXahoKdFTcst987WLLow0TLwN6O8-mv69Bcq1VYP2rDFZqWUl-IS_zr8xBDsraAw3Pi_bIkscDFxcCBmg=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'wander Peixoto',
        style: 'w-[100px] h-auto mb-2 flex  flex-col items-center justify-center hover:bg-gray-900 hover:shadow-md shadow-red-600 p-2 rounded-lg',
    },
    {
        id: 6,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPZ9LPa2h_JX9qND8IRuzn_kyMWO_Y-dXTKkcdjHfQp2TIRar4ER_S-ojKe3EsqV5llT0orApWPItNLU0fiy17uCB497gBq1qA5Bf8okr4l5aueW7b3dvjJYgrJnEa2BTedOrwz6edH9B85dz2bU17nlA=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Zabo',
        style: 'w-[100px] h-auto mb-2 hidden sm:flex  flex-col items-center justify-center hover:bg-gray-900 hover:shadow-md shadow-red-600 p-2 rounded-lg',
    },
    {
        id: 7,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOluCgbT5gNZVdEZduyc-SM2yhCoKP0dsK_jpuGFMPcFpOWfcY42Z7g4r_gU-JeTh3NW4LbVy_mI5vF3CLotjslNg3VEdbknmjDrMD0FpAGaggT_MYXWoYvAWPwcrqwLSzid9bOMHEhji7aKJJo2ndZQA=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Tati',
        style: 'w-[100px] h-auto mb-2 hidden sm:flex  flex-col items-center justify-center hover:bg-gray-900 hover:shadow-md shadow-red-600 p-2 rounded-lg',
    },
    {
        id: 8,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMfHYC8LlYoTMLPwHduyieskkUQZoEVeTTDqn2kdkGG6bk0OMOtCSfUplAT5QPSNCyvb8DzA-r1NJWWJRJ6eMs-dwmrzPW0sNoNR_UA8q2r3tlLNiRVAgeno_tC54XghEomfpdpYWYP3HnVh1p5KzZE0A=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Hiroshi',
        style: 'w-[100px] h-auto mb-2 hidden md:flex  flex-col items-center justify-center hover:bg-gray-900 hover:shadow-md shadow-red-600 p-2 rounded-lg',
    },
    {
        id: 9,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOd6o5srqMXlAauxEyHK7wBp18nBHTLMhO1u-RILHUO30oX7JcZs3voKbC4pIB8GDW0d4o3JVL4BfGztedCLds6ADnUcqcx7DwmOqsnKWIg-93PVI5AprA76veapc48b0MtnTBLPqeELEkFsP_y2WpErQ=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'John River',
        style: 'w-[100px] h-auto mb-2 hidden lg:flex  flex-col items-center justify-center hover:bg-gray-900 hover:shadow-md shadow-red-600 p-2 rounded-lg',
    },
    {
        id: 10,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczODgS07hAJhkYtBQduC9sH34bW9aFd_ICrDqFYwIuIFnExpMfIgGmOFBddASN_cRMhjekotrjbnSP28WBfmAoESRWexZGpQIm-uKRyVhEzfxrIKjF7IpqJ_bmPyj4MPbSUKtibF1kkXny6Iry-Rx9wYzw=w617-h617-s-no-gm?authuser=0',
        name: '',
        artist: 'Michael Ethan',
        style: 'w-[100px] h-auto mb-2 hidden lg:flex  flex-col items-center justify-center hover:bg-gray-900 hover:shadow-md shadow-red-600 p-2 rounded-lg',
    },
]
