"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Shield, ChevronDown, MessageCircle, Zap, BarChart, Star } from "lucide-react";
import { useState, useEffect } from "react";

// ==========================================
// DADOS DINÂMICOS
// ==========================================
const WHATSAPP_URL = "https://wa.me/5512988342846?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20RMFature.";

const SERVICOS = [
  { icon: <Zap size={24} />, title: 'Emissão Fiscal', desc: 'Geração e envio automatizado de notas para prefeituras e SEFAZ.' },
  { icon: <BarChart size={24} />, title: 'Gestão Financeira', desc: 'Controle centralizado de contas a pagar, receber e fluxo de caixa.' },
  { icon: <TrendingUp size={24} />, title: 'Integração de Sistemas', desc: 'Conexão segura com os sistemas que sua empresa já utiliza no dia a dia.' }
];

const CLIENTES = [
  { nome: "Padaria Pão Pão", nicho: "Comércio Local", desc: "A RMFature tirou de nós a dor de cabeça com a emissão de notas e o financeiro. Agora temos mais tempo para focar no atendimento e na qualidade dos nossos produtos." },
  { nome: "Rede de Lotéricas", nicho: "Serviços e Transações", desc: "O alto volume diário exigia um controle rigoroso. Com o serviço focado, nossa gestão de faturamento ficou impecável, segura e sem falhas manuais." },
  { nome: "Consultórios Médicos", nicho: "Saúde e Clínicas", desc: "Terceirizar nosso faturamento trouxe uma tranquilidade imensa. Ganhamos tempo livre entre os pacientes e a certeza de que a parte fiscal está em dia." }
];

const PASSOS = [
  { title: 'Mapeamento da Operação', desc: 'Entendemos como o seu negócio funciona hoje.' },
  { title: 'Organização do Processo', desc: 'Arrumamos a casa e conectamos o que for necessário.' },
  { title: 'Operação Rodando', desc: 'Seu faturamento passa a ser feito com agilidade e segurança.' }
];

// Métrica ajustada para algo mais profissional
const METRICAS = [
  { num: '100%', label: 'Foco no Cliente' },
  { num: '+Agilidade', label: 'Na Emissão de Notas' },
  { num: '100%', label: 'Conformidade Fiscal' },
  { num: '-70%', label: 'Redução de Tempo Gasto' }
];

const FAQS = [
  { q: 'O serviço atende pequenas empresas e comércios locais?', a: 'Sim! Nosso trabalho é ideal para padarias, lotéricas, clínicas e qualquer negócio que precise organizar a bagunça financeira e automatizar notas fiscais.' },
  { q: 'Eu perco o controle do meu dinheiro se terceirizar?', a: 'Pelo contrário. Você passa a ter relatórios claros e sabe exatamente o que entra e o que sai, sem precisar perder horas em planilhas.' },
  { q: 'Como é feito o atendimento?', a: 'O atendimento é próximo, humanizado e direto. Sem robôs ou tickets demorados. Você fala diretamente conosco para resolver qualquer demanda.' }
];

const DADOS_GRAFICO = [
  { mes: 'Jan', valor: 30, label: 'R$ 30k' },
  { mes: 'Fev', valor: 45, label: 'R$ 45k' },
  { mes: 'Mar', valor: 35, label: 'R$ 35k' },
  { mes: 'Abr', valor: 65, label: 'R$ 65k' },
  { mes: 'Mai', valor: 85, label: 'R$ 85k' },
  { mes: 'Jun', valor: 100, label: 'R$ 100k' }
];

// ==========================================
// COMPONENTES DE LAYOUT
// ==========================================
const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-24 px-6 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// ==========================================
// PÁGINA PRINCIPAL
// ==========================================
export default function RMFatureSite() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50 text-slate-900 font-sans">
      
      {/* HEADER DINÂMICO */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-slate-900 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            RM<span className="text-[#0B2545]">Fature</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <button onClick={() => scrollTo('solucoes')} className="hover:text-[#0B2545] transition">Soluções</button>
            <button onClick={() => scrollTo('servicos')} className="hover:text-[#0B2545] transition">Serviços</button>
            <button onClick={() => scrollTo('clientes')} className="hover:text-[#0B2545] transition">Clientes</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-[#0B2545] transition">FAQ</button>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-[#0B2545] text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-slate-800 transition shadow-sm">
            Falar com Especialista
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-24 px-6 text-center bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Faturamento organizado.<br/>
              <span className="text-[#0B2545]">Mais tempo para o seu negócio.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Terceirize a emissão de notas e a gestão de cobranças com quem entende. Profissionalismo e segurança para comércios, clínicas e prestadores de serviço.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => scrollTo('solucoes')} className="bg-[#0B2545] hover:bg-slate-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-md">
                Conhecer o Trabalho
              </button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-sm">
                <MessageCircle size={20} className="text-[#108A63]" /> Chamar no WhatsApp
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
              <Shield size={16} className="text-[#0B2545]" /> Segurança corporativa com proteção avançada de dados e conformidade total
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. BARRA DE CONFIANÇA (Nichos de Atuação) */}
      <div className="bg-slate-50 py-10 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Atendemos negócios reais da nossa região</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            <div className="text-lg font-bold text-slate-800 flex items-center gap-2">🛒 Comércios & Padarias</div>
            <div className="text-lg font-bold text-slate-800 flex items-center gap-2">🏥 Clínicas Médicas</div>
            <div className="text-lg font-bold text-slate-800 flex items-center gap-2">🍀 Casas Lotéricas</div>
          </div>
        </div>
      </div>

      {/* 4. SOLUÇÃO E DASHBOARD REALISTA */}
      <Section id="solucoes" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">A excelência na gestão financeira</h2>
            <p className="text-slate-600 mb-8 text-lg">Processos ultrapassados geram custos ocultos. Centralize tudo e foque no que realmente importa: vender e atender bem.</p>
            <ul className="space-y-5 mb-8">
              {['Automação completa da esteira de faturamento', 'Controle rigoroso e sem falhas manuais', 'Redução drástica de atrasos e dores de cabeça'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-[#108A63]" size={24} /> {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          
          {/* DASHBOARD REALISTA */}
          <FadeIn delay={0.2}>
            <div className="bg-white border border-slate-200 rounded-xl p-2 shadow-2xl shadow-slate-200/60">
              
              {/* Barra do navegador mockada */}
              <div className="flex items-center gap-2 px-4 pt-3 pb-3 border-b border-slate-100 bg-slate-50/50 rounded-t-lg">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="ml-4 h-5 w-48 bg-white border border-slate-200 rounded text-[10px] text-slate-400 flex items-center px-2">app.rmfature.com.br</div>
              </div>
              
              {/* Corpo do Gráfico */}
              <div className="p-6 bg-white rounded-b-lg flex flex-col h-[320px]">
                
                {/* Header do Card */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Receita Consolidada</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-2xl font-extrabold text-slate-900">R$ 360.000</span>
                      <span className="text-xs font-bold text-[#108A63] bg-[#108A63]/10 px-2 py-1 rounded-full flex items-center gap-1">
                        <TrendingUp size={14} /> +12%
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-md cursor-default">
                    Últimos 6 meses
                  </div>
                </div>

                {/* Área do Gráfico */}
                <div className="flex-1 flex relative">
                  
                  {/* Eixo Y */}
                  <div className="flex flex-col justify-between text-[11px] text-slate-400 font-medium pb-6 pr-4">
                    <span>100k</span>
                    <span>50k</span>
                    <span>0</span>
                  </div>

                  {/* Barras e Linhas de Grade */}
                  <div className="flex-1 relative border-l border-b border-slate-200">
                    
                    {/* Linhas de Grade */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
                      <div className="w-full border-t border-slate-200 border-dashed h-0 mt-2"></div>
                      <div className="w-full border-t border-slate-200 border-dashed h-0 mb-6"></div>
                      <div className="w-full h-0"></div>
                    </div>

                    {/* Contêiner das Barras */}
                    <div className="absolute inset-0 flex items-end justify-around px-2 pt-2 z-10 pb-[-1px]">
                      {DADOS_GRAFICO.map((item, i) => (
                        <div key={i} className="w-10 h-full flex flex-col justify-end items-center group relative">
                          {/* Tooltip */}
                          <div className="absolute top-0 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none mb-2 z-20 shadow-lg">
                            {item.label}
                          </div>
                          
                          {/* Barra com bordas arredondadas no topo e gradiente leve */}
                          <div className="w-full h-full flex items-end">
                            <motion.div 
                              initial={{ height: "0%" }}
                              whileInView={{ height: `${item.valor}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                              className="w-full bg-gradient-to-t from-[#0B2545] to-[#154685] rounded-t-sm group-hover:to-[#108A63] group-hover:from-[#0d6e4f] transition-colors cursor-pointer"
                            />
                          </div>
                          
                          {/* Eixo X (Meses) */}
                          <span className="absolute -bottom-6 text-[11px] text-slate-500 font-medium">{item.mes}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 5. SERVIÇOS */}
      <Section id="servicos" className="bg-slate-50 border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">O que fazemos pela sua empresa</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICOS.map((servico, i) => (
            <FadeIn delay={i * 0.1} key={i}>
              <div className="bg-white border border-slate-200 p-8 rounded-xl hover:border-[#0B2545] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-[#0B2545] rounded-md flex items-center justify-center mb-6 shadow-sm">
                  {servico.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{servico.title}</h3>
                <p className="text-slate-600 leading-relaxed">{servico.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 7. CLIENTES E DEPOIMENTOS REAIS */}
      <Section id="clientes" className="bg-white border-y border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">Quem já confia na RMFature</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {CLIENTES.map((cliente, i) => (
            <FadeIn delay={i * 0.1} key={i}>
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <div className="flex text-[#D4AF37] mb-6">
                    <Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" />
                  </div>
                  <p className="text-slate-700 italic mb-8 font-serif">"{cliente.desc}"</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{cliente.nome}</h4>
                  <p className="text-sm text-slate-500">{cliente.nicho}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 6. COMO FUNCIONA */}
      <Section className="bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">Como começamos?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {PASSOS.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center max-w-xs flex-1">
              <div className="w-14 h-14 bg-white border border-slate-200 rounded-full flex items-center justify-center text-xl font-bold text-[#0B2545] mb-6 shadow-sm">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. NÚMEROS */}
      <div className="bg-[#0B2545] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {METRICAS.map((stat, i) => (
            <div key={i} className="border-l border-white/10 first:border-0">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.num}</div>
              <div className="text-slate-300 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 11. FAQ */}
      <Section id="faq" className="bg-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Dúvidas Frequentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-200 bg-white rounded-lg overflow-hidden shadow-sm">
              <button 
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition text-left focus:outline-none"
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${faqOpen === i ? 'rotate-180' : ''}`} />
              </button>
              {faqOpen === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "auto", opacity: 1 }} 
                  className="px-6 py-5 bg-slate-50 text-slate-600 border-t border-slate-100 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* 12. CTA FINAL */}
      <Section className="bg-white">
        <div className="bg-[#0B2545] rounded-2xl p-12 md:p-16 text-center shadow-2xl shadow-slate-300 relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative z-10">Organize seu faturamento hoje</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
            Fale conosco e descubra como a RMFature pode ajudar a desafogar a rotina financeira do seu negócio.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-[#108A63] hover:bg-[#0d7353] text-white px-8 py-4 rounded-md font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center w-fit gap-3 mx-auto relative z-10 shadow-md">
            <MessageCircle /> Falar com Especialista
          </a>
        </div>
      </Section>

      {/* 13. FOOTER */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4 text-slate-900">RM<span className="text-[#0B2545]">Fature</span></div>
            <p className="text-slate-500 text-sm leading-relaxed">Organização e inteligência para gestão financeira de negócios locais.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-slate-900">Navegação</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><button onClick={() => scrollTo('solucoes')} className="hover:text-[#0B2545]">A Solução</button></li>
              <li><button onClick={() => scrollTo('servicos')} className="hover:text-[#0B2545]">Serviços</button></li>
              <li><button onClick={() => scrollTo('clientes')} className="hover:text-[#0B2545]">Clientes</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-slate-900">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#0B2545]">Políticas de Privacidade</a></li>
              <li><a href="#" className="hover:text-[#0B2545]">Termos de Uso</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-slate-900">Contato</h4>
            <p className="text-sm text-slate-500 mb-2">renatamagina@yahoo.com.br</p>
            <p className="text-sm text-slate-500">(12) 98834-2846</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-slate-100 text-xs font-medium text-slate-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} RMFature. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        href={WHATSAPP_URL}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#108A63] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform z-50 flex items-center justify-center border-2 border-white"
      >
        <MessageCircle size={28} />
      </motion.a>

    </main>
  );
}