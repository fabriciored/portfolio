import { ComponentChildrenProps } from "@/intefaces/children";

export default function CenteredPage(props: ComponentChildrenProps) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {props.children}
      </main>
    </>
  );
}
