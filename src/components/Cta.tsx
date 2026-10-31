import { FaWhatsapp } from "react-icons/fa";

const bgCrystal =
    "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,fl_progressive,w_1600/v1793133284/bg-crystal_e4qorm.jpg";

export default function Cta() {
    return (
        <section
            id="contato"
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${bgCrystal})` }}
        >
            <div className="absolute inset-0 bg-primary/70" />
            <div className="absolute inset-0 bg-linear-to-l from-primary/55 via-primary/20 to-transparent" />
            <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-16 text-center text-white sm:px-10 sm:py-24">
                <img src="/LOGO-EDU-IMOB-SEM-FUNDO.png" alt="Edu Imbobiliária" title="Edu Imbobiliária" className="h-40 w-auto" />
                <h2 className="text-3xl font-medium md:text-4xl">Venha conhecer o Zafira.</h2>
                <p className="mt-2 text-base text-gray">Fale com nossa equipe comercial da Edu Imobiliaria:</p>
                <a
                    href="https://wa.me/558187360578"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-secondary"
                >
                    <FaWhatsapp className="text-xl" aria-hidden />
                    81 8736-0578
                </a>
            </div>
        </section>
    );
}
