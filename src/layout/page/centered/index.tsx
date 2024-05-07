import { ComponentChildrenProps } from "@/intefaces/children";

export default function CenteredPage(props: ComponentChildrenProps) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center px-24 py-12 bg-zinc-900 bg-home bg-center bg-cover bg-fixed">
        {props.children}
      </main>
    </>
  );
}
