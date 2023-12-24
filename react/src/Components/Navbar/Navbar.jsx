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
                        <li onClick = {()=>{setMenu("women")}} class="nav-item">
                          <Link to='/women'>
                              <a href="" class={`nav-link ${menu === "women" ? "active" : ""}`}>Kadın</a>
                          </Link>
                        </li>
                        <li onClick = {()=>{setMenu("men")}} class="nav-item">
                          <Link to='/men'>
                              <a href="" class={`nav-link ${menu === "men" ? "active" : ""}`}>Erkek</a>
                          </Link>
                        </li>
                        <li onClick = {()=>{setMenu("Kitap")}} class="nav-item">
                          <Link to='/kids'>
                              <a href="" class={`nav-link ${menu === "Kitap" ? "active" : ""}`}>Çocuk</a>
                          </Link>
                        </li>
                        <li onClick = {()=>{setMenu("phone")}} class="nav-item">
                          <Link to='/phone'>
                              <a href="" class={`nav-link ${menu === "phone" ? "active" : ""}`}>Telefon</a>
                          </Link>
                        </li>
                        <li onClick = {()=>{setMenu("watch")}} class="nav-item">
                          <Link to='/watch'>
                              <a href="" class={`nav-link ${menu === "watch" ? "active" : ""}`}>Saat</a>
                          </Link>
                        </li>
                        <li onClick = {()=>{setMenu("spor")}} class="nav-item">
                          <Link to='/sport'>
                              <a href="" class={`nav-link ${menu === "spor" ? "active" : ""}`}>Spor</a>
                          </Link>
                        </li>
                        <li onClick = {()=>{setMenu("market")}} class="nav-item">
                          <Link to='/market'>
                              <a href="" class={`nav-link ${menu === "market" ? "active" : ""}`}>Market</a>
                          </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Diğer Kategoriler</a>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link to='/cosmetic'>
                                      <a href="" class="dropdown-item">Kozmetik</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/accessory'>
                                      <a href="" class="dropdown-item">Aksesuar</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/books'>
                                      <a href="" class="dropdown-item">Kitap</a>
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
