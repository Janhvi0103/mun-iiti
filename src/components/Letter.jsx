import React, { useState } from 'react';
import imgscr from '../assets/about/scrolls.jpg';

const Letter = () => {
    const [isHovered, setIsHovered] = useState(false);

    const sectionStyle = { 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 0',
        display: 'flex',
        justifyContent: 'center'
    };

    const letterBoxStyle = {
        padding: '20px',
        width: '80%',
        maxWidth: '800px',
        border: isHovered ? '2px solid black' : '2px solid transparent',
        transition: 'border-color 0.3s ease',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        backgroundImage: `url(${imgscr})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 224, 189, 0.8)', // skin color as a fallback
        textAlign: 'left'
    };

    const h2Style = {
        textAlign: 'right'
    };

    const pStyle = {
        margin: '10px 0'
    };

    return (
        <section style={sectionStyle}>
            <div
                style={letterBoxStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h2 style={h2Style}>Letter from Secretary-General</h2>
                <p style={pStyle}>Dear Delegates, Esteemed Guests, and Friends of IITIMUN,</p>
                <p style={pStyle}>
                    It is my distinct honor and pleasure to welcome you to the eighth edition of the IITIMUN conference. Over the past seven years, IITIMUN has grown exponentially, setting new benchmarks in fostering diplomacy, debate, and global awareness among the youth. Each year, we have pushed the boundaries of what we can achieve together, and this year promises to be no different.
                </p>
                <p style={pStyle}>
                    Last year, we had the privilege of collaborating with the prestigious G20 and Y20 forums, further enhancing the scope and impact of our conference. We were also honored to host Mr. T. S. Tirumurti, who enriched our event with his invaluable insights and experiences. With over 270 delegates participating, IITIMUN 7.0 was a resounding success, a testament to the dedication and enthusiasm of our participants and organizers.
                </p>
                <p style={pStyle}>
                    As we embark on the journey of IITIMUN 8.0, we are inspired by the achievements of the past and driven by the promise of the future. Our goal this year is to surpass previous milestones, bringing together even more delegates from diverse backgrounds to engage in meaningful dialogue and collaborative problem-solving.
                </p>
                <p style={pStyle}>
                    IITIMUN 8.0 will continue to uphold the highest standards of debate and diplomacy, providing a platform for young minds to voice their ideas, challenge their perspectives, and develop the skills necessary to become the leaders of tomorrow. We are committed to creating an inclusive, dynamic, and intellectually stimulating environment where every participant can thrive.
                </p>
                <p style={pStyle}>
                    I invite you all to join us in this exciting endeavor, to contribute your unique perspectives, and to take part in shaping the discourse on global issues. Together, let us make IITIMUN 8.0 an unforgettable experience and a beacon of excellence in the Model United Nations community.
                </p>
                <p style={pStyle}>
                    Thank you for your continued support and participation.
                </p>
                <p style={pStyle}>
                    Warm regards,
                </p>
                <p style={pStyle}>
                    OHM KUMAR<br />
                    Secretary-General, IITIMUN'24
                </p>
            </div>
        </section>
    );
}

export default Letter;
