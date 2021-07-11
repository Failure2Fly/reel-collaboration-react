import React from 'react';
import facebook from "../../../img/icons/facebook_logo.png";
import twitter from "../../../img/icons/twitter_logo.png";
import tumblr from "../../../img/icons/tumblr_logo.png";
import pinterest from "../../../img/icons/pinterest_logo.png";
import reddit from "../../../img/icons/reddit_logo.png";
import whatsApp from "../../../img/icons/whatsapp_logo.png";

export default function Post() {

    // const [like, setLike] = useState();
    // const [likeCount, setLikeCount] = useState();

    return (
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
        </div>
    )
}