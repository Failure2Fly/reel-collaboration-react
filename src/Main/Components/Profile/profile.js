import React from 'react'
import '../../css/profile.css';

export default function Profile({name}){

    return (
        <div className="container-fluid profile-page">
            <div className="row">
                <div className="col-md-9 col-left">
                    <div className="videos">
                        <div class="embed-responsive">
                            <iframe width="420" height="240" src="https://www.youtube.com/embed/HcwX2TnsTPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div>Silversun Pickups</div>
                            <div>Purchase Info</div>
                        </div>
                        <div class="embed-responsive">
                            <iframe width="420" height="240" src="https://www.youtube.com/embed/yMuuc_pqx2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div>The Temper Trap</div>
                            <div>Purchase Info</div>
                        </div>
                        <div class="embed-responsive">
                            <iframe width="420" height="240" src="https://www.youtube.com/embed/TPhnOKmhbBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div>Modest Mouse</div>
                            <div>Purchase Info</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-right">
                    <div className="profile-pic">
                        <img src="../../../img/simpsons-profile.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}