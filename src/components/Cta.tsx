import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

const bgCrystal =
    "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133284/bg-crystal_e4qorm.jpg";

const contatos = [
    { nome: "WhatsApp", href: "#", icone: FaWhatsapp },
    { nome: "Instagram", href: "#", icone: FaInstagram },
    { nome: "E-mail", href: "#", icone: FaEnvelope },
];

export default function Cta() {
    return (
        <section
            id="contato"
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${bgCrystal})` }}
        >
            <div className="absolute inset-0 bg-primary/70" />
            <div className="absolute inset-0 bg-linear-to-l from-primary/55 via-primary/20 to-transparent" />
            <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-10 py-24 text-center text-white">
                <img src="/zafira-logo.png" alt="Zafira" className="h-16 w-auto" />
                <h2 className="mt-8 text-3xl font-medium md:text-4xl">Venha conhecer o Zafira.</h2>
                <p className="mt-4 text-base text-gray">Fale com nossa equipe comercial :</p>
                <ul className="mt-8 flex gap-5">
                    {contatos.map((contato) => (
                        <li key={contato.nome}>
                            <a
                                href={contato.href}
                                aria-label={contato.nome}
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-secondary"
                            >
                                <contato.icone />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
