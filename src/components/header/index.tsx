import NavButton from "@/components/header/button";


export default function Header() {
  return (
      <header className="h-14 flex justify-center bg-sky-600">
        <NavButton href="/" text="Home"/>
        <NavButton href="/portfolio" text="Portfolio"/>
        <NavButton href="/curriculum" text="Currículo"/>
      </header>
  );
}
