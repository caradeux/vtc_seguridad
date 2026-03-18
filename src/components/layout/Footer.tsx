import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = {
    servicios: [
        { name: "Seguridad Electrónica", href: "/servicios" },
        { name: "Monitoreo de Alarmas", href: "/servicios" },
        { name: "CCTV / Videovigilancia", href: "/servicios" },
        { name: "Seguridad Física", href: "/servicios" },
    ],
    empresa: [
        { name: "Sobre Nosotros", href: "/nosotros" },
        { name: "Industrias", href: "/industrias" },
        { name: "Blog de Seguridad", href: "/blog" },
        { name: "Contacto", href: "/contacto" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                {/* Col 1: Branding */}
                <div className="lg:col-span-1">
                    <Link href="/" className="flex items-center gap-4 mb-10 group">
                        <div className="relative w-20 h-20 group-hover:scale-110 transition-transform bg-white/5 p-2 rounded-2xl border border-white/10">
                            <img
                                src="/logo_vtc_seguridad_2025_Mesa-de-trabajo-1.png"
                                alt="VTC Logo"
                                className="w-full h-full object-contain brightness-0 invert"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-display font-black tracking-tighter text-white leading-none">
                                VTC
                            </span>
                            <span className="text-[12px] font-black tracking-[0.4em] text-accent uppercase">
                                SEGURIDAD
                            </span>
                        </div>
                    </Link>
                    <p className="text-foreground/40 text-sm leading-relaxed mb-10 font-medium">
                        Líderes en protección integral con más de <span className="text-white">30 años de trayectoria</span>. Tecnología de vanguardia y respuesta inmediata 24/7.
                    </p>
                    <div className="flex gap-4">
                        {[
                            { Icon: Facebook, color: "hover:bg-[#1877F2]" },
                            { Icon: Instagram, color: "hover:bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
                            { Icon: Linkedin, color: "hover:bg-[#0A66C2]" },
                            { Icon: Twitter, color: "hover:bg-[#1DA1F2]" }
                        ].map(({ Icon, color }, i) => (
                            <Link
                                key={i}
                                href="#"
                                className={cn(
                                    "w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-white/30 transition-all duration-300 hover:text-white hover:border-transparent hover:-translate-y-1 shadow-2xl",
                                    color
                                )}
                            >
                                <Icon className="w-6 h-6" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Servicios</h4>
                    <ul className="space-y-4">
                        {footerLinks.servicios.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-foreground/40 hover:text-accent transition-all text-sm font-bold flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-accent/20 rounded-full group-hover:bg-accent transition-colors" />
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Compañía</h4>
                    <ul className="space-y-4">
                        {footerLinks.empresa.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-foreground/40 hover:text-accent transition-all text-sm font-bold flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-white/5 rounded-full group-hover:bg-accent transition-colors" />
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Ubicación Central</h4>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5 text-accent" />
                            </div>
                            <div className="text-sm font-bold">
                                <p className="text-white">Mendoza, Argentina</p>
                                <p className="text-foreground/40 font-medium">Carril Rodríguez Peña 2144, Maipú</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                <Phone className="w-5 h-5 text-accent" />
                            </div>
                            <div className="text-sm font-bold">
                                <p className="text-white">+54 261-5718877</p>
                                <p className="text-foreground/40 font-medium whitespace-nowrap">Atención 24 Horas</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                <Mail className="w-5 h-5 text-accent" />
                            </div>
                            <div className="text-sm font-bold">
                                <p className="text-white">info@vtcseguridad.com</p>
                                <p className="text-foreground/40 font-medium">Consultas Generales</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20 italic">
                    © {new Date().getFullYear()} VTC Seguridad. Profesionales en protección de activos y vida humana.
                </p>
                <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30">
                    <Link href="/privacidad" className="hover:text-accent transition-colors">Privacidad</Link>
                    <Link href="/terminos" className="hover:text-accent transition-colors">Términos</Link>
                </div>
            </div>
        </footer>
    );
}
