import { Quote, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
    {
        name: "Ing. Ricardo Montes",
        role: "Director de Operaciones - Distribuidora Sur",
        content: "Buscábamos más que cámaras; buscábamos un partner estratégico. VTC no solo instaló tecnología, rediseñó todo nuestro protocolo de protección. Previnieron tres robos este año.",
        rating: 5,
        location: "Maipú, Mendoza"
    },
    {
        name: "Dra. Elena Vázquez",
        role: "Presidenta Consejo Barrio Privado",
        content: "La paz mental no tiene precio. El sistema de App Smart Panic integró a toda la comunidad. La velocidad con la que actúan sus móviles de patrullaje es sencillamente imbatible.",
        rating: 5,
        location: "Luján de Cuyo, Mendoza"
    },
    {
        name: "Santiago Rossi",
        role: "Fundador de 'The Global Store'",
        content: "Después de 15 años con otras empresas, nos pasamos a VTC. Es la primera vez que siento que no soy un número más. Su atención personalizada y consultiva marca la diferencia.",
        rating: 5,
        location: "Mendoza Capital"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-accent font-black uppercase tracking-[0.3em] text-xs mb-4">Experiencias Reales</h2>
                        <h3 className="text-4xl md:text-6xl font-display font-black leading-tight text-white">
                            Historias de éxito <br />
                            <span className="text-white/40">patrocinadas por la tranquilidad</span>
                        </h3>
                    </div>
                    <div className="flex items-center gap-6 pb-2">
                        <div className="text-center">
                            <p className="text-3xl font-display font-black text-white">4.9/5</p>
                            <p className="text-[10px] text-accent font-black uppercase tracking-widest">Google Rating</p>
                        </div>
                        <div className="w-px h-12 bg-white/10" />
                        <div className="text-center">
                            <p className="text-3xl font-display font-black text-white">30+</p>
                            <p className="text-[10px] text-accent font-black uppercase tracking-widest">Años de Líderes</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white/[0.03] p-12 rounded-[40px] border border-white/5 relative group hover:bg-white/[0.06] transition-all duration-500">
                            <Quote className="absolute top-10 right-10 w-16 h-16 text-accent/5 group-hover:text-accent/10 transition-colors" />
                            <div className="flex gap-1 mb-8">
                                {[...Array(t.rating)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                                ))}
                            </div>
                            <p className="text-xl text-foreground/80 font-medium leading-relaxed mb-10 relative z-10 italic">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-black">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-black text-white text-lg leading-tight">{t.name}</p>
                                    <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold mt-1">{t.role}</p>
                                    <p className="text-[9px] text-accent font-black uppercase tracking-[0.2em] mt-0.5">{t.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA: High Conversion Section */}
                <div className="relative bg-gradient-to-br from-accent to-[#D32F2F] rounded-[50px] p-12 md:p-24 overflow-hidden group shadow-[0_50px_100px_rgba(245,124,0,0.3)]">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/20 rounded-full blur-[80px]" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="text-center lg:text-left max-w-2xl">
                            <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                Cupos de Auditoría Limitados
                            </div>
                            <h3 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter leading-none">
                                No esperes a que <br /> <span className="text-black/30">sea demasiado tarde.</span>
                            </h3>
                            <p className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed">
                                Agendá hoy mismo tu <span className="text-white font-black underline decoration-black/20 underline-offset-8">Auditoría de Vulnerabilidades Gratuita</span>. Un experto de VTC visitará tu propiedad para diseñar tu escudo de seguridad sin ningún costo.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <Link
                                href="/contacto"
                                className="whitespace-nowrap bg-white text-accent px-12 py-8 rounded-[30px] font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center gap-4 group/btn"
                            >
                                AGENDAR MI AUDITORÍA
                                <ArrowRight className="w-8 h-8 group-hover/btn:translate-x-2 transition-transform" />
                            </Link>
                            <p className="text-white/60 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                Respuesta en menos de 2 horas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
