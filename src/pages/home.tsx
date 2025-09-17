import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col bg-purple-600">
        <h1 className="text-4xl text-white font-shikhand justify-center flex">
          União Felina
        </h1>
        <h2 className="text-xl text-amber-50 font-shikhand justify-center flex">Salvando Vidinhas</h2>


      </main>

      <section className="flex justify-center bg-purple-800">
        <h1 className="text-4xl text-white font-shikhand">Quem Somos?</h1>
      </section>

      <section className="flex justify-center bg-purple-900">
        <h1 className="text-4xl text-white font-shikhand">Nossa História</h1>
      </section>
    </div>
  );
}
