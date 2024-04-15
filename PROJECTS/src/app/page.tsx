import dynamic from "next/dynamic";

const DynamicHome = dynamic(
  () => import("@/components/Containers/Containers"),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <DynamicHome />
    </main>
  );
}
