import React from "react";

function TextSection(){
    const ContainerStyle ={
        display: 'flex', 
        justifyContent: 'center', // Center horizontally
        alignItems: 'top', // Center vertically
        height: '100vh', // Full height of the viewport
        display: 'inline-block', // Makes the box wrap around the text
        padding: '40px 20px',
        marginTop: 0,
    };

    const textSectionStyle = {
        padding: '10px',
        // backgroundColor: '#f4f4f4', 
        textAlign: 'centre', 
        marginTop: '0vh', 
        textAlign: 'justify', 
        margin: '10', 
        maxWidth: '800px', 
        padding: '20px', 
        border: '2px solid #000',
        borderRadius: '15px', // Curved edges
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    };

    return (   
        <div style={ContainerStyle}>
            <div style={textSectionStyle}>
        <h2 style={{ fontWeight: 'bold', fontFamily: '  Arial, sans-serif', fontSize: '30px', paddingBottom: '10px' }}>Letter from the Secretery-General</h2>
            <p >
                Dear Delegates, respected Faculty Advisors, and the Secretariat,

I am pleased to announce the commencement of the eighth edition of the IIT Indore Model United Nations. Over the years, IIT Indore MUN has established itself as one of the most esteemed and influential MUN conferences in the country, and I am honored to lead this year's event.

The challenges brought by the COVID-19 pandemic momentarily dimmed the vibrant spirit of Model United Nations conferences worldwide, including our own. However, we have successfully transitioned from online platforms back to the offline format, regaining momentum and enthusiasm. With the upcoming conference, we aim to rekindle the lost excitement and energy, restoring the MUN experience in the heart of Indore.

Our journey back to in-person debates has been met with great success, as we achieved significant milestones, setting a new benchmark in our history. The presence of esteemed dignitaries and the unwavering commitment of our participants and organizers have solidified IIT Indore MUN's place as a premier platform for diplomacy and dialogue.

It is both a privilege and a tremendous responsibility to guide such a prestigious event, but with the collective wisdom of past Secretary-Generals and the relentless efforts of our dedicated Secretariat, I am confident that this edition will surpass all expectations.

I warmly invite you to join us for this special edition, where inspiring debates, innovative resolutions, and the collective aspiration to create a better world await.

Looking forward to seeing you all at the eighth edition of IIT Indore Model United Nations!
            </p>
<h4 style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '15px' }}>Yours sincerely,</h4>
<h3 style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '15px' }}>Ohm Kumar</h3>
<h3 style= {{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', fontSize: '15px' }}>Secretary-General, IIT Indore MUN 2025</h3>
            
        </div>
        </div>
         
    );

}
export default TextSection;