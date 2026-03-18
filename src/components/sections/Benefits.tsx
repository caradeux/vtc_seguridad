import { Shield, Clock, Zap, Cpu } from "lucide-react";

const benefits = [
    {
        icon: Clock,
        title: "Respuesta en < 60s",
        desc: "Cada segundo cuenta. Nuestra central de monitoreo propia reacciona en tiempo récord, enviando auxilio antes de que la situación escale.",
    },
    {
        icon: Cpu,
        title: "Disuasión Inteligente",
        desc: "No solo vigilamos; prevenimos. Usamos analíticas de IA que detectan patrones sospechosos antes de que se cometa la intrusión.",
    },
    {
        icon: Zap,
        title: "Atención Prime",
        desc: "Tu urgencia es nuestra prioridad. Contás con un gestor de seguridad asignado y soporte técnico prioritario los 365 días del año.",
    },
    {
        icon: Shield,
        title: "Patrimonio Blindado",
        desc: "Con más de 30 años en Mendoza, entendemos el riesgo local mejor que nadie. Protegemos tu inversión con protocolos de nivel bancario.",
    },
];

export function Benefits() {
    return (
        <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-accent font-black uppercase tracking-[0.3em] text-xs mb-4">Valor Diferencial</h2>
                        <h3 className="text-4xl md:text-6xl font-display font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                            Por qué somos el estándar <br />
                            <span className="text-white/40">de seguridad en la región</span>
                        </h3>
                    </div>
                    <div className="hidden md:block">
                        <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-4 backdrop-blur-xl">
                            <div className="text-right">
                                <p className="text-[10px] text-white/40 uppercase font-black tracking-widest leading-none mb-1">Satisfacción</p>
                                <p className="text-2xl font-display font-black text-white leading-none">98.4%</p>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <svg key={s} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, i) => (
                        <div key={i} className="group p-10 rounded-[40px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <benefit.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">{benefit.title}</h3>
                            <p className="text-foreground/60 leading-relaxed font-medium group-hover:text-foreground/80 transition-colors">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
