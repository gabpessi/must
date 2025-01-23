import React, { useState, useRef } from "react";
import pessoa1 from "../assets/pessoa1.webp";
import pessoa2 from "../assets/pessoa2.webp";
import pessoa3 from "../assets/pessoa3.webp";
import useFadeIn from "../hooks/useFadeIn";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0); // Guarda a posição inicial do toque
  const endX = useRef(0); // Guarda a posição final do toque

  const testimonials = [
    {
      id: 1,
      name: "Carlos Souza – Franqueado em Porto Alegre",
      imageUrl: pessoa1,
      text: '"O Must não é apenas uma franquia, é uma verdadeira experiência. O diferencial está no sabor e no ambiente acolhedor, que atraem e fidelizam os clientes. Além disso, a exclusividade territorial foi um grande diferencial para o nosso sucesso."',
    },
    {
      id: 2,
      name: "Maria Oliveira – Franqueada em Belo Horizonte",
      imageUrl: pessoa2,
      text: '"O modelo de negócios do Must é incrível! Desde o treinamento até o suporte diário, tudo é bem estruturado. O retorno financeiro superou nossas expectativas, e estamos animados com o crescimento da marca. Além disso, a equipe é sempre muito prestativa e comprometida em resolver qualquer dúvida."',
    },
    {
      id: 3,
      name: "Joana Silva – Franqueada em São Paulo",
      imageUrl: pessoa3,
      text: '"A parceria com o Must foi uma das melhores decisões de minha carreira. A marca tem um forte reconhecimento, e o suporte contínuo me ajudou a administrar a operação com confiança. Hoje, nossa unidade está entre as mais lucrativas da região."',
    },
  ];

  const { ref: refH2, inView: inViewH2 } = useFadeIn();
  const { ref: refP, inView: inViewP } = useFadeIn();

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX; // Pega a posição inicial do toque
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX; // Atualiza a posição durante o movimento
  };

  const handleTouchEnd = () => {
    const deltaX = endX.current - startX.current; // Calcula a diferença entre o início e o fim do toque

    if (deltaX > 50) {
      // Movimento para a direita (swipe para a esquerda)
      prevTestimonial();
    } else if (deltaX < -50) {
      // Movimento para a esquerda (swipe para a direita)
      nextTestimonial();
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="testimonials padding-top"
      id="testimonials"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container column">
        <div className="testimonials-header">
          <h2 className={inViewH2 ? "fade-in-down" : ""} ref={refH2}>
            O que os nossos parceiros dizem
          </h2>
          <p className={inViewP ? "fade-in-down" : ""} ref={refP}>
            Histórias reais de sucesso: veja como nossos franqueados estão
            transformando sonhos em resultados.
          </p>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-card prev">
            <img
              src={
                testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length]
                  .imageUrl
              }
              alt={
                testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length]
                  .name
              }
              className="testimonial-image"
            />
            <h4>
              {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].name}
            </h4>
            <p>
              {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].text}
            </p>
          </div>

          <div className="testimonial-card current">
            <img
              src={testimonials[currentIndex].imageUrl}
              alt={testimonials[currentIndex].name}
              className="testimonial-image"
            />
            <h4>{testimonials[currentIndex].name}</h4>
            <p>{testimonials[currentIndex].text}</p>
          </div>

          <div className="testimonial-card next">
            <img
              src={
                testimonials[(currentIndex + 1) % testimonials.length].imageUrl
              }
              alt={testimonials[(currentIndex + 1) % testimonials.length].name}
              className="testimonial-image"
            />
            <h4>{testimonials[(currentIndex + 1) % testimonials.length].name}</h4>
            <p>{testimonials[(currentIndex + 1) % testimonials.length].text}</p>
          </div>
        </div>

        <div className="slider-controls">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
