import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
        
      <p>
        Ilmuwan yang luar biasa
      </p>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Gallery />
        </a>

      </div>
    </main>
  );
}
