import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div>
        <section class="pt-3">
            <div class="container">
                <header>
                    <h3 class="mb-md-3 mb-0">Bu Yılın Modası</h3>
                </header>

                <div class="row">
                        {new_collections.map((item, i) => {
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
    </div>
  )
}

export default NewCollections