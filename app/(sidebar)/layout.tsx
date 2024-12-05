export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>
                <h1>HEADER</h1>
            </header>
                {children}
            <footer>
                <h1>FOOTER</h1>
            </footer>
        </>
    )
}