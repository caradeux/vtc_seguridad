import { Shield, Bell, Video, HardHat, Smartphone, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Sistemas de Alarmas Inteligentes",
        icon: Bell,
        features: [
            "Sensores de movimiento inmunes a mascotas",
            "Detección de rotura de cristales",
            "Botones de pánico inalámbricos",
            "Notificaciones push en tiempo real"
        ],
        desc: "Nuestros sistemas de alarma de última generación se adaptan a las necesidades específicas de su propiedad, integrando sensores de alta precisión con conectividad redundante.",
        img: "/slide_seguridad_electronica-1.jpg"
    },
    {
        title: "Central de Monitoreo 24/7",
        icon: Shield,
        features: [
            "Operadores certificados",
            "Respuesta inmediata ante alertas",
            "Verificación por video",
            "Despacho coordinado con fuerzas de seguridad"
        ],
        desc: "Su seguridad no descansa, y nosotros tampoco. Nuestra central de operaciones propia garantiza una supervisión constante de sus señales de alarma.",
        img: "/slide_quienes.jpg"
    },
    {
        title: "CCTV & Video Vigilancia HD",
        icon: Video,
        features: [
            "Cámaras 4K con visión nocturna a color",
            "Analítica de video con IA (Cruce de línea, Rostros)",
            "Grabación segura en la nube y local",
            "Acceso remoto desde cualquier dispositivo"
        ],
        desc: "Vea lo que sucede en su propiedad en todo momento. Implementamos soluciones de video que no solo graban, sino que detectan situaciones inusuales automáticamente.",
        img: "/slide_seguridad_electronica-1.jpg"
    },
    {
        title: "Seguridad Física y Custodia",
        icon: HardHat,
        features: [
            "Guardias de seguridad certificados (OS-10)",
            "Rondas preventivas programadas",
            "Control de acceso y recepción",
            "Protocolos específicos por industria"
        ],
        desc: "Complementamos la tecnología con el factor humano. Nuestro personal es seleccionado y capacitado bajo los más altos estándares de integridad y reacción.",
        img: "/slide_seguridad_fisica.jpg"
    }
];

export default function ServiciosPage() {
    return (
        <div className="bg-background min-h-screen">
            <div className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mb-24">
                        <h1 className="text-5xl md:text-8xl font-display font-black mb-8 leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                            Servicios de <br />
                            <span className="text-white">Seguridad Integral</span>
                        </h1>
                        <p className="text-xl text-foreground/40 max-w-2xl leading-relaxed font-medium">
                            Combinamos décadas de experiencia con las tecnologías más avanzadas del mercado para ofrecer soluciones que realmente funcionan. Diseñamos su blindaje de protección a medida.
                        </p>
                    </div>

                    <div className="space-y-40">
                        {services.map((service, i) => (
                            <div key={i} className={`flex flex-col lg:items-center gap-16 lg:gap-32 ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                                <div className="lg:w-1/2">
                                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
                                        <service.icon className="w-5 h-5 text-primary" />
                                        <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Tecnología Certificada</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white tracking-tight leading-tight">{service.title}</h2>
                                    <p className="text-lg text-foreground/60 mb-10 leading-relaxed font-medium">
                                        {service.desc}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                        {service.features.map((feature, j) => (
                                            <div key={j} className="flex items-start gap-4 group">
                                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/30 transition-colors">
                                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm font-bold text-white/80">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href="/contacto"
                                        className="group inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:border-primary transition-all duration-300 shadow-xl"
                                    >
                                        Consultar por este servicio
                                        <Zap className="w-4 h-4 fill-current group-hover:animate-pulse" />
                                    </Link>
                                </div>
                                <div className="lg:w-1/2 relative">
                                    {/* Glass Decoration */}
                                    <div className="absolute -inset-10 bg-accent/5 blur-[100px] rounded-full opacity-50" />
                                    <div className="relative rounded-[40px] overflow-hidden border border-white/10 aspect-[4/3] group shadow-2xl">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-75 md:brightness-90 grayscale-[0.2] group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
