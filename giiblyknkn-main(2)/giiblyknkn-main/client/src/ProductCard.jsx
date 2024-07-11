import { useRecoilState } from 'recoil';
import './css/create.module.css';
import checked from './store/Checked';
import { SwitchComponent } from './SwitchButton';

import { useEffect, useState } from 'react';


const ProductCard = () => {
    const [checking, setChecked] = useRecoilState(checked);
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")


    useEffect(() => {

        setTitle(localStorage.getItem("title"))
        setDescription(localStorage.getItem("description"))
        document.cookie=`cookies=${localStorage.getItem("description")}`

    }, [])

    const containerStyles = {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        width: "22vw",
        height: "15vh",
        marginLeft: "2vw"
    };

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const cardStyles = {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
    };

    const imgStyles = {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
    };

    const cardBodyStyles = {
        padding: '1rem',
    };

    const titleStyles = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    };

    const textStyles = {
        marginBottom: '1rem',
    };

    const priceStyles = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    };

    const buttonStyles = {
        position: "relative",
        right: "2px",
        backgroundColor: '#1E40AF',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '9999px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'background-color 0.3s ease',
        boxShadow: "2px 2px black"
    };

    const buttonHoverStyles = {
        backgroundColor: '#1E3A8F',
    };

    return (
        <div id='card' style={containerStyles}>
            <div id='cardcontainer' style={gridStyles}>
                <div style={cardStyles}>
                    <img src="./default-cover-img.png" alt="chocolate cupcake" style={imgStyles} />
                    <div style={cardBodyStyles}>
                        <h5 style={titleStyles}>{title}</h5>
                        <p style={textStyles}>{description}</p>
                        <SwitchComponent />


                        <div style={{ display: "grid", columnGap: "12px", gridTemplateColumns: "auto auto", rowGap: "20px" }}>
                            <a href="/manually" style={buttonStyles} onMouseOver={(e) => e.target.style.backgroundColor = '#1E3A8F'} onMouseOut={(e) => e.target.style.backgroundColor = '#1E40AF'} > Add Manually </a>
                            <a href="/loader" style={buttonStyles} onMouseOver={(e) => e.target.style.backgroundColor = '#1E3A8F'} onMouseOut={(e) => e.target.style.backgroundColor = '#1E40AF'}> Add with AI </a>

                            <a href="/loader" style={buttonStyles} onMouseOver={(e) => e.target.style.backgroundColor = '#1E3A8F'} onMouseOut={(e) => e.target.style.backgroundColor = '#1E40AF'}> Host </a>
                            <a href="/host" style={buttonStyles} onMouseOver={(e) => e.target.style.backgroundColor = '#1E3A8F'} onMouseOut={(e) => e.target.style.backgroundColor = '#1E40AF'}> Manually </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default ProductCard;