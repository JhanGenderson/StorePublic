import React from 'react'
import Combo1 from '../assets/Combo1.jpg'
import Combo2 from '../assets/Combo2.jpg'
import Combo3 from '../assets/Combo3.jpg'
import Combo4 from '../assets/Combo4.jpg'
import CustomCaruosel from './CustomCaruosel'

export default function Header() {
    return (
        <header className="container mt-4 contenedor">
            <div className="head1">
                {/* <img src={Combo1} alt="Combo1" /> */}
                <CustomCaruosel/>
            </div>
            <div className="head2">
                <img src={Combo2} alt="Combo2" />
            </div>
            <div className="head3">
                <img src={Combo3} alt="Combo3" />
            </div>
            <div className="head4">
                <img src={Combo4} alt="Combo4" />
            </div>
        </header>
    )
}
