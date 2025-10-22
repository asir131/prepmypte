import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen  justify-center  font-sans dark:bg-black">
      <Hero />
    </div>
  );
}
