export const GTM_ID = "GTM-MXR7NV5G";

const CONSENT_KEY = "zafira-cookie-consent";

export type CookieConsent = "accepted" | "rejected";

declare global {
    interface Window {
        dataLayer?: unknown[];
    }
}

export function getStoredConsent(): CookieConsent | null {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "accepted" || value === "rejected") return value;
    return null;
}

export function setStoredConsent(value: CookieConsent) {
    localStorage.setItem(CONSENT_KEY, value);
}

export function loadGtm() {
    if (typeof window === "undefined") return;
    if (document.querySelector(`script[data-gtm="${GTM_ID}"]`)) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    script.dataset.gtm = GTM_ID;
    document.head.appendChild(script);

    const noscript = document.createElement("noscript");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    iframe.height = "0";
    iframe.width = "0";
    iframe.setAttribute("style", "display:none;visibility:hidden");
    noscript.appendChild(iframe);
    document.body.appendChild(noscript);
}

export function initGtmIfConsented() {
    if (getStoredConsent() === "accepted") loadGtm();
}
