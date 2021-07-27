import React from 'react';
import '../../css/casting-main.css';
import MainCastingCards from '../Casting/main-menu-casting';

export default function MainCasting() {
    return (
        <div className="casting-main-menu-page">
            <div className="casting-main-card-page">
                <MainCastingCards />
                <MainCastingCards />

                <MainCastingCards />
                <MainCastingCards />

                <MainCastingCards />
                <MainCastingCards />
            </div>
        </div>
    )
}