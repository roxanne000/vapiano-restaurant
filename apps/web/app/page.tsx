import Link from "next/link";
export default function Home(){
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">VAPIANO</Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/">Home</Link><Link href="/menu">Menu</Link><Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
        <div>
          <h1 className="text-6xl md:text-8xl font-black">VAPIANO</h1>
          <p className="text-yellow-400 tracking-[0.3em] mt-2">LOUNGE & RESTAURANT</p>
          <p className="mt-6 max-w-xl mx-auto text-white/60">Tema Premier Dining - 9 Road Leading to Spintex-Sakumono. Wood-fired pizzas, signature cocktails.</p>
          <p className="mt-8 text-white/40">+233 303 40 72 70 - Open Daily 11am-11pm</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/menu" className="bg-yellow-400 text-black px-8 py-3 font-bold">VIEW MENU</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
