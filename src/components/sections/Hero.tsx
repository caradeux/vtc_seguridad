import Link from "next/link";
import { ShieldCheck, ArrowRight, Activity } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 md:pt-40 lg:pt-32 overflow-hidden bg-background">
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
                <img
                    src="/slide_seguridad_electronica-1.jpg"
                    alt="Security background"
                    className="w-full h-full object-cover object-center opacity-30 grayscale"
                />

                {/* Tech Overlays */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none z-20 opacity-20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,124,0,0.1)_0%,transparent_50%)] z-20" />

                {/* Decorative scanning line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-scanline z-30" />
            </div>

            <div className="relative z-30 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10 backdrop-blur-md">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                        </span>
                        <span className="text-[11px] font-black text-white/80 uppercase tracking-[0.3em]">Central de Operaciones 24/7 Activa</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-10 tracking-tighter text-white">
                        Seguridad <br />
                        <span className="text-white/60">Inteligente para</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">
                            quienes amás
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-lg leading-relaxed font-medium">
                        Tu familia y tu empresa merecen la máxima protección. Unite a las más de <span className="text-white font-bold">5,000 familias en Mendoza</span> que ya confían en VTC.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 items-center">
                        <Link
                            href="/contacto"
                            className="w-full sm:w-auto group relative bg-accent text-white px-10 py-6 rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(245,124,0,0.5)] active:scale-95"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                PROTEGER MI PROPIEDAD
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </Link>
                        <div className="flex flex-col items-start gap-1">
                            <Link
                                href="/servicios"
                                className="text-white/60 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors flex items-center gap-2"
                            >
                                Explorar Tecnologías <ArrowRight className="w-3 h-3" />
                            </Link>
                            <span className="text-[10px] text-accent font-black uppercase tracking-widest opacity-80">Asesoría 100% Sin Cargo</span>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center gap-12">
                        <div className="flex items-center gap-8">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-muted overflow-hidden ring-1 ring-white/10 shadow-2xl">
                                        <img src={`https://i.pravatar.cc/150?u=${i + 15}`} alt="Client" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex gap-1 mb-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <svg key={s} className="w-3 h-3 text-[#F5C518]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-sm font-black text-white italic">"Son el respaldo que mi familia necesitaba"</p>
                                <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Mendoza Capital</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-accent animate-pulse" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] uppercase font-black text-white/40 tracking-[0.2em]">Tiempo de Respuesta</p>
                                <p className="text-lg font-display font-black text-white leading-none">Menos de 60s</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative hidden lg:block perspective-2000">
                    <div className="relative animate-float transition-all duration-700">
                        {/* Premium Glass Frame */}
                        <div className="relative z-10 rounded-[60px] overflow-hidden border border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.6)] rotate-y--15 hover:rotate-y-0 transition-transform duration-1000 aspect-[4/5] max-w-[500px] ml-auto group">
                            <img
                                src="/slide_quienes.jpg"
                                alt="VTC Centro de Operaciones"
                                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />

                            {/* Live Badge */}
                            <div className="absolute top-8 left-8 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                Live Monitoring
                            </div>

                            {/* Overlay Info Card */}
                            <div className="absolute bottom-10 left-10 right-10 p-10 rounded-[40px] bg-background/50 backdrop-blur-3xl border border-white/10 transform translate-z-50 shadow-2xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/40">
                                        <ShieldCheck className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-display font-bold text-white tracking-tight">Estrategia 360°</h4>
                                        <p className="text-[10px] text-accent font-black uppercase tracking-widest leading-none mt-1">Sello de Calidad OS-10</p>
                                    </div>
                                </div>
                                <p className="text-sm text-white/70 leading-relaxed font-medium">No solo instalamos equipos, diseñamos un anillo de protección blindado para tu patrimonio y tus seres queridos.</p>
                            </div>
                        </div>

                        {/* Floating elements background shadow */}
                        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-accent/20 blur-[120px] -z-10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
