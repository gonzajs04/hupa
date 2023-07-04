import { useState,lazy,Suspense } from 'react';

import Header from './Components/Header'
import {generarKey} from './helpers/app.js';
const Categorias  = lazy(()=>import('./Components/Categorias')) //Lazy loading menu
const Sucursales  = lazy(()=>import('./Components/Sucursales')) //Lazy loading menu
const Nosotros = lazy(()=>import('./Components/Nosotros'))
const Opiniones = lazy(()=>import('./Components/Opiniones'))
const Socials = lazy(()=>import('./Components/Socials'))
const Trabaja = lazy(()=>import('./Components/Trabaja'))
const Footer = lazy(()=>import('./Components/Footer'))

import persona from './images/persona.jpg'
export default function App(){

    const[categorias, setCategorias] = useState(["Comida","Atencion","Servicios","Precios","Lugar","Comodidad","Otros"])

    const[dataPersonas,setDataPersonas] = useState([
        {id: generarKey(),categoria:categorias[0], nombre: "Jose",descripcion: "Muy rica comida, la verdad una de las mejores que probe en mi vida",estrellas: "sabroso", imgPersona:persona },
        {id: generarKey(),categoria:categorias[0],nombre: "Maria",descripcion: "Las mejores hamburgesas, y las papas, una joya, recomiendo 100%",estrellas: "Lo mejor",imgPersona: persona},
        {id: generarKey(),categoria:categorias[0],nombre: "Gonzalo",descripcion: "La carne, el pan, las papas, todo, es una fiesta, impresionante y economico. Muy recomendado",estrellas: "Sorprendente",imgPersona: persona},
        {id: generarKey(),categoria:categorias[1],nombre: "Camila",descripcion: "La atencion es muy buena, excelente a decir verdad",estrellas: "Espectacular",imgPersona: persona},
        {id: generarKey(),categoria:categorias[0],nombre: "Gonzalo",descripcion: "La carne, el pan, las papas, todo, es una fiesta, impresionante y economico. Muy recomendado",estrellas: "Sorprendente",imgPersona: persona},
        {id: generarKey(),categoria:categorias[1],nombre: "Camila",descripcion: "La atencion es muy buena, excelente a decir verdad",estrellas: "Espectacular",imgPersona: persona},


    ]);

    const [isOpenList,setIsOpenList] = useState(false)
    //CONVERTIR WEBP CATEGORIAS IMAGENES: MENU_ADICIO,MENU_BURGUERS,MENU_PINTAS
    

return(
    <>
        <Header 
            isOpenList= {isOpenList}
             setIsOpenList= {setIsOpenList}


        />
        <Categorias/>
        <Sucursales/>
        <Nosotros/>
        <Opiniones
            dataPersonas= {dataPersonas}
        />
        <Socials/>

        <Trabaja/>

        <Footer/>


     
        
    </>
)


}