import contactimg from '../assets/contact-img.png';
import useFadeIn from '../hooks/useFadeIn';

const Input = ({ label, type = "text", name, required = true }) => (
    <div className="input-field">
        <p>{label}</p>
        <input type={type} name={name} required={required} />
    </div>
);

const TextArea = ({ label, name, required = true }) => (
    <div className="textarea-field">
        <p>{label}</p>
        <textarea name={name} required={required} />
    </div>
);

export default function Contact() {
    // Definindo os refs para cada parte do conteúdo
    const { ref: refH2, inView: inViewH2 } = useFadeIn();
    const { ref: refP, inView: inViewP } = useFadeIn();
    const { ref: refImg, inView: inViewImg } = useFadeIn();
    const { ref: refForm, inView: inViewForm } = useFadeIn();

    return (
        <div className="contact padding-top" id='contact'>
            <div className="container">
                <div className="contact-box">
                    {/* Título e descrição com animação */}
                    <div className="contact-header">
                        <h2 className={`${inViewH2 ? 'fade-in-down' : ''}`} ref={refH2}>
                            Tem interesse em saber mais sobre como se tornar um franqueado Must? Estamos aqui para ajudar!
                        </h2>
                        <p className={`${inViewP ? 'fade-in-down' : ''}`} ref={refP}>
                            Nossa equipe está pronta para esclarecer todas as suas dúvidas e fornecer as informações necessárias para você dar o próximo passo.
                        </p>
                    </div>

                    {/* Imagem e formulário com animação */}
                    <div className="contact-img-txt mobile">
                        <div
                            className={`contact-image ${inViewImg ? 'fade-in-down' : ''}`}
                            ref={refImg}
                        >
                            <img src={contactimg} alt="Desenho de pessoa falando no megafone" />
                        </div>

                        <form
                            className={`contact-info ${inViewForm ? 'fade-in-down' : ''}`}
                            ref={refForm}
                        >
                            <div className="info">
                                <Input label="Nome" name="nome" />
                                <Input label="Sobrenome" name="sobrenome" />
                                <Input label="Email" type="email" name="email" />
                                <Input label="Telefone" type="tel" name="telefone" />
                            </div>
                            <div className="message-area">
                                <TextArea label="Mensagem" name="mensagem" />
                                <button type="submit" className="btn btn-2">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
