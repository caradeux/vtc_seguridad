import { Home, Building2, ShoppingCart, Truck, Wine, Trees, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const solutions = [
    {
        title: "Residencial y Condominios",
        icon: Home,
        problem: "¿Cómo proteger a mi familia y mi propiedad de intrusiones?",
        solution: "Sistemas perimetrales inteligentes coordinados con el control de acceso del condominio.",
        features: ["Cercos eléctricos certificados", "Control de acceso vehicular (TAG)", "Cámaras con reconocimiento facial", "App compartida para vecinos"],
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
    },
    {
        title: "Comercial y Retail",
        icon: ShoppingCart,
        problem: "¿Cómo reducir las pérdidas y garantizar la seguridad de mis empleados?",
        solution: "Video vigilancia preventiva con analíticas de comportamiento y botones de pánico silenciosos.",
        features: ["Mapas de calor", "Detección de merodeo", "Monitoreo nocturno interactivo", "Integración con sistemas POS"],
        image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80"
    },
    {
        title: "Industrial y Logística",
        icon: Truck,
        problem: "¿Cómo asegurar grandes perímetros y mercadería de alto valor?",
        solution: "Protección multinivel con cámaras térmicas, radares y guardias motorizados.",
        features: ["Seguimiento de flota", "Control de tiempos y asistencia", "Detección de incendios", "Protección de perímetros extensos"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
    }
];

export default function IndustriesPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Soluciones por Sector</h1>
                    <p className="text-xl text-foreground/60">
                        No creemos en soluciones de catálogo. Analizamos los riesgos específicos de su industria para diseñar una estrategia de protección a medida.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {solutions.map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                            <div className="lg:w-1/2 h-[300px] lg:h-auto overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-display font-bold">{item.title}</h2>
                                </div>

                                <div className="space-y-6 mb-10">
                                    <div>
                                        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">El Desafío</p>
                                        <p className="text-lg text-foreground/80">{item.problem}</p>
                                    </div>
                                    <div>
                                        <p className="text-accent font-bold text-sm uppercase tracking-widest mb-2">Nuestra Estrategia</p>
                                        <p className="text-foreground/60">{item.solution}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                    {item.features.map((feature, j) => (
                                        <div key={j} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium text-foreground/70">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
