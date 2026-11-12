import Reveal from "./Reveal";

export default function Footer() {
    return (
        <footer className="bg-primary px-5 py-8 text-center text-xs leading-relaxed text-gray sm:px-10">
            <Reveal>
            <p className="mx-auto max-w-6xl">
                Zafira, empreendimento da Romarco na Rua Conselheiro Nabuco, nº 241, Casa Amarela, Recife/PE, CEP 52070-010. Comercialização: Imobiliária  Edu Imob, CRESCI: 23201-J, WhatsApp (81) 8736-0578.
            </p>
            <p className="mx-auto mt-3 max-w-6xl">
                Imagens meramente ilustrativas. As plantas podem sofrer alterações por necessidades técnicas ou exigência dos órgãos públicos. Mapa sem escala e meramente indicativo. Memorial de Incorporação: R-10-MAT.27.513 - Protocolo 58.697 - 11/05/2026 - 6º Ofício de Registro de Imóveis do Recife - PE.
            </p>
            </Reveal>
        </footer>
    );
}
