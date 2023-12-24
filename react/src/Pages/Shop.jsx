import React from 'react'
import HeaderCaroulse from '../Components/HeaderCarousel/HeaderCaroulse'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import PopularTecnology from '../Components/PopulerTecnology/PopularTecnology'

const Shop = () => {
  return (
    <div>
        <HeaderCaroulse/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <PopularTecnology/>
    </div>
  )
}


export default Shop