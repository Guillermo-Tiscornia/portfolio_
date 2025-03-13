import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const imagesList = [
    { 
        src: "/images/image1.jpg", 
        title: "Vivienda unifamiliar", 
        description: "Estudio de temperatura operativa en invierno",
        tags: ["Arquitectura", "Vivienda", "Simulación"] 
    },
    { 
        src: "/images/image2.jpg", 
        title: "Terminal Buquebus", 
        description: "Estudio de temperatura operativa en verano",
        tags: ["Transporte", "Clima", "Verano"] 
    },
    { 
        src: "/images/image3.jpg", 
        title: "Torres Udaondo y Libertador", 
        description: "Estudio de asoleamiento mínimo",
        tags: ["Urbanismo", "Edificios", "Sombra"] 
    },
];

// Función para mezclar el array de imágenes
const shuffleArray = (array) => {
  let shuffled = [...array]; // Crear copia del array original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Portfolio = () => {
  const [images, setImages] = useState(imagesList); // Inicializa con imágenes

  useEffect(() => {
    document.title = "Arq. Guillermo Tiscornia";
    setImages(shuffleArray(imagesList)); // Mezclar imágenes solo al cargar la página
  }, []);

  return (
    <div className="portfolio-wrapper">
      <header className="header">
        <div className="title-container">
          <h1 className="title">Arq. Guillermo Tiscornia</h1>
        </div>
      </header>
      <div className="content">
        <div className="gallery">
          {images.length > 0 ? (
            images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="image-card"
              >
                <h2 className="image-title">{image.title}</h2>
                <img src={image.src} alt={image.title} className="image" />
                <p className="image-description">{image.description}</p>
                <div className="tags">
                  {image.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <p className="loading">Cargando proyectos...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
