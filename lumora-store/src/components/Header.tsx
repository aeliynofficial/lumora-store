import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Lumora home" className="flex items-center">
          <Image src="/logo.svg" alt="Lumora" width={135} height={40} priority />
        </Link>
        <form action="/search" role="search" className="hidden flex-1 max-w-md sm:block">
          <label htmlFor="q" className="sr-only">Search products</label>
          <input
            id="q" name="q" type="search" placeholder="Search products"
            className="w-full rounded-xl border border-slate-200 bg-surface px-4 py-2 text-sm focus:border-brand focus:outline-none"
          />
        </form>
        <nav aria-label="Main" className="flex items-center gap-2 text-sm font-medium">
          <Link href="/products" className="rounded-lg px-3 py-2 hover:bg-surface">Shop</Link>
          <Link href="/cart" className="btn-primary !px-4 !py-2">Cart</Link>
        </nav>
      </div>
    </header>
  );
}
