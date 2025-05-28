import React, { useState } from 'react';
import { electronicService } from '../../services/electronics/electronicsServices';

function Electronics() {
   let[electronicProducts ,setElectronicProducts ] = useState([]);

    const getElectronics = ()=>{
        electronicService().then((response)=>{
            console.log(response.data);
            setElectronicProducts(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }

  return (
    <div>Electronics
        <button onClick={getElectronics}>Click me to see electronic products</button>
        {
            electronicProducts.length>0 ? <div>
                {electronicProducts.map((element)=>{
                    return <div>
                        <img src="" alt="" />
                        <h2>{element.title}</h2>
                        <h3>{element.price}</h3>
                    </div>
                })}
            </div> : <h2>There's nothing to display</h2>

        }
    </div>
  )
}

export default Electronics