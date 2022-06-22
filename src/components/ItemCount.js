import { useState, useEffect } from "react";
import '../components/itemCount.css';
import Swal from 'sweetalert2';



function ItemCount({stock}) {
    const [ num, setNum ] = useState(0);

    useEffect(() => {
        console.log('hola');
        if(num == stock -2){
            Swal.fire({
                title: 'Atencion!',
                text: 'Queda poco quedan mas ',
                icon: 'error',
                timer: 2000
              })
        }
    }, [num])

    const suma = () => {
        if(num < stock ){
            setNum(num + 1)
        }  
        else { 
            Swal.fire({
                title: 'Atencion!',
                text: 'No quedan mas ',
                icon: 'error',
                timer: 2000
              })
        }              
    }

    const resta = () => {
       
            if (num>0) {
                setNum(num - 1)

            }
        
    }
    const clear = () => {
        setNum(0)
    }
    const mostrar = () => {
        console.log ("CULO", num);
    }
    return (
     <div className="botones">
        <button onClick={suma}>+</button>
        <input  type="number" value={num}/>
        <button onClick={resta}>-</button>
        <button onClick={clear}>Borrar</button>
        <button onClick={clear}>Añadir</button>
        <button onClick={mostrar}> { num >0 ? `Añadir ` : `Selecciona la Cantidad` }</button>
        <p> {stock > 1 ? ` ${ stock} unidades disponibles` : `${stock} unidad disponible`}</p>
       
     </div>   
    )
}
export default ItemCount;