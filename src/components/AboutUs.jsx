import mustloja from "../assets/must-loja.jpeg"
import useFadeIn from '../hooks/useFadeIn';

export default function AboutUs() {

    // Definindo os refs para cada parte do conteúdo
    const { ref: refH2, inView: inViewH2 } = useFadeIn();
    const { ref: refP1, inView: inViewP1 } = useFadeIn();
    const { ref: refP2, inView: inViewP2 } = useFadeIn();
    const { ref: refP3, inView: inViewP3 } = useFadeIn();
    const { ref: refImg, inView: inViewImg } = useFadeIn();

    return (
        <div className="about-us padding-top" id="aboutus">
            <div className="container gap mobile">
                <div className="about-us-text">
                    <h2 className={`${inViewH2 ? 'fade-in-down' : ''}`} ref={refH2}>Quem somos?</h2>
                    <p className={`${inViewP1 ? 'fade-in-down' : ''}`} ref={refP1}>
                        O Must nasceu em 2017, na cidade de Curitiba, Paraná, fruto do sonho de dois amigos apaixonados por gastronomia e pela ideia de criar um espaço onde as pessoas pudessem encontrar mais do que boa comida: um ambiente acolhedor, descontraído e marcante. 
                    </p>
                    <br />
                    <p className={`${inViewP2 ? 'fade-in-down' : ''}`} ref={refP2}>
                        Inspirados pela expressão inglesa "This is a must" – algo essencial e imperdível – eles decidiram que a marca não apenas entregaria refeições, mas experiências únicas.
                    </p>
                    <br />
                    <p className={`${inViewP3 ? 'fade-in-down' : ''}`} ref={refP3}>
                        Hoje, com mais de 50 unidades espalhadas pelo Brasil, o Must é referência no mercado gastronômico. De Norte a Sul, seguimos fiéis ao nosso propósito de oferecer um lugar onde as pessoas possam se conectar, se inspirar e, claro, saborear o melhor da vida. E o mais importante: continuamos com o mesmo espírito do início, sempre buscando inovar, surpreender e manter viva a paixão que deu origem a tudo isso.
                    </p>
                </div>
                <img
                    className={`loja-img ${inViewImg ? 'fade-in-down' : ''}`}
                    src={mustloja}
                    alt="Fachada da loja física Must"
                    ref={refImg}
                />
            </div>
        </div>
    );
}
