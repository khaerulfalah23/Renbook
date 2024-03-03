import Link from 'next/link';

export function NavbarLink() {
  return (
    <>
      <li>
        <Link href="/" className="text-green">
          Home
        </Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <Link href="/menu">All</Link>
            </li>
            <li>
              <Link href="/menu">Salad</Link>
            </li>
            <li>
              <Link href="/menu">Pizza</Link>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <Link href="/">Online Order</Link>
            </li>
            <li>
              <Link href="/">Table Booking</Link>
            </li>
            <li>
              <Link href="/">Order Tracking</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/">Offers</Link>
      </li>
    </>
  );
}
