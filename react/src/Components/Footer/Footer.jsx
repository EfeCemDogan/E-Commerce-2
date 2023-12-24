import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer class="mt-5">
            <div class="footer">
                <div class="row footer-icons">
                    <ul>
                        <li>
                            <a title="twitter" href="#">
                            <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a title="instagram" href="#">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a title="facebook" href="#">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            
                <div class="row footer-links">
                    <ul>
                        <li>
                            <a title="Kariyer" href="#about-icon">Kariyer</a>
                        </li>
                        <li>
                            <a title="Projeler & Çalışmalar" href="#project__a">Projeler ve Çalışmalar</a>
                        </li>
                        <li>
                            <a title="Sosyal Medya" href="#social-details">Sosyal Medya</a>
                        </li>
                        <li>
                            <a title="Hakkında" href="/hakkinda">Hakkında</a>
                        </li>
                        <li>
                            <a title="İletişim" href="/iletisim">İletişim</a>
                        </li>
                    </ul>
                </div>
            
                <div class="row footer-text">
                    <p>Copyright © 2023 All rights reserved Designed By: EFE DOGAN</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
