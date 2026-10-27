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

export default function Plantas() {
    return (
        <section id="plantas" className="bg-white py-24 text-primary">
            <div className="mx-auto max-w-7xl px-10">
                <p className="text-sm font-medium tracking-[0.28em] text-secondary">PLANTAS</p>
                <h2 className="mt-4 text-3xl leading-tight font-medium md:text-4xl">2 quartos · 1 suíte</h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-primary/80">
                    O seu espaço para viver novos momentos
                </p>

                <figure className="mt-14">
                    <img
                        src={plantaGeral}
                        alt="Planta geral dos apartamentos"
                        className="w-full object-contain"
                    />
                    <figcaption className="mt-3 text-right text-sm text-primary/70">
                        Planta geral apartamentos — imagem ilustrativa
                    </figcaption>
                </figure>

                <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {terminacoes.map((planta) => (
                        <li key={planta.nome}>
                            <img src={planta.src} alt={planta.nome} className="w-full object-contain" />
                            <p className="mt-3 text-center text-sm font-medium tracking-wide">{planta.nome}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
