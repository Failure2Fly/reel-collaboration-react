import React from 'react';
import '../../css/movies.css';
import amazon from "../../../img/icons/amazon-prime-video_logo.png";
import google from "../../../img/icons/google-play-movies-tv_logo.png";
import itunes from "../../../img/icons/itunes_logo.png"; 
import vudu from "../../../img/icons/vudu_logo.png";

export default function movies() {
    return (
        <div className="embed-responsive video">
            <iframe width="420" height="240" src="https://www.youtube.com/embed/KTpQUZkC0Z8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>Mr. Right</div>
            <div className="purchase" >Purchase
                <img className="social-purchase" src={amazon} alt="" />
                <img className="social-purchase" src={google} alt="" />
                <img className="social-purchase" src={itunes} alt="" />
                <img className="social-purchase" src={vudu} alt="" />
            </div>
        </div>
    )
}