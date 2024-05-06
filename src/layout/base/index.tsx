import Header from "@/components/header";
import { ComponentChildrenProps } from "@/intefaces/children";

export default function Layout(props: ComponentChildrenProps) {
  return (
    <>
    <Header/>
      {props.children}
      <footer className="p-5 flex justify-evenly bg-sky-700">
        <p>© 2024 - Fabrício Santos </p>
      </footer>
    </>
  );
}
