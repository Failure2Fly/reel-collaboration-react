import React from 'react';
import '../../css/post.css';

export default function PostSubmit({setPost}) {
    return(
        <div className="postSubmit">
            <textarea className="form-control" rows="3" name="PostDescription" onChange={e => setPost(e.target.value)}>
            </textarea>
            <button type="button" className="btn btn-primary btn-lg">POST</button>
        </div>
    )
}