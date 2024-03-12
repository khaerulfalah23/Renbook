import { FooterContent, FooterCopyRight } from '../molecules';

export function Footer() {
  return (
    <footer className="max-w-screen-2xl container mx-auto">
      <FooterContent />
      <hr />
      <FooterCopyRight />
    </footer>
  );
}
