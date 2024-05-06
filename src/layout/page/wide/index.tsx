import { ComponentChildrenProps } from "@/intefaces/children";

export default function WidePage(props: ComponentChildrenProps) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        {props.children}
      </main>
    </>
  );
}
