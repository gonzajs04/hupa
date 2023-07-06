import pdya from '../images/icons/pdya.webp'
import rappi from '../images/icons/rappi.png';
import wsp from '../images/icons/wsp.png';
import { useState, useEffect } from 'react';
export default function DeliveryModal({ sucursales }) {
    const [sucursalActual, setSucursalActual] = useState([])
    function handleModalUbicacion(e) {
            let nuevoSucursal = []
     
        if (e.target.value && Number(e.target.value!=0)) {

            nuevoSucursal = sucursales.filter(sucursal => {
                return sucursal && sucursal.id === Number(e.target.value); 
            })
            if (nuevoSucursal) {
                setSucursalActual(nuevoSucursal);
            }
            return;

        }
        setSucursalActual([])
        return;
    }

    return (
        <div className="modal">

            <div className="modal-data">

                <div className="modal-select">
                    <select className="sucursal-select" name="sucursales" id="sucuralses" onChange={handleModalUbicacion}>

                        <option value="">Seleccione su ubicación</option>

                        {sucursales.map(sucursal => (

                            <option key={sucursal.id} value={sucursal.id}>{sucursal.nombreSucursal}</option>


                        ))}

                    </select>
                </div>


                {sucursalActual.length > 0 && (

                    <div className='pedidos'>
                        {sucursalActual[0].sucursalPYA != '' && (
                            <div className="icon-text">

                                <div className="icon-entrega">
                                    <picture>
                                        <img src={pdya} alt="icono pdya" />
                                    </picture>
                                </div>
                                <a href={sucursalActual[0].sucursalPYA}>Pedidos Ya</a>

                            </div>

                        )}

                        {sucursalActual[0].sucursalRPPI != '' && (

                            <div className="icon-text">
                                <div className="icon-entrega">
                                    <picture>
                                        <img src={rappi} alt="icono pdya" />
                                    </picture>
                                </div>


                                <a href={sucursalActual[0].sucursalRPPI}>Rappi</a>


                            </div>

                        )}

                        {sucursalActual[0].sucursalWsp != '' && (


                            <div className="icon-text">
                                <div className="icon-entrega">
                                    <picture>
                                        <img src={wsp} alt="icono pdya" />
                                    </picture>
                                </div>
                                <a href={sucursalActual[0].sucursalWsp}>Whatsapp</a>

                            </div>


                        )}

                    </div>

                )}

            </div>

        </div>
    )
}