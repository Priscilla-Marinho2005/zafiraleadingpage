import { useEffect, useState } from "react";
import { getStoredConsent, loadGtm, setStoredConsent, type CookieConsent } from "../lib/gtm";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = getStoredConsent();
        if (stored === "accepted") {
            loadGtm();
            return;
        }
        if (stored === null) setVisible(true);
    }, []);

    const choose = (value: CookieConsent) => {
        setStoredConsent(value);
        if (value === "accepted") loadGtm();
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-live="polite"
            aria-label="Preferências de cookies"
            className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-primary/95 px-5 py-4 text-white shadow-[0_-8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-8"
        >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <p className="max-w-3xl text-xs leading-relaxed text-white/75 sm:text-sm">
                    Usamos cookies e tecnologias semelhantes para medir o desempenho deste site (Google
                    Tag Manager). Ao clicar em{" "}
                    <span className="text-white">Aceitar</span>, você concorda com esse uso. Consulte a
                    política de privacidade da Edu Imobiliária para mais informações.
                </p>
                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <button
                        type="button"
                        onClick={() => choose("rejected")}
                        className="rounded-full px-4 py-2 text-xs font-medium text-white/70 transition hover:text-white"
                    >
                        Recusar
                    </button>
                    <button
                        type="button"
                        onClick={() => choose("accepted")}
                        className="rounded-full bg-secondary px-5 py-2 text-xs font-medium text-primary transition hover:brightness-110"
                    >
                        Aceitar
                    </button>
                </div>
            </div>
        </div>
    );
}
