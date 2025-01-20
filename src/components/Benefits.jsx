import mustcopo from "../assets/must-cups.jpeg"
import coinhand from "../assets/coin-hand.svg"
import delivery from "../assets/delivery.svg"
import globe from "../assets/globe.svg"
import message from "../assets/message.svg"
import useFadeIn from '../hooks/useFadeIn';

export default function Benefits() {

    const { ref: refH2, inView: inViewH2 } = useFadeIn();
    const { ref: refP, inView: inViewP } = useFadeIn();
    const { ref: refImage, inView: inViewImage } = useFadeIn();
    const { ref: refText, inView: inViewText } = useFadeIn();
    const { ref: refBox, inView: inViewBox } = useFadeIn();

    const benefits = [
        {
            icon: coinhand,
            title: "Modelo de Negócio Lucrativo e Estruturado",
            description:
                "Oferecemos um plano de negócios sólido, baseado em análises de mercado e uma operação eficiente, garantindo alta rentabilidade para nossos franqueados.",
        },
        {
            icon: message,
            title: "Treinamento e Suporte Contínuo",
            description:
                "Desde a escolha do ponto até o dia a dia da operação, você terá acesso a treinamentos completos e a uma equipe de suporte pronta para auxiliar em cada etapa.",
        },
        {
            icon: delivery,
            title: "Fornecedores Confiáveis e Sustentáveis",
            description:
                "Trabalhamos com parceiros comprometidos em oferecer ingredientes de qualidade e práticas sustentáveis, otimizando custos e garantindo a excelência dos produtos.",
        },
        {
            icon: globe,
            title: "Exclusividade Territorial",
            description:
                "Garanta exclusividade para operar em uma área, maximizando seu alcance e reduzindo a concorrência interna.",
        },
    ];

    return (             
        <div className="benefits padding-top" id="benefits">
            <div className={`container column`}>
                <h2 className={`${inViewH2 ? 'fade-in-down' : ''}`} ref={refH2}>
                    Por que se tornar um franqueado Must?
                </h2>
                <p className={`${inViewP ? 'fade-in-down' : ''} width-600`} ref={refP}>
                    Confira os benefícios de se tornar um franqueado e aproveite as vantagens de uma marca em constante crescimento e com grande potencial de sucesso.            
                </p>
            </div>
            <div className="container mobile">
                <img
                    className={`${inViewImage ? 'fade-in-down' : ''} must-cups`}
                    src={mustcopo}
                    alt="Copos de papel Must empilhados"
                    ref={refImage}
                />
                <div className={`${inViewText ? 'fade-in-down' : ''} benefits-text`} ref={refText}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={`benefits-box`}>
                            <div className={`${inViewBox ? 'fade-in-down' : ''}`}>
                                <img
                                    className="benefits-svg"
                                    src={benefit.icon}
                                    alt={benefit.title}
                                />
                                <h3>{benefit.title}</h3>
                            </div>
                            <p className={`${inViewBox ? 'fade-in-down' : ''}`}>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
