import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

function Feature() {
    // Define el número de teléfono con el prefijo internacional
    const phoneNumber = '34604100693'; // Asegúrate de reemplazar '1234567890' con tu número de teléfono real

    // Función para manejar el clic en el botón
    const handleContactClick = () => {
        const url = `whatsapp://send?phone=${phoneNumber}`;
        window.open(url, '');
    };

    return (
        <FeatureContainer>
            <h1>El amor puede esperar</h1>
            <p>El hambre no</p>
            <FeatureButton onClick={handleContactClick}>Contactanos</FeatureButton>
        </FeatureContainer>
    );
}

export default Feature;
