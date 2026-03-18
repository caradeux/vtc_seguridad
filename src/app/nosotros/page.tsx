import { Shield, Target, Users, Award, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div>
                        <h1 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Nuestra Historia</h1>
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 italic">30 años proyectando confianza.</h2>
                        <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                            <p>
                                Fundada en 1996, VTC Seguridad nació con la visión de profesionalizar la industria de la seguridad privada, integrando el rigor operativo con las posibilidades emergentes de la tecnología.
                            </p>
                            <p>
                                Lo que comenzó como una pequeña empresa familiar de monitoreo, se ha transformado hoy en un referente nacional con miles de puntos protegidos y una de las centrales de operaciones más modernas del país.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/10 rounded-[40px] rotate-3" />
                        <div className="relative rounded-[40px] overflow-hidden border border-white/10 aspect-square shadow-2xl">
                            <img src="/slide_quienes.jpg" alt="VTC Equipo" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { icon: Target, title: "Misión", desc: "Brindar soluciones de seguridad integral que permitan a nuestros clientes vivir y trabajar con absoluta tranquilidad." },
                        { icon: Shield, title: "Visión", desc: "Ser la empresa de seguridad líder en innovación tecnológica y excelencia operacional de la región." },
                        { icon: Users, title: "Valores", desc: "Integridad, transparencia, rapidez de respuesta y compromiso inquebrantable con la vida." },
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <item.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-foreground/60">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Certifications Section */}
                <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 md:p-20">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <Award className="w-12 h-12 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Excelencia Certificada</h2>
                        <p className="text-foreground/60 text-lg">
                            Operamos bajo las normativas más estrictas de seguridad nacional e internacional para garantizar un servicio de clase mundial.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {["Certificación OS-10", "Norma ISO 9001:2015", "Registro DGMN", "Instaladores Autorizados SEC"].map((cert, i) => (
                            <div key={i} className="flex items-center gap-4 bg-background/50 p-6 rounded-2xl border border-white/5">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                <span className="font-bold text-sm tracking-tight">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
