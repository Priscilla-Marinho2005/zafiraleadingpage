export default function Nav() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-stretch border-b border-white/10 bg-primary/40 shadow-sm backdrop-blur-xl">
            <div className="flex flex-1 items-center justify-between px-10">
                <img src="/zafira-logo.png" alt="logo Zafira" className="h-10 w-auto" />
                <ul className="flex gap-10 whitespace-nowrap text-sm text-white [text-shadow:0_1px_3px_rgba(9,28,62,0.95)]">
                    <li className="cursor-pointer hover:text-tertiary">O projeto</li>
                    <li className="cursor-pointer hover:text-tertiary">Localização</li>
                    <li className="cursor-pointer hover:text-tertiary">Lazer</li>
                    <li className="cursor-pointer hover:text-tertiary">Plantas</li>
                </ul>
            </div>
            <div className="flex w-70 items-center justify-center bg-secondary/80 backdrop-blur-xl [clip-path:polygon(4rem_0,100%_0,100%_100%,0_100%)]">
                <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-secondary cursor-pointer">
                    Contato
                </button>
            </div>
        </nav>
    )
}
