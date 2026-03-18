import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";

const posts = [
    {
        title: "5 Mitos sobre los sistemas de alarmas residenciales",
        desc: "Descubre la verdad detrás de las falsas alarmas y la efectividad real de los sistemas modernos.",
        date: "15 Feb, 2026",
        author: "Ing. Mario Soto",
        time: "5 min lectura",
        img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
    },
    {
        title: "Cómo la Inteligencia Artificial está cambiando el CCTV",
        desc: "El análisis de video avanzado ya no es ciencia ficción. Así es como previene robos hoy.",
        date: "10 Feb, 2026",
        author: "Redacción VTC",
        time: "8 min lectura",
        img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80"
    },
    {
        title: "Seguridad Industrial: Puntos críticos en centros de logística",
        desc: "Una guía completa para administradores de bodegas y centros de distribución.",
        date: "05 Feb, 2026",
        author: "Comité de Expertos",
        time: "12 min lectura",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
    }
];

export default function BlogPage() {
    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Blog & Recursos</h1>
                    <p className="text-xl text-foreground/60">
                        Consejos de expertos, comparativas de sistemas y noticias del mundo de la seguridad privada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {posts.map((post, i) => (
                        <article key={i} className="group bg-white/5 border border-white/5 rounded-3xl overflow-hidden hover:border-primary/50 transition-all flex flex-col">
                            <div className="h-64 overflow-hidden">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-foreground/40 mb-4 font-bold uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.time}</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-grow">
                                    {post.desc}
                                </p>
                                <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs group/link">
                                    Leer artículo completo
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter / CTA */}
                <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 text-center max-w-4xl mx-auto">
                    <h3 className="text-3xl font-display font-bold mb-6 italic">Mantente Informado</h3>
                    <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
                        Recibe tips mensuales de seguridad y actualizaciones sobre tecnologías de protección directamente en tu correo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Tu mejor email"
                            className="flex-grow bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors"
                        />
                        <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold whitespace-nowrap hover:shadow-2xl hover:shadow-primary/30 transition-all">
                            Suscribirme
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
