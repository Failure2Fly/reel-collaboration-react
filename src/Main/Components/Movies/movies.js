import React from 'react';
import '../../css/movies.css';
import amazon from "../../../img/icons/amazon-prime-video_logo.png";
import google from "../../../img/icons/google-play-movies-tv_logo.png";
import itunes from "../../../img/icons/itunes_logo.png"; 
import vudu from "../../../img/icons/vudu_logo.png";

export default function movies() {
    return (<>
        <div className="embed-responsive video">
            <iframe width="420" height="240" src="https://player.vimeo.com/video/382295927" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>Aunteler</div>
            <div className="purchase" >Purchase
                <img className="social-purchase" src={amazon} alt="" />
                <img className="social-purchase" src={google} alt="" />
                <img className="social-purchase" src={itunes} alt="" />
                <img className="social-purchase" src={vudu} alt="" />
            </div>
        </div>
        <div className="embed-responsive video">
            <iframe width="420" height="240" src="https://www.youtube.com/embed/7b8rSTL432c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>Rentals</div>
            <div className="purchase" >Purchase
                <img className="social-purchase" src={amazon} alt="" />
                <img className="social-purchase" src={google} alt="" />
                <img className="social-purchase" src={itunes} alt="" />
                <img className="social-purchase" src={vudu} alt="" />
            </div>
        </div>
        <div className="embed-responsive video">
            <iframe width="420" height="240" src="https://www.youtube.com/embed/2Xab3OMatmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>Tangled Chords - Are We - Music Video</div>
            <div className="purchase" >Purchase
                <img className="social-purchase" src={amazon} alt="" />
                <img className="social-purchase" src={google} alt="" />
                <img className="social-purchase" src={itunes} alt="" />
                <img className="social-purchase" src={vudu} alt="" />
            </div>
        </div>
        </>
    )
}