import React, { useState } from 'react';
import { electronicService } from '../../services/electronics/electronicsServices';
import Button from '../../button/Button';

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
    <div>
        <h1 className='text-lg'>Electronics</h1>
        <button type="button" onClick={getElectronics} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Electronics</button>
        <Button data="jewellery"/>
        <br />
        <Button data="Men's clothing"/>
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