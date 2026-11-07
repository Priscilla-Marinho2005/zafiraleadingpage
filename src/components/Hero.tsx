import Reveal from "./Reveal";
import Section from "./Section";

const bgCrystal =
    "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,fl_progressive,w_1600/v1793133284/bg-crystal_e4qorm.jpg";
const torre =
    "https://res.cloudinary.com/dkgjwrjpv/image/upload/f_auto,q_auto,w_800/v1793133286/torre_mscx5r.webp";

export default function Hero() {
    return (
        <Section
            id="topo"
            eager
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgCrystal})` }}
        >
            <div className="absolute inset-0 bg-primary/60" />
            <div className="absolute inset-0 bg-linear-to-l from-primary/55 via-primary/20 to-transparent" />
            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-25 md:flex-row-reverse md:items-end">
                <div className="flex w-full max-w-lg flex-col items-center justify-end self-stretch pt-40 text-center text-white sm:pt-48 md:pt-0 md:pb-38">
                    <Reveal eager delay={80}>
                        <img src="/zafira-logo.png" alt="Zafira Edifício" className="h-20 w-auto" />
                    </Reveal>
                    <Reveal eager delay={180}>
                        <h1 className="mt-9 max-w-md text-xl font-medium leading-snug sm:text-2xl">
                            Apartamentos de 2 quartos com suíte e varanda gourmet,{" "}
                            <span className="font-bold">em Casa Amarela, Recife.</span>
                        </h1>
                    </Reveal>
                    <Reveal eager delay={280}>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
                            Pensado para você viver o melhor da vida, todos os dias.
                        </p>
                    </Reveal>
                </div>
                <Reveal
                    eager
                    variant="left"
                    delay={120}
                    className="mx-auto w-full max-w-[78%] shrink-0 md:mx-0 md:max-w-[46%]"
                >
                    <img
                        src={torre}
                        alt="Fachada do edifício Zafira, empreendimento da Romarco em Casa Amarela, Recife, comercializado pela Edu Imobiliária"
                        className="h-[55vh] w-auto max-w-full object-contain object-bottom md:h-[86vh]"
                        fetchPriority="high"
                        decoding="async"
                    />
                </Reveal>
            </div>
        </Section>
    );
}
