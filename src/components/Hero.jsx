import mockuphero from "../assets/mockup-hero2.webp"
import useFadeIn from '../hooks/useFadeIn';

export default function Hero() {

    const { ref, inView } = useFadeIn();

    return (
        <div className="hero" ref={ref}>
            <div className="container mobile">
                <div className={`hero-text ${inView ? 'fade-in-down' : ''}`}>
                    <h1 className="hero-title">This is a Must.</h1>
                    <p className="hero-p">
                        Transforme sua cidade com a essência do Must: um conceito moderno e indispensável que une sabor, praticidade e qualidade. Seja o responsável por levar uma experiência gastronômica única e se torne referência no mercado.
                    </p>
                    <div className="hero-buttons">
                        <a href="#benefits"><button className="btn btn-1">Benefícios</button></a>
                        <a href="#contact"> <button className="btn btn-2">Seja parceiro</button></a>
                    </div>
                </div>
                <img className={`hero-img ${inView ? 'fade-in-down' : ''}`} src={mockuphero} alt="Mulher segurando copo de café" />
            </div>
        </div>
    );
}
