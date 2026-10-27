import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const fotos = [
    {
        titulo: "Piscinas adulto e infantil com deck",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133307/piscinaZafira_vns6vc.webp",
    },
    {
        titulo: "Coworking",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133306/coworkingZafira_eqk3nx.webp",
    },
    {
        titulo: "Salão de festas",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133306/salaoDeFestasZafira_meobje.webp",
    },
    {
        titulo: "Sala fit dance",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133305/salaFitDanceZafira_uinogd.webp",
    },
    {
        titulo: "Espaço fitness",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133305/salaFitnessZafira_fwfofh.webp",
    },
    {
        titulo: "Sala de jogos",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133303/salaDeJogosZafira_ujtvdq.webp",
    },
    {
        titulo: "Pet place",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133303/petPLaceZafira_ybgghg.webp",
    },
    {
        titulo: "Espaço teen",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133302/espacoTeenZafira_rfcb13.webp",
    },
    {
        titulo: "Brinquedoteca",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133302/brinquedotecaZafira_ipkbsn.webp",
    },
    {
        titulo: "Playground",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133299/playgroundZafira_hnmjpl.webp",
    },
];

export default function Lazer() {
    const [ativo, setAtivo] = useState(0);
    const selecionado = fotos[ativo];

    function anterior() {
        setAtivo((indice) => (indice === 0 ? fotos.length - 1 : indice - 1));
    }

    function proxima() {
        setAtivo((indice) => (indice === fotos.length - 1 ? 0 : indice + 1));
    }

    return (
        <section id="lazer" className="bg-[#0b2a5b] py-16 text-white sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-10">
                <p className="text-sm font-medium tracking-[0.28em] text-secondary">LAZER</p>
                <h2 className="mt-4 max-w-3xl text-3xl leading-tight font-medium md:text-4xl">
                    Mais do que <span className="font-allison text-5xl text-tertiary sm:text-7xl">áreas comuns</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
                    Espaços pensados para todos: crianças, jovens, adultos, terceira idade e pets.
                </p>

                <div className="mx-auto mt-14 grid max-w-6xl gap-3 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
                    <figure className="relative min-h-80 overflow-hidden bg-[#16345c]">
                        <img
                            src={selecionado.src}
                            alt={selecionado.titulo}
                            className="h-full min-h-80 w-full object-cover"
                        />
                        <figcaption className="absolute bottom-4 left-0 max-w-[70%] bg-primary px-4 py-3 text-[0.65rem] leading-snug font-medium tracking-wide uppercase sm:max-w-[92%] sm:px-5 sm:text-xs sm:tracking-[0.14em]">
                            {selecionado.titulo}
                        </figcaption>
                        <button
                            type="button"
                            onClick={anterior}
                            aria-label="Foto anterior"
                            className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-primary md:hidden"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            type="button"
                            onClick={proxima}
                            aria-label="Próxima foto"
                            className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-primary md:hidden"
                        >
                            <FaChevronRight />
                        </button>
                    </figure>

                    <ul className="hidden grid-cols-2 gap-3 md:grid">
                        {fotos.map((foto, index) => (
                            <li key={foto.src}>
                                <button
                                    type="button"
                                    onClick={() => setAtivo(index)}
                                    aria-label={foto.titulo}
                                    className={`block h-24 w-full cursor-pointer overflow-hidden ${
                                        index === ativo ? "ring-2 ring-secondary" : ""
                                    }`}
                                >
                                    <img src={foto.src} alt="" className="h-full w-full object-cover" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
