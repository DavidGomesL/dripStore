import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>Anterior</button>
      <img src={images[currentImageIndex]} alt={`Imagem ${currentImageIndex}`} />
      <button onClick={goToNextSlide}>Próximo</button>
    </div>
  );
};

export default Carousel;