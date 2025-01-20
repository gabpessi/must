import logo from '../assets/must-logo.png';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';

export default function Footer() {
    const links1 = ["Sobre Nós", "Seja um Franqueado", "Localização das Unidades"];
    const links2 = ["E-mail: contato@must.com.br", "Telefone: (41) 3456-7890", "Endereço: Rua das Araucárias, 1234 - Curitiba, PR"];
    const links3 = [
        { name: "Instagram", icon: instagram, link: "https://instagram.com" },
        { name: "Facebook", icon: facebook, link: "https://facebook.com" },
        { name: "LinkedIn", icon: linkedin, link: "https://linkedin.com" }
    ];
    const links4 = ["Central de Ajuda", "Termos de Uso", "Política de Privacidade"];

    return (
        <div className="footer padding-top">
            <div className="container grid">
                <div>
                    <img className='logo-img' src={logo} alt="Logo" />
                    <p>Copyright © 2025 por Must, Inc. Todos os direitos reservados.</p>
                </div>
                
                {/* Links úteis */}
                <div>
                    <h4>Links úteis</h4>
                    {links1.map((link, index) => (
                        <p key={index}>{link}</p>
                    ))}
                </div>

                {/* Contato */}
                <div>
                    <h4>Contato</h4>
                    {links2.map((link, index) => (
                        <p key={index}>{link}</p>
                    ))}
                </div>

                {/* Redes Sociais */}
                <div>
                    <h4>Redes Sociais</h4>
                    {links3.map((link, index) => (
                        <a href={link.link} key={index} target="_blank" rel="noopener noreferrer">
                           <div className='social-item'> <img className="icon" src={link.icon} alt={link.name} />
                            {link.name} </div>
                        </a>
                    ))}
                </div>
                {/* Recursos */}
                <div>
                    <h4>Recursos</h4>
                    {links4.map((link, index) => (
                        <p key={index}>{link}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
