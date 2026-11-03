import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const whatsappHref = "https://wa.me/5581987360578";

const links = [
    { nome: "O projeto", href: "#projeto" },
    { nome: "Localização", href: "#localizacao" },
    { nome: "Lazer", href: "#lazer" },
    { nome: "Plantas", href: "#plantas" },
];

export default function Nav() {
    const [aberto, setAberto] = useState(false);

    function fechar() {
        setAberto(false);
    }

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-primary/40 shadow-sm backdrop-blur-xl">
            <div className="flex h-16 items-stretch">
                <div className="flex flex-1 items-center justify-between px-5 sm:px-10">
                    <a href="#topo">
                        <img src="/LOGO-EDU-IMOB-SEM-FUNDO.png" alt="Edu Imobiliária" className="h-20 w-auto sm:h-30" />
                    </a>
                    <ul className="hidden gap-8 text-sm whitespace-nowrap text-white [text-shadow:0_1px_3px_rgba(9,28,62,0.95)] lg:flex xl:gap-10">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-tertiary">
                                    {link.nome}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="cursor-pointer text-2xl text-white lg:hidden"
                        aria-expanded={aberto}
                        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
                        onClick={() => setAberto((valor) => !valor)}
                    >
                        {aberto ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <div className="hidden w-72 items-center justify-center bg-secondary/80 backdrop-blur-xl [clip-path:polygon(3rem_0,100%_0,100%_100%,0_100%)] lg:flex xl:w-80 xl:[clip-path:polygon(4rem_0,100%_0,100%_100%,0_100%)]">
                    <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium whitespace-nowrap text-secondary"
                    >
                        <FaWhatsapp className="text-lg" aria-hidden />
                        (81) 98736-0578
                    </a>
                </div>
            </div>
            {aberto && (
                <ul className="space-y-4 px-5 py-6 text-white lg:hidden">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="block text-base" onClick={fechar}>
                                {link.nome}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={fechar}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-medium text-secondary"
                        >
                            <FaWhatsapp className="text-lg" aria-hidden />
                            (81) 98736-0578
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
}
