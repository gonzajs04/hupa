import { useState, lazy, Suspense } from 'react';

import Header from './Components/Header'
import { generarKey } from './helpers/app.js';
const Categorias = lazy(() => import('./Components/Categorias')) //Lazy loading menu
const Sucursales = lazy(() => import('./Components/Sucursales')) //Lazy loading menu
const DeliveryPath = lazy(() => import('./Components/DeliveryPath')) //Lazy loading menu
const Nosotros = lazy(() => import('./Components/Nosotros'))
const Opiniones = lazy(() => import('./Components/Opiniones'))
const Socials = lazy(() => import('./Components/Socials'))
const Trabaja = lazy(() => import('./Components/Trabaja'))
const Footer = lazy(() => import('./Components/Footer'))
const Pedidos = lazy(() => import('./Components/Pedidos'))
import DeliveryModal from './Components/DeliveryModal';

import persona from './images/persona.jpg'
import personaw from './images/compressed/personaw.webp'
export default function App() {
    const [categorias, setCategorias] = useState(["Comida", "Atencion", "Servicios", "Precios", "Lugar", "Comodidad", "Otros"])

    const [dataPersonas, setDataPersonas] = useState([
        { id: generarKey(), categoria: categorias[0], nombre: "Jose", descripcion: "Muy rica comida, la verdad una de las mejores que probe en mi vida", estrellas: "sabroso", imgPersona: persona,imgPersonaw: personaw },
        { id: generarKey(), categoria: categorias[0], nombre: "Maria", descripcion: "Las mejores hamburgesas, y las papas, una joya, recomiendo 100%", estrellas: "Lo mejor", imgPersona: persona,imgPersonaw: personaw },
        { id: generarKey(), categoria: categorias[0], nombre: "Gonzalo", descripcion: "La carne, el pan, las papas, todo, es una fiesta, impresionante y economico. Muy recomendado", estrellas: "Sorprendente", imgPersona: persona },
        { id: generarKey(), categoria: categorias[1], nombre: "Camila", descripcion: "La atencion es muy buena, excelente a decir verdad", estrellas: "Espectacular", imgPersona: persona,imgPersonaw: personaw },
        { id: generarKey(), categoria: categorias[0], nombre: "Gonzalo", descripcion: "La carne, el pan, las papas, todo, es una fiesta, impresionante y economico. Muy recomendado", estrellas: "Sorprendente", imgPersona: persona },
        { id: generarKey(), categoria: categorias[1], nombre: "Camila", descripcion: "La atencion es muy buena, excelente a decir verdad", estrellas: "Espectacular", imgPersona: persona,imgPersonaw: personaw },


    ]);
    const [modal, setModal] = useState(false)

    const [sucursales, setSucursales] = useState([

        { id:1,nombreSucursal: "Hupa Saavedra", sucursalWsp: "https://api.whatsapp.com/send?phone=541124825387", sucursalPYA: "https://www.pedidosya.com.ar/restaurantes/buenos-aires/hupa-saavedra-menu", sucursalRPPI: "" },

        {id:2, nombreSucursal: "Hupa Villa Del Parque", sucursalWsp: "https://api.whatsapp.com/send/?phone=%2B5491128079718&text&type=phone_number&app_absent=0", sucursalPYA: "https://www.pedidosya.com.ar/restaurantes/buenos-aires/hupa-saavedra-menu", sucursalRPPI: "" },

        { id:3,nombreSucursal: "Hupa Villa Crespo", sucursalWsp: "https://api.whatsapp.com/send?phone=541160043805", sucursalPYA: "", sucursalRPPI: "https://www.rappi.com.ar/restaurantes/136175-hupa-hamburguesas" },

        { id:4,nombreSucursal: "Hupa San Andrés", sucursalWsp: "https://api.whatsapp.com/send?phone=541127941281", sucursalPYA: "", sucursalRPPI: "" }




    ]);

    const [isOpenList, setIsOpenList] = useState(false)
    //CONVERTIR WEBP Imagenes restantes, desde 


    return (
        <>
            <Header
                isOpenList={isOpenList}
                setIsOpenList={setIsOpenList}


            />

            {modal && (
                <DeliveryModal
                    sucursales={sucursales}
                />
            )}

            <DeliveryPath
                
                setModal={setModal}
                modal={modal}
            />
            <Categorias />
            <Pedidos /> {/*CAMBIAR SECCION DE PEDIDOS QUEDA FEO*/}

            <Sucursales />

            <Nosotros />
            <Opiniones
                dataPersonas={dataPersonas}
            />

            <Socials />

            <Trabaja />



            <Footer />




        </>
    )


}