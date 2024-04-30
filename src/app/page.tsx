import Button from "@/components/Button";
import CourseCard from "@/components/CourseCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex justify-center items-center p-36 gap-24">
        <div className="relative">
          <Image
            src={"/home-page.png"}
            width={555}
            height={381}
            alt="Home Page Image"
          />
          <Image
            src={"/dots.svg"}
            width={128}
            height={128}
            alt="dots"
            className="absolute -top-[60px] -end-[60px] -z-10"
          />
          <Image
            src={"/dots.svg"}
            width={128}
            height={128}
            alt="dots"
            className="absolute -bottom-[60px] -start-[60px] -z-10"
          />
        </div>
        <div className="flex flex-col gap-8 max-w-md">
          <h1 className="font-extrabold text-5xl">
            DAPATKAN SKILL ANDA DI SINI!!!
          </h1>
          <p className="text-xl leading-10">
            Dengan Courserve Anda bisa mendapatkan lebih dari 10 keterampilan
            yang Anda inginkan dan bersiap untuk wawancara kerja berikutnya!
          </p>
          <Button className="text-xl leading-10 bg-[#536F3E] text-white rounded-[10px] w-[55%]">
            Dapatkan Kursus
          </Button>
        </div>
      </div>
      <div className="flex justify-center bg-gradient-to-b from-white to-[#E4E4E4] w-full p-36">
        <CourseCard />
      </div>
    </main>
  );
}
