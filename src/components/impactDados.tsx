interface CardImpacto {
  numero: string;
  titulo: string;
  descricao: string;
}

const impactos: CardImpacto[] = [
  {
    numero: "+300",
    titulo: "gatos resgatados",
    descricao:
      "Resgatamos gatos em situação de vulnerabilidade, oferecendo cuidados veterinários até encontrarem um lar seguro.",
  },
  {
    numero: "+180",
    titulo: "adoções bem-sucedidas",
    descricao:
      "Histórias de recomeço entre humanos e felinos — parcerias que unem amor e responsabilidade.",
  },
  {
    numero: "+70",
    titulo: "voluntários engajados",
    descricao:
      "Pessoas que dedicam tempo, energia e carinho, tornando esse trabalho possível.",
  },
  {
    numero: "+15",
    titulo: "campanhas educativas",
    descricao:
      "Levar informação, sensibilizar escolas, comunidades e redes sociais sobre o bem-estar animal.",
  },
  {
    numero: "",
    titulo: "Parcerias veterinárias e esterilizações",
    descricao:
      "Oferecemos suporte e acesso a cuidados veterinários para gatos de rua e residentes, contribuindo para controle populacional e saúde animal.",
  },
];

export default function ImpactoDoTrabalho() {
  return (
    <section id="impacto-do-trabalho" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold text-purple-800 mb-6 font-shikhand">
          Impacto do Nosso Trabalho
        </h2>
        
        <p className="font-questrial">
          Desde nossa fundação, buscamos muito mais que resgates — queremos
          criar uma cultura de cuidado, compaixão e responsabilidade. Acreditamos
          que cada gato resgatado, cada adoção consciente e cada pessoa
          sensibilizada contribuem para comunidades mais gentis e saudáveis.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto font-questrial">
        {impactos.map((item, idx) => (
          <div
            key={idx}
            className="bg-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            {item.numero && (
              <div className="text-5xl font-extrabold text-amber-400 mb-3 font-shikhand">
                {item.numero}
              </div>
            )}
            <h3 className="text-xl font-bold text-purple-800 mb-3 capitalize">
              {item.titulo}
            </h3>
            <p className="text-gray-700 leading-relaxed text-base font-questrial">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}