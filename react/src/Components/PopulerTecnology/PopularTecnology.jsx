import React from 'react'
import './PopolarTecnology.css'
import data_product from '../Assets/Popular_Tecnology'
import Item from '../Item/Item'

const PopularTecnology = () => {
  return (
    <section class="pt-3">
        <div class="container">
            <header>
                <h3 class="mb-md-3 mb-0">Fırsat Teknoloji</h3>
            </header>

            <div class="row">
                      {data_product.map((item, i) => {
                          return <Item 
                          key={i} 
                          id={item.id} 
                          name={item.name} 
                          image={item.image} 
                          new_price={item.new_price} 
                          old_price={item.old_price} />
                      })}        
              </div>
        </div>
    </section>
  )
}

export default PopularTecnology
