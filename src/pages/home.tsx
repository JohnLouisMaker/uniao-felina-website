import Header from "../components/header";
import Timeline from "../components/linhaDoTempo";
import houseCat from "../assets/imgs/animal-shelter.png";
import food from "../assets/imgs/cat-food.png";
import smile from "../assets/imgs/smile.png";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col items-center bg-purple-600 py-10 text-center">
        <h1 className="text-5xl text-white font-shikhand mb-2">União Felina</h1>
        <h2 className="text-2xl text-amber-100 font-shikhand">
          Salvando Vidinhas
        </h2>
      </main>

      <section className="flex justify-center bg-purple-800 py-10">
        <h1 className="text-4xl text-white font-shikhand pb-2">Quem Somos?</h1>
      </section>

      <section className="bg-purple-900 py-12 flex items-center font-shikhand">
        <ul className="flex flex-col md:flex-row justify-around items-stretch w-full px-6 md:px-12 lg:px-20 gap-8 md:gap-0">
          <li className="flex flex-col items-center text-center w-full md:w-1/3 p-6 md:p-4">
            <h2 className="text-4xl text-white mb-3">Missão</h2>
            <p className="text-white leading-relaxed text-lg mb-6">
              Resgatar, cuidar e encontrar lares amorosos para animais em
              situação de risco, dando-lhes uma nova chance de serem felizes.
            </p>
            <img
              src={houseCat}
              alt="Casa Felina"
              className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 max-w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </li>

          <li className="flex flex-col items-center text-center w-full md:w-1/3 p-6 md:p-4 md:border-l md:border-r border-purple-700">
            <h2 className="text-4xl text-white mb-3">Visão</h2>
            <p className="text-white leading-relaxed text-lg mb-6">
              Sermos reconhecidos como uma força de transformação na comunidade,
              promovendo uma cultura de respeito e compaixão por todos os
              animais.
            </p>
            <img
              src={food}
              alt="Comida Felina"
              className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 max-w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </li>

          <li className="flex flex-col items-center text-center w-full md:w-1/3 p-6 md:p-4">
            <h2 className="text-4xl text-white mb-3">Valores</h2>
            <p className="text-white leading-relaxed text-lg mb-6">
              Amor incondicional, compromisso com a vida, transparência em
              nossas ações e o poder da comunidade.
            </p>
            <img
              src={smile}
              alt="Smile"
              className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 max-w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </li>
        </ul>
      </section>

      <Timeline />
    </div>
  );
}
