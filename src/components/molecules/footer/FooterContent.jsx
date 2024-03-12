import Link from 'next/link';
import Image from 'next/image';
import { dataFooter } from './dataFooter';

export function FooterContent() {
  return (
    <footer className="footer xl:px-24 py-10 px-4 text-base-content">
      <aside>
        <Image width={123} height={30} src="/Logo.svg" alt="logo" />
        <p className="my-3 md:w-40">
          Enjoy art where each book provides knowledge
        </p>
      </aside>
      {dataFooter.map((item) => (
        <nav key={item.id}>
          <header className="footer-title text-blue">{item.label}</header>
          {item.links.map((link) => (
            <Link key={link.id} href={link.link} className="link link-hover">
              {link.title}
            </Link>
          ))}
        </nav>
      ))}
    </footer>
  );
}
