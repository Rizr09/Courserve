import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Home Page</h1>
      <Button classes="bg-green-500 rounded-lg m-3">Test</Button>
    </main>
  );
}
