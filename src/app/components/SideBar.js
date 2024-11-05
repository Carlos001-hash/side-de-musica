
import Image from "next/image";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCompass, faClock } from '@fortawesome/free-solid-svg-icons';

export default function SideBar() {
    return ( 

            <div className="w-auto h-full lx:w-60  bg-gray-950 rounded-tl-xl mr-1.5">
                <div className="h-20 flex items-center justify-center border-b border-gray-800 p-4">
                    <a className="w-9 xl:w-auto flex flex-row items-center gap-1" href="">
                        <Image 
                        className=""
                        src="https://lh3.googleusercontent.com/pw/AP1GczMZcvgm-adsZrHe5HoQAfNQ8C8xj3wc-VDAzwOrRbQXswvuZGq8td-pp5aH-sNhPWfFFT2OG8iefxt8vwTiqoHyCScTW2ixckoqIOSpcFU26aih9qd770IZCnGbPYK0IbhK8yYxdA6vkiNLg6ge5wjRSg=w394-h617-s-no-gm?authuser=0" 
                        width={47}
                        height={47}
                        alt="ddd" 
                        />
                        <h1 className="hidden xl:block text-red-500 font-bold text-xl leading-5">NotaForte</h1>
                    </a>
                    
                </div>
                <ul className="h-auto overflow-hidden flex flex-col">
                    <li className="group w-full h-16 hover:bg-gray-900 flex items-center">
                        <a href="" className=" size-full group-hover:text-red-500 flex items-center text-center text-4xl xl:text-2xl text-white p-4">
                            <FontAwesomeIcon icon={faHome} />
                            <h2 className="xl:ml-2 font-bold text-base hidden xl:block">Inicio</h2>
                        </a>
                    </li>
                    <li className="group w-full h-16 hover:bg-gray-900 flex items-center">
                        <a href="" className=" size-full group-hover:text-red-500 flex items-center text-center text-4xl xl:text-2xl text-white p-4">
                            <FontAwesomeIcon icon={faCompass} />
                            <h2 className="xl:ml-2 font-bold text-base hidden xl:block">Explorar</h2>
                        </a>
                    </li>
                    <li className="w-full h-auto xl:h-[300px]   flex flex-col items-start">
                        <a href="" className=" w-full h-16 hover:bg-gray-800 hover:text-red-500 flex items-center text-center text-4xl xl:text-2xl text-white p-4 shadow-xl">
                            <FontAwesomeIcon icon={faClock} />
                            <h2 className="xl:ml-2 font-bold text-base hidden xl:block">Histórico</h2>
                        </a>
                        <div className="hidden xl:block w-52  h-full border-gray-700 border overflow-y-scroll">
                            <div className="w-full h-full flex flex-col items-start bg-red-7000">
                                <a href="" className="hover:bg-gray-900 h-auto w-full flex items-center p-2 border-b-2 border-gray-950">
                                    <div className="bg-gray-300 w-12 h-12 rounded-xl overflow-hidden mr-2">
                                        <Image src="https://lh3.googleusercontent.com/pw/AP1GczPjrv_UWqeDNfCdewXBj8zq0W6i513KwGoVDNNnW2b8kj4RAG5YUfvzmRBpPz9hMEyFyPwWTuxDsWdg6RMIMYNHeENCmCso1M7ZcTp2TjFDU0_d_wf9GuUFiDKPggGkJIYSYAsGvP8LU8NQmeNA81kXrg=w617-h617-s-no-gm?authuser=0" 
                                        width={400} 
                                        height={41.188} 
                                        alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="  text-white text-base font-normal leading-6">
                                            <p className="text-sm ">Montagem 101%</p>
                                        </div>
                                        <div className=" font-normal leading-5 text-sm text-white ">
                                            <p className="text-xs">Zabo</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="hover:bg-gray-900 h-auto w-full flex items-center p-2 border-b-2 border-gray-950">
                                    <div className="bg-gray-300 w-12 h-12 rounded-xl overflow-hidden mr-2">
                                        <Image src="https://lh3.googleusercontent.com/pw/AP1GczMdiNvpxQeApLx_5XC1xVj3ssNcpjRGOKtcfpfTB4CbDeHr6RQmcR3Tmkc_VhoQQWSZucapweIy9b-qfrrEjSO85pntQ584PNkdN0w_TjjmkhDLGvGmcLglYeADCcDs1rg8oIRkDUVzUHMz9mrrbQRoqQ=w617-h617-s-no-gm?authuser=0" 
                                        width={400} 
                                        height={41.188} 
                                        alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div  className=" text-base text-white font-normal leading-6">
                                            <p className="text-sm ">Meia Noite</p>
                                        </div>
                                        <div  className=" font-normal leading-5 text-sm text-white ">
                                            <p className="text-xs">Foton</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="hover:bg-gray-900 h-auto w-full flex items-center p-2 border-b-2 border-gray-950">
                                    <div className="bg-gray-300 w-12 h-12 rounded-xl overflow-hidden mr-2">
                                        <Image src="https://lh3.googleusercontent.com/pw/AP1GczOiYNNlwWJGRzUwAnVJAWq_g7LfG299BDubjwOJGt19RGONiNEMZlsGHiXBYwFULjN7M1OJPLqk1i_smVUZMa8bBvlqJqk5q0yozfCluWWk1dNAwN0e9WzyMghK2Ru6rVDYTDSapiK95fFeVFiauKUpnA=w651-h651-s-no-gm?authuser=0" 
                                        width={400} 
                                        height={41.188} 
                                        alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" text-base text-white font-normal leading-6">
                                            <p className="text-sm ">MHS</p>
                                        </div>
                                        <div className=" font-normal leading-5 text-sm text-white ">
                                            <p className="text-xs">Zabo</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="hover:bg-gray-900 h-auto w-full flex items-center p-2 border-b-2 border-gray-950">
                                    <div className="bg-gray-300 w-12 h-12 rounded-xl overflow-hidden mr-2">
                                        <Image src="https://lh3.googleusercontent.com/pw/AP1GczNNI6rY-LdN_gRYqZrNWD1dGD_7ya2DTvJfNAfDwKwHGiSyU0Fij82LdoQnq-sKMxzTFC8uL1TQHwGJI6h9rXtzs453C-fJsKvRUPiTeNVHN2sbyxY-0jcYQr0K9PZA3te3GCz3CqOWXH40X0dwFH0n1g=w617-h617-s-no-gm?authuser=0" 
                                        width={400} 
                                        height={41.188} 
                                        alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" text-base text-white font-normal leading-6">
                                            <p className="text-sm ">Tocaia</p>
                                        </div>
                                        <div className=" font-normal leading-5 text-sm text-white ">
                                            <p className="text-xs">Foton</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="hover:bg-gray-900 h-auto w-full flex items-center p-2 border-b-2 border-gray-950">
                                    <div className="bg-gray-300 w-12 h-12 rounded-xl overflow-hidden mr-2">
                                        <Image src="https://lh3.googleusercontent.com/pw/AP1GczPQCbqpAMKMJADjNMTUc9_dFuRAEFuTEF9dKvAOJ-Gvk-mno8XkE0_l8If8gldcL7MKFaQTbUOO0cjAooSj0Ih-vD1onxE6CJOmbRm9YtjjuifNijh5nvp-dk9I0EIsNFfkvjl8xkYuM99hEjex_wbHSQ=w617-h617-s-no-gm?authuser=0" 
                                        width={400} 
                                        height={41.188} 
                                        alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" text-base text-white font-normal leading-6">
                                            <p className="text-sm ">Four Days</p>
                                        </div>
                                        <div className=" font-normal leading-5 text-sm text-white ">
                                            <p className="text-xs">John River</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="hover:bg-gray-900 h-auto w-full flex items-center p-2 border-b-2 border-gray-950">
                                    <div className="bg-gray-300 w-12 h-12 rounded-xl overflow-hidden mr-2">
                                        <Image src="https://lh3.googleusercontent.com/pw/AP1GczN7Kipr4dJH0m5ThwI8q9D1WCuG0tY7V2jfsdXIV0AwH3AO06g9knhoXBziP-5IhUr9KlAjLStDSxfk2p3gcl7c6N5Au0s_Q37U1jJdN8DP2gzdeC5Vjtwn4LXCr0Qn0imFASt_pYIVXMIMXCEV5lc88A=w617-h617-s-no-gm?authuser=0" 
                                        width={400} 
                                        height={41.188} 
                                        alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div  className=" text-base text-white font-normal leading-6">
                                            <p className="text-sm ">My Girl</p>
                                        </div>
                                        <div  className=" font-normal leading-5 text-sm text-white ">
                                            <p className="text-xs">Joe Tree</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="hover:bg-gray-900 h-auto w-full flex items-center p-2 border-b-2 border-gray-950">
                                    <div className="bg-gray-300 w-12 h-12 rounded-xl overflow-hidden mr-2">
                                        <Image src="https://lh3.googleusercontent.com/pw/AP1GczM1gNednh8BOKDIM_HriNqAUNyn45GUBhMOZczobndarRNQAdwmHaXQ-OV3mgwqsApAB7MlKgoPUIaqLiHiTiuQRFQHb4w1WOoREj84CYvKEjXjd9A4GfjIFHlkS67UKIb5XHmt0bx4GgA-8iNW_ZSOXQ=w511-h511-s-no-gm?authuser=0" 
                                        width={400} 
                                        height={41.188} 
                                        alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" text-base text-white font-normal leading-6">
                                            <p className="text-sm ">Shade Of The Bayou</p>
                                        </div>
                                        <div className=" font-normal leading-5 text-sm text-white ">
                                            <p className="text-xs">Dusty Brown</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="hover:bg-gray-900 h-auto w-full flex items-center p-2 border-b-2 border-gray-950">
                                    <div className="bg-gray-300 w-12 h-12 rounded-xl overflow-hidden mr-2">
                                        <Image src="https://lh3.googleusercontent.com/pw/AP1GczNkDFo7TBhbA54JJowNTBq75qAmC-1Tu8CmrjU4WKfr2P6u8O_DfNw1gjYKtBYvf_U0OD4hAXc1p5xQr4Fs-qdhtxokNFmmit_zdZ6814Rr8WzF0luhbgY6iMYAXJkgfPk5AncbmnlSFRYUzS-Vj_jL8A=w617-h617-s-no-gm?authuser=0" 
                                        width={400} 
                                        height={41.188} 
                                        alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className=" text-base text-white font-normal leading-6">
                                            <p className="text-sm ">New I</p>
                                        </div>
                                        <div className=" font-normal leading-5 text-sm text-white ">
                                            <p className="text-xs">R730</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
    );
}