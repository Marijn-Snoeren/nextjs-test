import Link from "next/link";

const Header = () => {
  return (
    <header class="grid">
      <h1>Next JS</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
