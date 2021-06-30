import React from 'react';
import '../../css/profile.css';

export default function Profile({loggedIn}){

    if(loggedIn){
        return (       
            <div className="container-fluid profile-page">
                <div className="row">
                    <div className="col-md-9 col-left">
                        <div className="videos">
                            <div class="embed-responsive">
                                <iframe width="420" height="240" src="https://www.youtube.com/embed/KTpQUZkC0Z8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div>Mr. Right</div>
                                <div>Purchase Info</div>
                            </div>
                            <div class="embed-responsive">
                                <iframe width="420" height="240" src="https://www.youtube.com/embed/cmSbXsFE3l8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div>Pitch Perfect</div>
                                <div>Purchase Info</div>
                            </div>
                            <div class="embed-responsive">
                                <iframe width="420" height="240" src="https://www.youtube.com/embed/vEDyFvKFcoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div>Modest Mouse</div>
                                <div className="purchase" >Purchase
                                    <img src="../../../img/icons/amazon-prime-video_logo.png" alt="" />
                                    <img src="../../../img/icons/google-play-movies-tv_logo.png" alt="" />
                                    <img src="../../../img/icons/itunes_logo.png" alt="" />
                                    <img src="../../../img/icons/vudu_logo.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="content-border">

                        </div>
                        <div className="posts">
                            <div className="post">

                            </div>
                            <div className="post">

                            </div>
                            <div className="post">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-right">
                        <div className="profile-top">
                            {/* <img src="/src/img/simpsons-profile.jpg" alt="" /> */}
                            <img className="profile-pic" src="https://cdn.filestackcontent.com/vxZqhajcTPWNBMjFFOUj" alt=""/>
                            <h2>Anna Kendrick</h2>
                        </div>
                        <div className="content-border">

                        </div>
                        <div className="profile-fav-movies profile-info">
                            <h5>FAVORITE MOVIES</h5>
                            <p>Pitch Perfect, Into The Woods, Trolls, Noelle</p>
                        </div>
                        <div className="profile-positions profile-info">
                            <h5>POSITIONS</h5>
                            <p>Actress, Singer</p>
                        </div>
                        <div className="profile-bio profile-info">
                            <h5>BIO</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return null
    }
}