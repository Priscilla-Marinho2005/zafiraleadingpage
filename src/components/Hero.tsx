const bgCrystal =
    "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133284/bg-crystal_e4qorm.jpg";
const torre =
    "https://res.cloudinary.com/dkgjwrjpv/image/upload/v1793133286/torre_mscx5r.webp";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgCrystal})` }}
        >
            <div className="absolute inset-0 bg-primary/60" />
            <div className="absolute inset-0 bg-linear-to-l from-primary/55 via-primary/20 to-transparent" />
            <div id="topo" className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-6 px-5 pt-24 sm:px-10 md:flex-row-reverse md:items-end">
                <div className="w-full max-w-xl text-white md:translate-x-12 md:pb-28">
                    <p className="font-allison text-6xl leading-none text-tertiary sm:text-8xl">Valorize</p>
                    <h1 className="mt-2 text-3xl leading-tight sm:text-4xl md:text-5xl">
                        o que faz a vida
                        <br />
                        valer a pena
                    </h1>
                    <p className="mt-6 max-w-md text-base text-gray">
                        2 quartos com suíte em Casa Amarela, Recife. Um novo empreendimento Romarco.
                    </p>
                </div>
                <img
                    src={torre}
                    alt="Empreendimento Zafira"
                    className="h-[55vh] w-auto max-w-[78%] object-contain object-bottom md:h-[86vh] md:max-w-[46%]"
                />
            </div>
        </section>
    );
}
