import comet from "../assets/cometa.png"
import useFadeIn from '../hooks/useFadeIn';

export default function Metrics() {

    const { ref, inView } = useFadeIn();

    const metrics = [
        {
            number: "+50",
            description: "Filiais abertas pelo Brasil",
        },
        {
            number: "+400",
            description: "mil clientes atendidos",
        },
        {
            number: "+100",
            description: "parceiros satisfeitos",
        },
    ];

    return (
        <div className="metrics padding-top">
            <div className="metrics-container">
                <img
                    className="metrics-img"
                    src={comet}
                    alt="Cometa no fundo"
                />
                
                <div className={`metrics-text mobile ${inView ? 'fade-in-down' : ''}`} ref={ref}>
                    {metrics.map((metric, index) => (
                        <div key={index} className="metric-item">
                            <p className="metric-number">{metric.number}</p>
                            <p className="metric-description">
                                {metric.description}
                            </p>
                        </div>                
                    ))}
                </div>
            </div>
        </div>
    );
}
