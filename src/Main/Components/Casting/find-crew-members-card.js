import React from 'react'

export default function CrewMembersCard() {
    return (
        <div className="card crew-members-card">
            <img src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.18169-9/13076696_1498675416825327_176923072612498417_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=h3sBwmRwj1kAX-4pWg1&_nc_ht=scontent.fphx1-2.fna&oh=c948b61e5165ebb9ac05137944c11c65&oe=6125D925" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}