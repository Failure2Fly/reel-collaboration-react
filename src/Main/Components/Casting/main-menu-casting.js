import React from 'react';

export default function MainCastingCards() {
    return (
        <div className="card mb-3 casting-card" >
            <div className="row g-0">
                <div className="col-md-4 casting-card-left">
                    <ul className="casting-card-bullets">
                        <li>Location</li>
                        <li>Age</li>
                        <li>Gender</li>
                        <li>Type</li>
                        <li>Paid</li>
                    </ul>
                </div>
                <div className="col-md-8 casting-card-right">
                    <div className="card-body ">
                        <h5 className="card-title casting-title">Card title</h5>
                        <p className="card-text casting-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices sem in eros ullamcorper, ac luctus lorem imperdiet. In luctus eros consectetur augue suscipit ultrices. Fusce risus nunc, ultricies nec turpis id, tristique scelerisque nunc. Cras at dolor non mi condimentum egestas. Donec aliquam lorem nulla, ac sagittis libero sagittis vitae. Donec sit amet tincidunt nibh. Sed at justo vel purus porta sodales venenatis vel justo. Praesent et nisl dolor. Vivamus pulvinar sollicitudin condimentum.</p>
                        <p className="card-text casting-post-date"><small className="text-muted">July 27, 2021</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}