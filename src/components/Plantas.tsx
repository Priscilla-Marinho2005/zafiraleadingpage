import { useEffect, useState } from "react";

const plantaGeral =
    "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793139673/Planta_geral_apartamentos_imagem_ilustrativa_mlj1i2.webp";

const terminacoes = [
    {
        nome: "Terminação 01",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133300/plantaTerminacao1_v9orp5.webp",
    },
    {
        nome: "Terminação 02",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133301/plantaTerminacao2_wv1sb0.webp",
    },
    {
        nome: "Terminação 03",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133300/plantaTerminacao3Zafira_szt53u.webp",
    },
    {
        nome: "Terminação 04",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133299/plantaTerminacao4Zafira_z2091l.webp",
    },
    {
        nome: "Terminação 05",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133299/plantaTerminacao5Zafira_l09fd2.webp",
    },
    {
        nome: "Terminação 06",
        src: "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133299/plantaTerminacao6Zafira_jeoqon.webp",
    },
];

type ImagemAmpliada = {
    src: string;
    alt: string;
};

export default function Plantas() {
    const [ampliada, setAmpliada] = useState<ImagemAmpliada | null>(null);

    function ampliarImagem(src: string, alt: string) {
        setAmpliada({ src, alt });
    }

    function fecharAmpliacao() {
        setAmpliada(null);
    }

    useEffect(() => {
        if (!ampliada) return;

        function aoTeclar(evento: KeyboardEvent) {
            if (evento.key === "Escape") fecharAmpliacao();
        }

        document.addEventListener("keydown", aoTeclar);
        const overflowAnterior = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", aoTeclar);
            document.body.style.overflow = overflowAnterior;
        };
    }, [ampliada]);

    return (
        <section id="plantas" className="bg-white py-16 text-primary sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-10">
                <p className="text-sm font-medium tracking-[0.28em] text-secondary">PLANTAS</p>
                <h2 className="mt-4 text-3xl leading-tight font-medium md:text-4xl">2 quartos · 1 suíte</h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-primary/80">
                    O seu espaço para viver novos momentos
                </p>

                <figure className="mt-14">
                    <button
                        type="button"
                        onClick={() => ampliarImagem(plantaGeral, "Planta geral dos apartamentos")}
                        className="block w-full cursor-zoom-in"
                        aria-label="Ampliar planta geral dos apartamentos"
                    >
                        <img
                            src={plantaGeral}
                            alt="Planta geral dos apartamentos"
                            className="w-full object-contain"
                        />
                    </button>
                    <figcaption className="mt-3 text-right text-xs text-primary/70 sm:text-sm">
                        Planta geral apartamentos — imagem ilustrativa
                    </figcaption>
                </figure>

                <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {terminacoes.map((planta) => (
                        <li key={planta.nome}>
                            <button
                                type="button"
                                onClick={() => ampliarImagem(planta.src, planta.nome)}
                                className="block w-full cursor-zoom-in"
                                aria-label={`Ampliar ${planta.nome}`}
                            >
                                <img src={planta.src} alt={planta.nome} className="w-full object-contain" />
                            </button>
                            <p className="mt-3 text-center text-sm font-medium tracking-wide">{planta.nome}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {ampliada && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
                    onClick={fecharAmpliacao}
                    role="dialog"
                    aria-modal="true"
                    aria-label={ampliada.alt}
                >
                    <button
                        type="button"
                        onClick={fecharAmpliacao}
                        className="absolute top-4 right-4 text-sm font-medium tracking-wide text-white"
                        aria-label="Fechar imagem ampliada"
                    >
                        Fechar
                    </button>
                    <img
                        src={ampliada.src}
                        alt={ampliada.alt}
                        className="max-h-[90vh] max-w-full object-contain"
                        onClick={(evento) => evento.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
