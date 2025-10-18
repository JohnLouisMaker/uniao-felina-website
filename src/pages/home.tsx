import Header from "../components/header";
import Timeline from "../components/linhaDoTempo";
import houseCat from "../assets/imgs/animal-shelter.png";
import food from "../assets/imgs/cat-food.png";
import smile from "../assets/imgs/smile.png";
import cat from "../assets/imgs/fotoCatHome.png";
import ImpactoDoTrabalho from "../components/impactDados";
import ComoAjudar from "../components/comoAjudar";

import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col lg:flex-row items-center lg:items-start bg-purple-600 py-10 text-center lg:text-left px-6 lg:px-20 ">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-2/3 gap-4">
          <h1 className="text-7xl text-white font-shikhand ">União Felina</h1>
          <h2 className="text-2xl text-amber-100 font-shikhand mb-6">
            Salvando Vidinhas
          </h2>

          <img
            src={cat}
            alt="Imagem de um gato"
            className="w-50 sm:w-60 md:w-64 lg:hidden  mb-4"
          />

          <p className="font-questrial text-white text-lg">
            Bem-vindo à União Felina!
            <br />
            Somos um grupo de voluntários movidos pelo amor e dedicados a
            proteger e cuidar dos gatos de rua da nossa região. Aqui em nosso
            site, convidamos você a conhecer a nossa história, entender nossa
            missão, visão e valores, e descobrir os impactos positivos que
            geramos na comunidade.
            <br />
            Quer fazer parte desta causa? Veja como ajudar e fique por dentro
            dos nossos próximos eventos. Junte-se a nós e faça a diferença na
            vida de um felino!
          </p>
        </div>

        {/* Imagem desktop: ao lado do texto */}
        <img
          src={cat}
          alt="Imagem de um gato"
          className="hidden lg:block w-1/4 ml-11"
        />
      </main>

      <section
        id="objetivos"
        className="bg-purple-900 py-12 flex items-center font-shikhand"
      >
        <ul className="flex flex-col md:flex-row justify-around items-stretch w-full px-6 md:px-12 lg:px-20 gap-8 md:gap-0">
          <li className="flex flex-col items-center text-center w-full md:w-1/3 p-6 md:p-4">
            <h2 className="text-4xl text-white mb-3">Missão</h2>
            <p className="text-white leading-relaxed text-lg mb-6 font-questrial">
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
            <p className="text-white leading-relaxed text-lg mb-6 font-questrial">
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
            <p className="text-white leading-relaxed text-lg mb-6 font-questrial">
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
      <ImpactoDoTrabalho />
      <Timeline />
      <ComoAjudar />

      <footer className="bg-purple-900 text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho do Footer com Logo */}
          <div className="flex items-center gap-4 justify-center mb-8">
            <h2 className="text-4xl md:text-5xl font-shikhand text-amber-400">
              Contatos
            </h2>
          </div>

          {/* Conteúdo Principal */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
            {/* Informações de Contato */}
            <div className="flex-grow space-y-6 text-gray-800">
              {/* Localização */}
              <div className="flex  gap-3">
                <FaLocationDot className="text-purple-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg text-purple-800">
                    Localização
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Av. da Universidade, 2762 - Centro,
                    <br />
                    Fortaleza - CE, 60020-181
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-600 text-xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg text-purple-800">Telefone</p>
                  <a
                    href="tel:+5599999999999"
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    (99) 99999-9999
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-center gap-3">
                <MdEmail className="text-purple-600 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg text-purple-800">E-mail</p>
                  <a
                    href="mailto:uniaofelinaufc@gmail.com"
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    uniaofelinaufc@gmail.com
                  </a>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="flex items-center gap-3 pt-4">
                <FaInstagram className="text-purple-600 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg text-purple-800">
                    Redes Sociais
                  </p>
                  <a
                    href="https://instagram.com/uniaofelina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-600 hover:underline transition-colors"
                  >
                    @uniaofelina
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé Final */}
          <div className="text-center mt-10 pt-8 border-t border-purple-700">
            <p className="text-amber-400 font-semibold text-lg mb-2">
              © 2024 União Felina - Todos os direitos reservados
            </p>
            <p className="text-purple-200 text-sm">
              Feito com 💛 para salvar vidas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
