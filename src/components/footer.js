/*eslint-disable*/
import React, { useRef } from 'react';
import './footer.css';

export default function Footer() {
    const footerRef = useRef(null)

    if (localStorage.getItem('wasDisabled') == 'true') {
    }

    return (
        <div className="footer" ref={footerRef}>
            <div className="footer-menu" >
                <div></div>
                <h2>About</h2>
                <img id="footer-close" onClick={() => {
                    footerRef.current.style.display = 'none';
                    localStorage.setItem('wasDisabled', 'true');
                }} alt="close" src="./close-red.png" />
            </div>
            asdasdasdasd
        </div>
    );

}
