import Count from "@/components/count/Count";

export default function Home() {
  return (
    <div className="flex   items-center justify-center bg-white font-sans ">
      <main className=" w-full max-w-3xl  py-32 px-16 bg-white  ">
        <h1 className="text-5xl text-black font-bold text-center">CSR AND SSR </h1>

        <Count/>
      </main>
    </div>
  );
}
