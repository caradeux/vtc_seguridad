import Link from "next/link";
import { ArrowRight, Video, Bell, HardHat, Smartphone } from "lucide-react";

const services = [
    {
        title: "Sistemas de Alarmas",
        icon: Bell,
        desc: "Detección intrusión de alta precisión con monitoreo inteligente 24/7.",
        href: "/servicios",
        image: "/slide_seguridad_electronica-1.jpg"
    },
    {
        title: "CCTV & Video",
        icon: Video,
        desc: "Vigilancia remota ultra-HD con analíticas de inteligencia artificial y grabación en la nube.",
        href: "/servicios",
        image: "/service_cctv.png"
    },
    {
        title: "Seguridad Física",
        icon: HardHat,
        desc: "Personal altamente capacitado y certificado. Custodia vip, control de accesos y perimetral.",
        href: "/servicios",
        image: "/slide_seguridad_fisica.jpg"
    },
    {
        title: "App Smart Panic",
        icon: Smartphone,
        desc: "Llevá tu seguridad en el celular. Botón de pánico, geolocalización y alertas en tiempo real.",
        href: "/servicios",
        image: "/service_smart.png"
    }
];

export function ServicesOverview() {
    return (
        <section className="py-24 px-6 bg-[#080808]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Servicios Especializados</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Soluciones integrales de protección a medida</h3>
                    </div>
                    <Link href="/servicios" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-xs border-b border-primary/30 pb-2">
                        Ver Todos los Servicios <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, i) => (
                        <Link
                            href={service.href}
                            key={i}
                            className="group relative h-[400px] rounded-3xl overflow-hidden"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-2xl">
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                                <p className="text-white/70 max-w-xs transition-opacity group-hover:opacity-100 opacity-60">
                                    {service.desc}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    Saber más <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
