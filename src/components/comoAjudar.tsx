interface AjudaCard {
  icon: string;
  title: string;
  description: string;
  list?: string[];
  buttonText?: string;
  action?: () => void;
  additionalInfo?: string;
  links?: { name: string; url: string }[];
}

export default function ComoAjudar() {
  const handleDonate = () => {
    alert(
      "Chave PIX: uniaofelina@ong.com.br\n\nObrigado por ajudar a salvar vidas!"
    );
  };


  const handleVolunteer = () => {
    alert(
      "Quer ser voluntário?\n\nEntre em contato conosco:\n📱 WhatsApp: [seu número]\n E-mail: voluntario@uniaofelina.org"
    );
  };

  const ajudaOptions: AjudaCard[] = [
    {
      icon: "",
      title: "Ajude com doações financeiras",
      description:
        "Toda contribuição ajuda a custear exames, transporte e atendimentos.",
      additionalInfo: "Pix: uniaofelina@ong.com.br",
      buttonText: "Fazer uma doação",
      action: handleDonate,
    },
    {
      icon: "",
      title: "Doe materiais e suprimentos",
      description:
        "Também aceitamos doações de materiais para os cuidados dos animais:",
      list: [
        "Ração e areia higiênica",
        "Gaze, seringas e agulhas",
        "Produtos de limpeza",
        "Caixas de transporte",
      ],
      additionalInfo: "Entrega: Benfica da UFC – Fortaleza/CE",
    },
    {
      icon: "",
      title: "Seja um voluntário!",
      description:
        "Ajude nas campanhas, triagem ou transporte de animais. Toda ajuda é bem-vinda!",
      buttonText: "Quero ser voluntário",
      action: handleVolunteer,
    },
    {
      icon: "",
      title: "Espalhe essa ideia!",
      description:
        "Compartilhe o União Felina nas redes sociais e ajude a alcançar mais pessoas.",
      links: [
        { name: "Instagram", url: "https://instagram.com/uniaofelina" },
        { name: "WhatsApp", url: "https://wa.me/55" },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen text-gray-800 py-16 px-6">

      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-purple-800 mb-4 font-shikhand">
          Como Ajudar a União Felina
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed font-questrial">
          Cada gesto faz a diferença! O União Felina depende do apoio de pessoas
          como você para continuar salvando vidas de gatos através de resgates,
          cuidados veterinários e adoções responsáveis.
        </p>
      </section>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ajudaOptions.map((option, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg p-8 border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl hover:scale-105 transition-all duration-300
              ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
         
            <div className="text-6xl mb-4">{option.icon}</div>

            <h2 className="text-2xl font-shikhand text-purple-800 mb-3">
              {option.title}
            </h2>

           
            <p className="text-gray-700 mb-4 leading-relaxed font-questrial">
              {option.description}
            </p>

          
            {option.list && (
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 font-questria">
                {option.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

        
            {option.additionalInfo && (
              <p className="bg-purple-50 rounded-lg p-3 text-sm text-gray-800 font-semibold mb-4 font-questria">
                {option.additionalInfo}
              </p>
            )}

           
            {option.buttonText && option.action && (
              <button
                onClick={option.action}
                className="w-full bg-purple-600 text-white px-4 py-3 rounded-xl font-questrial hover:bg-purple-700 transition-colors duration-200"
              >
                {option.buttonText}
              </button>
            )}

        
            {option.links && (
              <div className="flex flex-wrap gap-3">
                {option.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition-colors duration-200 font-semibold text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action final */}
      <div className="text-center mt-16 max-w-3xl mx-auto">
        <p className="text-2xl font-bold text-purple-800 font-shikhand mb-3">
          Juntos, salvamos vidas! 💜
        </p>
        <p className="text-lg text-gray-700 font-questrial">
          Qualquer forma de ajuda é valiosa e transforma a realidade dos animais
          em vulnerabilidade.
        </p>
      </div>
    </div>
  );
} 