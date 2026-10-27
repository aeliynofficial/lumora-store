import Link from "next/link";

const trust = [
  { title: "Fast delivery", text: "Order in under two minutes and we handle the rest." },
  { title: "Pay your way", text: "Cash on delivery now. Online payment coming soon." },
  { title: "We are here to help", text: "Questions about an order? Contact us any time." },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-soft/60 to-white">
        <div className="container-page py-16 text-center sm:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">Welcome to Lumora</p>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold sm:text-5xl">Everyday finds, delivered.</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg">
            A simple, trustworthy shop. Browse, add to cart and order in under two minutes.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/products" className="btn-primary">Shop now</Link>
            <Link href="/about" className="btn-outline">About us</Link>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <h2 className="mb-6 text-2xl font-semibold">Featured products</h2>
        <div className="rounded-2xl border border-dashed border-slate-300 bg-surface p-10 text-center">
          <p className="font-medium text-ink">Products are coming soon.</p>
          <p className="mt-1 text-sm">The product list will appear here once the database and products are added.</p>
        </div>
      </section>

      <section className="container-page pb-4">
        <ul className="grid gap-4 sm:grid-cols-3">
          {trust.map((t) => (
            <li key={t.title} className="rounded-2xl border border-slate-200 p-6">
              <span className="mb-3 block h-1.5 w-8 rounded bg-accent" aria-hidden />
              <h3 className="font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm">{t.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
