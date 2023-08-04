import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="footer">
            <div className="upper-footer">
                <div className="useful-links">
                    <h1 className="footer-mini-h">Useful Links</h1>
                    <Link className="useful-links-inner" to="/">
                        <i class="fa-solid fa-square footer-icons"></i>
                        <span className="useful-links-inner-span">Home</span>
                    </Link>
                    <Link className="useful-links-inner" to="/events">
                        <i class="fa-solid fa-square footer-icons"></i>
                        <span className="useful-links-inner-span">Events</span>
                    </Link>
                    <Link className="useful-links-inner" to="/autobots">
                        <i class="fa-solid fa-square footer-icons"></i>
                        <span className="useful-links-inner-span">Autobots</span>
                    </Link>
                    <Link className="useful-links-inner" to="/register">
                        <i class="fa-solid fa-square footer-icons"></i>
                        <span className="useful-links-inner-span">Register</span>
                    </Link>
                </div>
                <div className="socialmedia-links">
                    <h1 className="footer-mini-h">Social Medias</h1>
                    <a className="socialmedia-links-inner" href="https://www.facebook.com/RAACOFFICIAL2022" target='_blank'>
                        <i class="fa-brands fa-facebook footer-icons footer-social-media-icons"></i>
                        <span className="socialmedia-links-inner-span">Facebook</span>
                    </a>
                    <a className="socialmedia-links-inner" href="https://instagram.com/raac_official_2022" target='_blank'>
                        <i class="fa-brands fa-instagram footer-icons footer-social-media-icons"></i>
                        <span className="socialmedia-links-inner-span">Instagram</span>
                    </a>
                    <a className="socialmedia-links-inner" href="https://www.youtube.com/@roboticsassociationofanand1573" target='_blank'>
                        <i class="fa-brands fa-youtube footer-icons footer-social-media-icons"></i>
                        <span className="socialmedia-links-inner-span">Youtube</span>
                    </a>
                </div>
                <div className="footer-description">
                    <h1 className="footer-mini-h">Reach Us</h1>
                    <a className="socialmedia-links-inner" href="https://www.google.com/maps/place/Ananda+College/@6.9248629,79.717949,12z/data=!4m
                    10!1m2!2m1!1sananda+college!3m6!1s0x3ae2590d00000001:0x608d35c5c354870f!8m2!3d6.9248629!4d79.8703843!15sCg5hbmFuZGEgY29sbGVnZZI
                    BDXB1YmxpY19zY2hvb2zgAQA!16zL20vMDdzajAx?entry=ttu" target='_blank'>
                        <i class="fa-solid fa-location-dot footer-icons footer-social-media-icons"></i>
                        <span className="socialmedia-links-inner-span">Ananda College, Maradana Rd, Colombo 10</span>
                    </a>
                    <a className="socialmedia-links-inner" href="mailto:anandacollegeroboticsassociation@gmail.com" target='_blank'>
                        <i class="fa-solid fa-envelope footer-icons footer-social-media-icons"></i>
                        <span className="socialmedia-links-inner-span">anandacollegeroboticsassociation@gmail.com</span>
                    </a>
                    <a className="socialmedia-links-inner" href="tel:0704635482" target='_blank'>
                        <i class="fa-solid fa-phone footer-icons footer-social-media-icons"></i>
                        <span className="socialmedia-links-inner-span">0704635482</span>
                    </a>
                </div>
            </div>
            <div className="footer-line-break"></div>
            <div className="below-footer">
                <p className="below-footer-p">Copyright 2022 &copy; RAAC</p>
            </div>
        </div>
    )
}