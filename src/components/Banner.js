import React from "react";

export default function Banner({title,link,buttonText}){
    return(
        <div className="banner-section home-banner">
            <div className="inner-banner-section">
                <h1 className="inner-banner-section-title">{title} <span class="banner-special">RAAC</span></h1>
                <a href={link} className="inner-banner-section-button">{buttonText}</a>
            </div>
            <div className="inner-banner-section-image">
                <img src="/img/logo.png" className="inner-banner-section-image-img"/>
            </div>
        </div>
    )
}