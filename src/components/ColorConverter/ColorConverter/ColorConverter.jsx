import React, { useState } from 'react';
import './ColorConventer.css';
// import PropTypes from 'prop-types'

function ColorConverter(props) {
    const [hexColor, setHexColor] = useState('');
    const [rgbColor, setRgbColor] = useState('');
    const [error, setError] = useState(false);
    const [containerStyle, setContainerStyle] = useState({ backgroundColor: '#fff' });

    const onSubmit = (e) => {
        e.preventDefault();
        if (isHexColorValid(hexColor)) {
            const rgb = hexToRgb(hexColor);
            setRgbColor(rgb);
            setContainerStyle({ backgroundColor: hexColor });
            setError(false);
        } else {
            setRgbColor('');
            setContainerStyle({ backgroundColor: 'red' });
            setError(true);
            setHexColor('#Hello!')
        }
    };

    const isHexColorValid = (hex) => {
        const regex = /^#[0-9A-Fa-f]{6}$/;
        return regex.test(hex);
    };

    const onValueChange = (e) => {
        setHexColor(e.target.value);
    };

    const hexToRgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `RGB(${r}, ${g}, ${b})`;
    };
    

    return (
        <div className="container" style={containerStyle}>
            <h2>Color Converter</h2>
            <form  className="ColorConventer-Form" onSubmit={onSubmit}>
                <input id="color" name="color" className="ColorConverter-Input" onChange={onValueChange} value={hexColor}/>
                <label className="ColorConverter-Label" htmlFor="color"> {error ? 'Error!' : rgbColor}</label>
            </form>
        </div>
    )
}

ColorConverter.propTypes = {}

export default ColorConverter
