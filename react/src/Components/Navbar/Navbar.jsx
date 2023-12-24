import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './Navbar.css'



const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className=''>
      <header>
        {/* Top Bar */}
        <section class="top-bar">
        <div class="container">
            <div class="row gy-3 align-items-center">
                <div 
                class="col-lg-2 col-sm-4 col-4">
                  <Link style={{ textDecoration: 'none' }} to='/'>
                    <a 
                      href="index.html" 
                      class="navbar-brand">E-Commerce
                    </a>
                  </Link>
                </div>
                <div class="order-lg-last col-lg-5 col-sm-8 col-8">
                    <div class="text-end">
                      <Link to='/login'>
                        <a href="" class="btn btn-light">
                            <i class="fa fa-user"></i> <span class="ms-1 d-none d-sm-inline-block">Hesabım</span>
                        </a>
                      </Link>
                      <Link to='/likelist'>
                        <a href="" class="btn btn-light">
                            <i class="fa fa-heart"></i> <span class="ms-1 d-none d-sm-inline-block">Listem</span>
                        </a>
                      </Link>
                      <Link to='/cart'>
                        <a href="" class="btn btn-light">
                            <i class="fa fa-shopping-cart"></i> <span class="ms-1 d-none d-sm-inline-block">Sepetim</span>
                        </a>
                      </Link>
                    </div>
                </div>
                <div class="col-lg-5 col-12">
                    <form>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Anahtar Kelime"/>
                            <button class="btn btn-primary">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>

        {/* Nav Bar */}
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
            <div class="container">
                <button type="button" class="navbar-toggler border" data-bs-toggle="collapse" data-bs-target="#navbar_main">
                    <span class="navbar-toggler-icon"></span>
                </button> 

                <div   class="collapse navbar-collapse" id="navbar_main">
                    <ul class="navbar-nav">
                        <li onClick = {()=>{setMenu("Elektronik")}} class="nav-item">
                          <Link to='/Elektronik'>
                            <a href="" class={`nav-link ${menu === "Elektronik" ? "active" : ""}`}>Elektronik</a>
                          </Link>
                        </li>
                        <li onClick = {()=>{setMenu("Moda")}} class="nav-item">
                          <Link to='/Moda'>
                              <a href="" class={`nav-link ${menu === "Moda" ? "active" : ""}`}>Moda</a>
                          </Link>
                        </li>
                        <li onClick = {()=>{setMenu("Kozmetik")}} class="nav-item">
                          <Link to='/Kozmetik'>
                              <a href="" class={`nav-link ${menu === "Kozmetik" ? "active" : ""}`}>Kozmetik</a>
                          </Link>
                        </li>
                        <li onClick = {()=>{setMenu("Spor")}} class="nav-item">
                          <Link to='/Spor'>
                              <a href="" class={`nav-link ${menu === "Spor" ? "active" : ""}`}>Spor</a>
                          </Link>
                        </li>
                        <li onClick = {()=>{setMenu("Market")}} class="nav-item">
                          <Link to='/Market'>
                              <a href="" class={`nav-link ${menu === "Market" ? "active" : ""}`}>Market</a>
                          </Link>
                        </li>
                        <li onClick = {()=>{setMenu("Kitap")}} class="nav-item">
                          <Link to='/Kitap'>
                              <a href="" class={`nav-link ${menu === "Kitap" ? "active" : ""}`}>Kitap</a>
                          </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Diğer Kategoriler</a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link to='/d1'>
                                      <a href="" class="dropdown-item">1</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/d2'>
                                      <a href="" class="dropdown-item">2</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/d3'>
                                      <a href="" class="dropdown-item">3</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
