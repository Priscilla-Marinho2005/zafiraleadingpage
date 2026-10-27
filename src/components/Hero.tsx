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
            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-6 px-10 pt-20 md:flex-row md:items-end md:justify-between">
                <img
                    src={torre}
                    alt="Empreendimento Zafira"
                    className="h-[52vh] w-auto max-w-[46%] object-contain object-bottom md:h-[86vh]"
                />
                <div className="w-full max-w-xl pb-16 text-white md:translate-x-12 md:pb-28">
                    <p className="font-allison text-8xl leading-none text-tertiary">Valorize</p>
                    <h1 className="mt-2 text-4xl leading-tight md:text-5xl">
                        o que faz a vida
                        <br />
                        valer a pena
                    </h1>
                    <p className="mt-6 max-w-md text-base text-gray">
                        2 quartos com suíte em Casa Amarela, Recife. Um novo empreendimento Romarco.
                    </p>
                </div>
            </div>
        </section>
    );
}
