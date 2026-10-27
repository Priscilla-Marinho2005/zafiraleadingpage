const proximos = [
    {
        titulo: "Sítio da Trindade",
        texto: "Natureza, história e espaço para aproveitar a cidade.",
    },
    {
        titulo: "Educação",
        texto: "Colégios e instituições de ensino no entorno.",
    },
    {
        titulo: "Comércio & Serviços",
        texto: "Praticidade para resolver a rotina sem grandes deslocamentos.",
    },
    {
        titulo: "Gastronomia & Lazer",
        texto: "Opções para aproveitar Recife de diferentes maneiras.",
    },
];

const mapa =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.1048143231405!2d-34.9160703!3d-8.0299646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab19af39b35c65%3A0x6841aa260436c2aa!2sRua%20Conselheiro%20Nabuco%2C%20241%20-%20Casa%20Amarela%2C%20Recife%20-%20PE%2C%2052070-010!5e1!3m2!1spt-BR!2sbr!4v1793138196557!5m2!1spt-BR!2sbr";

export default function Localizacao() {
    return (
        <section id="localizacao" className="bg-white py-16 text-primary sm:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-10 md:grid-cols-2 md:gap-16">
                <div>
                    <p className="text-sm font-medium tracking-[0.28em] text-secondary">LOCALIZAÇÃO</p>
                    <h2 className="mt-4 text-3xl leading-tight font-medium md:text-4xl">
                        Mais perto do que faz parte da <span className="pl-2 font-allison text-5xl text-tertiary sm:text-7xl"> sua vida</span>
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-primary/80">
                        Viver no Zafira é estar em uma região que combina a dinâmica da Zona Norte com a
                        proximidade de áreas verdes, serviços, educação, gastronomia, comércio e
                        conveniências. E estar próximo ao Sítio da Trindade significa ter um dos espaços
                        verdes mais emblemáticos de Casa Amarela fazendo parte do entorno.
                    </p>

                    <p className="mt-10 text-sm font-medium tracking-[0.2em] text-secondary">PRÓXIMO DE</p>
                    <ul className="mt-5 grid grid-cols-2 gap-5">
                        {proximos.map((item) => (
                            <li key={item.titulo}>
                                <p className="font-medium">{item.titulo}</p>
                                <p className="text-sm leading-relaxed text-primary/70">{item.texto}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <iframe
                        title="Mapa do Zafira na Rua Conselheiro Nabuco"
                        src={mapa}
                        className="h-80 w-full rounded-2xl border-0 shadow-lg"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                    <p className="mt-4 text-sm text-primary/80">
                        Rua Conselheiro Nabuco, nº 241, Casa Amarela, Recife/PE.
                    </p>
                </div>
            </div>
        </section>
    );
}
