import Link from "next/link";

const links = [
  ["About", "/about"], ["Contact", "/contact"], ["Delivery", "/delivery"],
  ["Returns & refunds", "/returns"], ["Privacy", "/privacy"], ["Terms", "/terms"],
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-surface">
      <div className="container-page flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-lg font-bold text-brand">lumora</p>
          <p className="text-sm">Everyday finds, delivered.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-brand">{label}</Link>
          ))}
        </nav>
      </div>
      <p className="border-t border-slate-200 py-4 text-center text-xs">© {new Date().getFullYear()} Lumora. All rights reserved.</p>
    </footer>
  );
}
