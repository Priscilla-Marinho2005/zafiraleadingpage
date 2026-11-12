import Reveal from "./Reveal";
import Section from "./Section";
import SectionLead from "./SectionLead";

const videoSrc = "https://www.youtube.com/embed/x1BZiSzRhug?si=ap9Q1DQKde4JRdl8";

export default function CondicoesPagamento() {
    return (
        <Section id="pagamento" className="bg-[#0b2a5b] py-16 text-white sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-10">
                <SectionLead label="CONDIÇÕES DE PAGAMENTO">
                    <h2 className="text-3xl leading-tight font-medium md:text-4xl">
                        Formas de pagar o seu Zafira
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                        Confira no vídeo as condições de pagamento do empreendimento.
                    </p>
                </SectionLead>

            </div>

            <Reveal variant="scale" className="mx-auto mt-14 w-full max-w-5xl px-5 sm:mt-16 sm:max-w-6xl sm:px-10">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#0a2444] shadow-xl shadow-black/25">
                    <iframe
                        className="absolute inset-0 h-full w-full border-0"
                        src={videoSrc}
                        title="Condições de pagamento do Zafira"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </Reveal>
        </Section>
    );
}
