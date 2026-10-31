const bgCrystal =
    "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,fl_progressive,w_1600/v1793133284/bg-crystal_e4qorm.jpg";
const torre =
    "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,w_800/v1793133286/torre_mscx5r.webp";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgCrystal})` }}
        >
            <div className="absolute inset-0 bg-primary/60" />
            <div className="absolute inset-0 bg-linear-to-l from-primary/55 via-primary/20 to-transparent" />
            <div id="topo" className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-25 md:flex-row-reverse md:items-end">
                <div className="flex w-full max-w-lg flex-col items-center justify-end self-stretch pt-40 text-center text-white sm:pt-48 md:pt-0 md:pb-38">
                    <img src="/zafira-logo.png" alt="Zafira" className="h-20 w-auto" />
                    <p className="mt-9 max-w-md text-xl font-medium leading-snug sm:text-2xl">
                        2 quartos com suíte e varanda gourmet,{" "}
                        <span className="font-bold">em Casa Amarela, Recife.</span>
                    </p>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
                        Pensado para você viver o melhor da vida, todos os dias.
                    </p>

                </div>
                <img
                    src={torre}
                    alt="Empreendimento Zafira"
                    className="h-[55vh] w-auto max-w-[78%] object-contain object-bottom md:h-[86vh] md:max-w-[46%]"
                    fetchPriority="high"
                    decoding="async"
                />
            </div>
        </section>
    );
}
