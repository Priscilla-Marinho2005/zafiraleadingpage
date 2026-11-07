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

            <Reveal variant="scale" className="mx-auto w-full max-w-5xl px-5 sm:max-w-6xl sm:px-10">
                <div
                    ref={playerRef}
                    className="group relative aspect-video w-full overflow-hidden rounded-lg bg-[#0a2444] shadow-xl shadow-black/25"
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
                                className="absolute inset-0 h-full w-full object-cover opacity-60"
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
                                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-lg shadow-black/30 backdrop-blur-md transition group-hover:border-secondary/50 group-hover:bg-secondary/20 sm:h-16 sm:w-16">
                                    <FaPlay className="ml-0.5 text-base text-white sm:text-lg" aria-hidden />
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

            <div className="h-10 sm:h-16" aria-hidden />
        </Section>
    );
}
