import { Navbar } from '../organisms';

export function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
