// Dados da linha do tempo
const timelineData = [
  {
    year: "2020",
    titleLeft: "Fundação",
    textLeft:
      "Fundação da União Felina por um grupo de voluntários apaixonados por animais.",
    titleRight: "",
    textRight: "",
  },
  {
    year: "2021",
    titleLeft: "",
    textLeft: "",
    titleRight: "Primeiros Resgates",
    textRight:
      "Resgate e adoção dos primeiros 50 gatinhos em situação de risco.",
  },
  {
    year: "2022",
    titleLeft: "Expansão",
    textLeft:
      "Abertura do primeiro abrigo permanente com capacidade para 100 animais.",
    titleRight: "",
    textRight: "",
  },
  {
    year: "2023",
    titleLeft: "",
    textLeft: "",
    titleRight: "Parcerias",
    textRight: "Parcerias com clínicas veterinárias e pet shops da região.",
  },
  {
    year: "2024",
    titleLeft: "Campanhas",
    textLeft: "Lançamento de campanhas de castração e adoção responsável.",
    titleRight: "",
    textRight: "",
  },
];

// Interface para props do TimelineItem
interface TimelineItemProps {
  index: number;
  year: string;
  titleLeft: string;
  textLeft: string;
  titleRight: string;
  textRight: string;
}

// Componente para cada item da timeline
const TimelineItem = ({
  index,
  year,
  titleLeft,
  textLeft,
  titleRight,
  textRight,
}: TimelineItemProps) => {
  // Itens pares (0, 2, 4...) ficam à esquerda
  const isLeft = index % 2 === 0;

  return (
    <li className="relative mb-12 grid grid-cols-2">
      {/* Coluna Esquerda */}
      <div className={`p-4 ${isLeft ? "text-right pr-12" : ""}`}>
        {isLeft && (
          <>
            <h3 className="text-lg font-bold text-purple-900 mb-1">
              {titleLeft}
            </h3>
            <p className="text-base font-bold text-white mb-2">{year}</p>
            <p className="text-white text-sm leading-relaxed">{textLeft}</p>
          </>
        )}
      </div>

      {/* Coluna Direita */}
      <div className={`p-4 ${!isLeft ? "text-left pl-12" : ""}`}>
        {!isLeft && (
          <>
            <h3 className="text-lg font-bold text-purple-900 mb-1">
              {titleRight}
            </h3>
            <p className="text-base font-bold text-white mb-2">{year}</p>
            <p className="text-white text-sm leading-relaxed">{textRight}</p>
          </>
        )}
      </div>

      {/* Círculo com número no centro */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center z-20 shadow-lg border-4 border-purple-600">
        <span className="text-lg font-bold text-amber-400">{index + 1}</span>
      </div>
    </li>
  );
};

// Componente principal da Timeline
export default function Timeline() {
  return (
    <div className="bg-amber-400 w-full py-16 px-4 sm:px-8">
      {/* Título da Seção */}
      <div className="text-center mb-16">
        <h2
          className="text-5xl sm:text-7xl font-bold text-purple-900 mb-4 font-shikhand"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}
        >
          Nossa história
        </h2>
        <p className="text-xl text-purple-700 font-semibold">
          Uma jornada de amor e dedicação aos animais
        </p>
      </div>

      {/* Container da Linha do Tempo */}
      <div className="max-w-4xl mx-auto relative">
        {/* Linha vertical central que conecta todos os pontos */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white transform -translate-x-1/2 shadow-md"></div>

        <ul className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} index={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
