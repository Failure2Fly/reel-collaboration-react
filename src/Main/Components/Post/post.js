import React, { useEffect } from 'react';
import '../../css/post.css';
import { firebaseAllPosts } from '../../firebase';
// import facebook from "../../../img/icons/facebook_logo.png";
// import twitter from "../../../img/icons/twitter_logo.png";
// import tumblr from "../../../img/icons/tumblr_logo.png";
// import pinterest from "../../../img/icons/pinterest_logo.png";
// import reddit from "../../../img/icons/reddit_logo.png";
// import whatsApp from "../../../img/icons/whatsapp_logo.png";

export default function Post({userUID, setPosts, posts}) {

    // const [like, setLike] = useState();
    // const [likeCount, setLikeCount] = useState();

    useEffect(() => {
        // console.log(userUID)
        firebaseAllPosts
        .on("value", (snapshot)=> {
            snapshot.forEach((snap) => {
                setPosts((posts) => [...posts, snap.val()])
            }) 
        })
    }, [setPosts])

    return (
        <>
        {posts.map(data => {
            console.log(data)
            return(
                <div className="posts">
                    <div className="post">
                        <div className="card text-center">
                        <div className="card-header">
                            <h5>{data.userName}</h5>
                            <h5>{data.timeSubmitted}</h5>
                        </div>
                        <div className="card-body">
                            {/* <h5 className="card-title">Special title treatment</h5> */}
                            <p className="card-text">{data.post}</p>
                        </div>
                        <div className="card-footer">
                            <div className="card-like">
                                <div className="post-heart">heart</div>
                                <div className="post-count">count</div>
                            </div>
                            <div className="card-social">
                                <button type="button" class="btn btn-secondary">Share</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
    )
}


// Previous possible post layout

/* <div className="middle-post">
    <div className="post-top">
        <div className="post-user">Anna Kendrick</div>
        <div className="post-date">12-15-2020</div>
    </div>
    <div className="post-middle">
        <p>Well, the fun thing about getting my Twitter briefly hacked is that people I hadn’t heard from in years reached out to let me know. So, I guess thank you to my hacker for a little anxiety, and for getting me back in touch with my high school friend James. Cheers.</p>
    </div>
    <div className="post-bottom">
        <div>count</div>
        <div>count</div>
    </div>
</div>   */