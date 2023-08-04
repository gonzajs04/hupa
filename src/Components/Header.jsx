import { useState,useEffect } from "react";

import Nav from './Nav'
import hupa_header from '../images/hupa_header.jpg'
// import Logo_hupaw from '../images/compressed/Logo_hupaw.webp'
// import Logo_hupa from '../images/Logo_hupa.png'



export default function Header({isOpenList,setIsOpenList}) {

    function handleList(){
         isOpenList ? setIsOpenList(false) : setIsOpenList(true);
         

    }

    return (
        <header className="header">
            <div className="containerg-header">

                <div className="container-list" onClick={handleList}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>

            <Nav
                isOpenList={isOpenList}
            />
                <div className="container-header">

                    <div className="container-header-txt">
                        
                        <h1>Hupa</h1>
                        <div className="header-separator"></div>
                        <p>Senti el sabor, gritá HUPA!🍔</p>
                    </div>


                </div> {/*TERMINA CONTAINER-HEADER */}

                

            </div>{/*TERMINA CONTAINERG-HEADER */}

            <div className="container-img-header">


                    <picture>

                        <img loading="lazy" src={hupa_header} alt="Logo hupa" />

                    </picture>

                </div>
        </header>



    )



}