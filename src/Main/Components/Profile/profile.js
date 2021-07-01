import React from 'react';
import '../../css/profile.css';
import amazon from "../../../img/icons/amazon-prime-video_logo.png";
import google from "../../../img/icons/google-play-movies-tv_logo.png";
import itunes from "../../../img/icons/itunes_logo.png"; 
import vudu from "../../../img/icons/vudu_logo.png";
import facebook from "../../../img/icons/facebook_logo.png";
import twitter from "../../../img/icons/twitter_logo.png";
import tumblr from "../../../img/icons/tumblr_logo.png";
import pinterest from "../../../img/icons/pinterest_logo.png";
import reddit from "../../../img/icons/reddit_logo.png";
import whatsApp from "../../../img/icons/whatsapp_logo.png";

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
                                <div className="purchase" >Purchase
                                    <img className="social-purchase" src={amazon} alt="" />
                                    <img className="social-purchase" src={google} alt="" />
                                    <img className="social-purchase" src={itunes} alt="" />
                                    <img className="social-purchase" src={vudu} alt="" />
                                </div>
                            </div>
                            <div class="embed-responsive">
                                <iframe width="420" height="240" src="https://www.youtube.com/embed/cmSbXsFE3l8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div>Pitch Perfect</div>
                                <div className="purchase" >Purchase
                                    <img className="social-purchase" src={amazon} alt="" />
                                    <img className="social-purchase" src={google} alt="" />
                                    <img className="social-purchase" src={itunes} alt="" />
                                    <img className="social-purchase" src={vudu} alt="" />
                                </div>
                            </div>
                            <div class="embed-responsive">
                                <iframe width="420" height="240" src="https://www.youtube.com/embed/vEDyFvKFcoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div>Modest Mouse</div>
                                <div className="purchase" >Purchase
                                    <img className="social-purchase" src={amazon} alt="" />
                                    <img className="social-purchase" src={google} alt="" />
                                    <img className="social-purchase" src={itunes} alt="" />
                                    <img className="social-purchase" src={vudu} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="content-border">

                        </div>
                        <div className="posts">
                            <div className="post">
                                <div className="left-side-post">
                                    <div className="like-top">
                                        <i class="bi bi-heart"></i>
                                    </div>
                                    <div className="like-bottom">
                                        <h5 className="like-amount">99+</h5>
                                    </div>
                                </div>
                                <div className="middle-post">
                                    <div className="middle-post-top">
                                        <div className="post-user">Anna Kendrick</div>
                                        <div className="post-date">12-15-2020</div>
                                    </div>
                                    <div className="middle-post-bottom">
                                        <p>Well, the fun thing about getting my Twitter briefly hacked is that people I hadn’t heard from in years reached out to let me know. So, I guess thank you to my hacker for a little anxiety, and for getting me back in touch with my high school friend James. Cheers.</p>
                                    </div>
                                </div>
                                <div className="right-side-post">
                                    <div className="social-left" >
                                        <div className="social-left-top" >
                                            <img className="social-image" src={facebook} alt=""/>
                                        </div>
                                        <div className="social-left-bottom">
                                            <img className="social-image" src={twitter} alt=""/>
                                        </div>
                                    </div>
                                    <div className="social-middle" >
                                        <div className="social-middle-top">
                                            <img className="social-image" src={tumblr} alt=""/>
                                        </div>
                                        <div className="social-middle-bottom">
                                            <img className="social-image" src={pinterest} alt=""/>
                                        </div>
                                    </div>
                                    <div className="social-right" >
                                        <div className="social-right-top">
                                            <img className="social-image" src={reddit} alt=""/>
                                        </div>
                                        <div className="social-right-bottom">
                                            <img className="social-image" src={whatsApp} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post">
                                <div className="left-side-post">
                                    <div className="like-top">
                                        <i class="bi bi-heart"></i>
                                    </div>
                                    <div className="like-bottom">
                                        <h5 className="like-amount">99+</h5>
                                    </div>
                                </div>
                                <div className="middle-post">
                                    <div className="middle-post-top">
                                        <div className="post-user">Anna Kendrick</div>
                                        <div className="post-date">12-15-2020</div>
                                    </div>
                                    <div className="middle-post-bottom">
                                        <p>Also shout out to the FIRST person to get me in touch with someone from Twitter before anyone else managed to do anything helpful. What a fucking legend.</p>
                                    </div>
                                </div>
                                <div className="right-side-post">
                                    <div className="social-left" >
                                        <div className="social-left-top" >
                                            <img className="social-image" src={facebook} alt=""/>
                                        </div>
                                        <div className="social-left-bottom">
                                            <img className="social-image" src={twitter} alt=""/>
                                        </div>
                                    </div>
                                    <div className="social-middle" >
                                        <div className="social-middle-top">
                                            <img className="social-image" src={tumblr} alt=""/>
                                        </div>
                                        <div className="social-middle-bottom">
                                            <img className="social-image" src={pinterest} alt=""/>
                                        </div>
                                    </div>
                                    <div className="social-right" >
                                        <div className="social-right-top">
                                            <img className="social-image" src={reddit} alt=""/>
                                        </div>
                                        <div className="social-right-bottom">
                                            <img className="social-image" src={whatsApp} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post">
                                <div className="left-side-post">
                                    <div className="like-top">
                                        <i class="bi bi-heart"></i>
                                    </div>
                                    <div className="like-bottom">
                                        <h5 className="like-amount">99+</h5>
                                    </div>
                                </div>
                                <div className="middle-post">
                                    <div className="middle-post-top">
                                        <div className="post-user">Anna Kendrick</div>
                                        <div className="post-date">12-1-2020</div>
                                    </div>
                                    <div className="middle-post-bottom">
                                        <p>Elliot Page’s words here are so beautiful and so eloquent, and he is reminding me that we can all be brave and joyful, even when things are scary. And this year especially, that reminder is such a GIFT. Sending them love/praise/gratitude/well-wishes etc etc etc etc Red heartRed heartRed heart</p>
                                    </div>
                                </div>
                                <div className="right-side-post">
                                    <div className="social-left" >
                                        <div className="social-left-top" >
                                            <img className="social-image" src={facebook} alt=""/>
                                        </div>
                                        <div className="social-left-bottom">
                                            <img className="social-image" src={twitter} alt=""/>
                                        </div>
                                    </div>
                                    <div className="social-middle" >
                                        <div className="social-middle-top">
                                            <img className="social-image" src={tumblr} alt=""/>
                                        </div>
                                        <div className="social-middle-bottom">
                                            <img className="social-image" src={pinterest} alt=""/>
                                        </div>
                                    </div>
                                    <div className="social-right" >
                                        <div className="social-right-top">
                                            <img className="social-image" src={reddit} alt=""/>
                                        </div>
                                        <div className="social-right-bottom">
                                            <img className="social-image" src={whatsApp} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post">
                                <div className="left-side-post">
                                    <div className="like-top">
                                        <i class="bi bi-heart"></i>
                                    </div>
                                    <div className="like-bottom">
                                        <h5 className="like-amount">99+</h5>
                                    </div>
                                </div>
                                <div className="middle-post">
                                    <div className="middle-post-top">
                                        <div className="post-user">Anna Kendrick</div>
                                        <div className="post-date">5-31-2020</div>
                                    </div>
                                    <div className="middle-post-bottom">
                                        <p>I don’t know enough to speak on a lot of this, but I know angsty suburban white boys. If you want to break shit to live out your teenage anarchist fantasy, do it on your own time. If you think you’re doing that shit to show how MUCH u care about black lives, ur deluding yourself.</p>
                                    </div>
                                </div>
                                <div className="right-side-post">
                                    <div className="social-left" >
                                        <div className="social-left-top" >
                                            <img className="social-image" src={facebook} alt=""/>
                                        </div>
                                        <div className="social-left-bottom">
                                            <img className="social-image" src={twitter} alt=""/>
                                        </div>
                                    </div>
                                    <div className="social-middle" >
                                        <div className="social-middle-top">
                                            <img className="social-image" src={tumblr} alt=""/>
                                        </div>
                                        <div className="social-middle-bottom">
                                            <img className="social-image" src={pinterest} alt=""/>
                                        </div>
                                    </div>
                                    <div className="social-right" >
                                        <div className="social-right-top">
                                            <img className="social-image" src={reddit} alt=""/>
                                        </div>
                                        <div className="social-right-bottom">
                                            <img className="social-image" src={whatsApp} alt=""/>
                                        </div>
                                    </div>
                                </div>
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