import { Home, Building2, ShoppingCart, Truck, Wine, Trees } from "lucide-react";

const industries = [
    { icon: Home, title: "Hogares y Condominios", desc: "Seguridad perimetral y control de acceso inteligente para familias y comunidades residenciales." },
    { icon: Building2, title: "Edificios y Oficinas", desc: "Gestión de visitas y protección de activos críticos para el sector corporativo." },
    { icon: ShoppingCart, title: "Retail y Comercio", desc: "Prevención de pérdidas y monitoreo preventivo en tiempo real para tiendas." },
    { icon: Truck, title: "Logística e Industrial", desc: "Custodia de mercadería y vigilancia de grandes centros de distribución." },
    { icon: Wine, title: "Bodegas y Viñedos", desc: "Protección especializada para infraestructuras agrícolas y de producción." },
    { icon: Trees, title: "Propiedades Rurales", desc: "Detección temprana en zonas de difícil acceso con tecnología de largo alcance." },
];

export function Industries() {
    return (
        <section className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3">
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Soluciones por Sector</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Expertos en cada industria</h3>
                        <p className="text-foreground/60 mb-8">
                            Entendemos que cada sector tiene desafíos únicos. Diseñamos estrategias personalizadas basadas en el análisis de riesgo específico de tu ocupación.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-6 rounded-2xl">
                                <p className="text-3xl font-display font-bold text-primary">30+</p>
                                <p className="text-xs text-foreground/50 uppercase font-bold">Años Proyectando Confianza</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl">
                                <p className="text-3xl font-display font-bold text-primary">5k+</p>
                                <p className="text-xs text-foreground/50 uppercase font-bold">Instalaciones Exitosas</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {industries.map((industry, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                                <industry.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-bold mb-3 text-white">{industry.title}</h4>
                                <p className="text-sm text-foreground/50 leading-relaxed">
                                    {industry.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
