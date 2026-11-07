import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Section from "./Section";
import SectionLead from "./SectionLead";
import Reveal from "./Reveal";
import { useInView } from "../hooks/useInView";

const VIDEO_ID = "R5352J_C3vo";
const THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

const embedSrc = (autoplay: boolean) => {
    const params = new URLSearchParams({
        rel: "0",
        modestbranding: "1",
        playsinline: "1",
    });
    if (autoplay) {
        params.set("autoplay", "1");
    }
    return `https://www.youtube.com/embed/${VIDEO_ID}?${params.toString()}`;
};

export default function Projeto() {
    const playerRef = useRef<HTMLDivElement>(null);
    const inView = useInView(playerRef, { once: true, threshold: 0.2, rootMargin: "0px 0px -4% 0px" });
    const [playing, setPlaying] = useState(false);

    return (
        <Section id="projeto" className="bg-primary text-white">
            <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-10 sm:pt-24 sm:pb-12">
                <SectionLead label="O PROJETO">
                    <h2 className="text-3xl leading-tight font-medium md:text-4xl">
                        Conheça o{" "}
                        <span className="font-allison text-5xl text-tertiary sm:text-6xl"> empreendimento</span>
                    </h2>
                </SectionLead>
            </div>

            <div
                className="pointer-events-none h-px w-full bg-linear-to-r from-transparent via-secondary/60 to-transparent"
                aria-hidden
            />

            <Reveal variant="scale">
                <div
                    ref={playerRef}
                    className="group relative w-full overflow-hidden bg-[#0a2444] aspect-video lg:aspect-21/9"
                >
                    {playing ? (
                        <iframe
                            className="absolute inset-0 h-full w-full border-0"
                            src={embedSrc(true)}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    ) : (
                        <>
                            <img
                                src={THUMB}
                                alt=""
                                className="absolute inset-0 h-full w-full scale-105 object-cover opacity-70 transition duration-700 group-hover:scale-100"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/30 to-primary/50" />
                            <button
                                type="button"
                                disabled={!inView}
                                onClick={() => setPlaying(true)}
                                className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-4 text-white/90 transition disabled:cursor-default"
                                aria-label="Reproduzir vídeo do projeto"
                            >
                                <span className="flex h-18 w-18 items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-lg shadow-black/30 backdrop-blur-md transition group-hover:border-secondary/50 group-hover:bg-secondary/20">
                                    <FaPlay className="ml-1 text-xl text-white" aria-hidden />
                                </span>
                                <p className="text-xs font-medium tracking-[0.35em] text-white/70 uppercase">
                                    {inView ? "Assistir com som" : "Vídeo do projeto"}
                                </p>
                            </button>
                        </>
                    )}
                    <div
                        className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-black/20"
                        aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>
            </Reveal>

            <div className="h-16 sm:h-24" aria-hidden />
        </Section>
    );
}
