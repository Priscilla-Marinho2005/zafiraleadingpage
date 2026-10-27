const pool =
    "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793136279/pool-aerial_lxjhbn.jpg";

const destaques = [
    { valor: "90", titulo: "apartamentos" },
    { valor: "2", titulo: "quartos", detalhe: "sendo 1 suíte" },
    { valor: "90", titulo: "vagas", detalhe: "de estacionamento" },
    { valor: "3", titulo: "pavimentos", detalhe: "de áreas comuns e lazer" },
];

const plantas = [
    { nome: "Terminação 01 e 06", area: "53,84 m²" },
    { nome: "Terminação 02 e 05", area: "55,75 m²" },
    { nome: "Terminação 03", area: "51,42 m²" },
    { nome: "Terminação 04", area: "55,48 m²" },
];

export default function Projeto() {
    return (
        <section id="projeto" className="relative overflow-hidden bg-primary text-white">
            <div className="relative overflow-hidden bg-[#16345c] py-24">
            <div className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full bg-secondary/25 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-tertiary/15 blur-3xl" />
            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-10 md:grid-cols-2">
                <div>
                    <p className="text-sm font-medium tracking-[0.28em] text-secondary">O PROJETO</p>
                    <h2 className="mt-2 text-2xl leading-tight md:text-4xl">
                        Há <span className="text-secondary font-allison text-7xl">momentos</span>
                        <br />
                        em que a vida pede
                        uma nova escolha
                    </h2>
                    <div className="mt-5 space-y-3 text-base leading-relaxed text-white/80">
                        <p>
                            Um lugar que acompanhe novas conquistas, novos encontros, novos planos.
                        </p>
                        <p>
                            Um endereço para viver o presente com mais praticidade e olhar para o futuro
                            com tranquilidade.
                        </p>
                        <p>
                            Um novo empreendimento da Romarco, em <span className="font-semibold">Casa Amarela</span>, pensado para quem entende
                            que morar bem é encontrar o equilíbrio entre localização, conforto, lazer e
                            tudo aquilo que realmente importa.
                        </p>
                    </div>
                    <p className="mt-8 font-allison text-6xl leading-none text-secondary">
                        Um novo valor
                        <span className="-mt-5 ml-17 block font-outfit text-[1.7rem] leading-normal text-white">
                            para cada momento
                        </span>
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src={pool}
                        alt="Casal na piscina do empreendimento"
                        className="h-135 w-105 max-w-full object-cover shadow-xl [clip-path:polygon(50%_0%,100%_18%,100%_82%,50%_100%,0%_82%,0%_18%)]"
                    />
                </div>
            </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-10 py-24">
                <h3 className="text-3xl font-medium md:text-4xl">Um projeto pensado para a <span className="font-allison text-7xl text-tertiary">vida real</span></h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                    O Zafira reúne a praticidade que a rotina pede e os espaços que os momentos especiais merecem.
                </p>

                <ul className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                    {destaques.map((item) => (
                        <li key={item.titulo}>
                            <p className="text-5xl font-medium text-secondary">{item.valor}</p>
                            <p className="mt-1 text-lg">{item.titulo}</p>
                            {item.detalhe && <p className="text-sm text-white/70">{item.detalhe}</p>}
                        </li>
                    ))}
                </ul>

                <ul className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {plantas.map((planta) => (
                        <li key={planta.nome} className="border-t border-white/20 pt-4">
                            <p className="text-sm tracking-wide text-white/70">{planta.nome}</p>
                            <p className="mt-2 text-2xl font-medium">{planta.area}</p>
                            <p className="text-sm text-white/70">área privativa</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
