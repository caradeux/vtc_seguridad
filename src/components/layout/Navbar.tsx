"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield, Phone, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Industrias", href: "/industrias" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Blog", href: "/blog" },
];

const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/90 backdrop-blur-xl border-b border-white/5 py-2 shadow-2xl"
                    : "bg-transparent py-4"
            )}
        >
            {/* Top Bar - Hidden on scroll for a cleaner look, or always visible if preferred */}
            <div className={cn(
                "hidden md:block border-b border-white/5 transition-all duration-500 overflow-hidden",
                scrolled ? "h-0 opacity-0" : "h-10 opacity-100 mb-4"
            )}>
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Phone className="w-3 h-3 text-accent" />
                            <span>+54 261-5718877</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Mail className="w-3 h-3 text-accent" />
                            <span>info@vtcseguridad.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="mr-2">Siguenos:</span>
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <Link key={i} href={social.href} className="hover:text-accent transition-colors">
                                    <social.icon className="w-3.5 h-3.5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center group py-2">
                    <img
                        src="/logo_vtc_seguridad_2025_Mesa-de-trabajo-1.png"
                        alt="VTC Seguridad"
                        className="h-14 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-black uppercase tracking-[0.2em] text-foreground/60 hover:text-white transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contacto"
                        className="group relative bg-primary text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5" />
                            Asesoría Gratuita
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "fixed inset-0 top-0 bg-background/98 backdrop-blur-3xl z-40 md:hidden transition-transform duration-500 p-8 flex flex-col pt-32",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-display font-black hover:text-accent transition-colors tracking-tighter"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="mt-auto pb-12 space-y-8">
                    <div className="flex gap-6 justify-center">
                        {socialLinks.map((social, i) => (
                            <Link key={i} href={social.href} className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-accent hover:bg-white/10 transition-all border border-white/10">
                                <social.icon className="w-6 h-6" />
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/contacto"
                        onClick={() => setIsOpen(false)}
                        className="w-full bg-accent text-white text-center py-5 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 text-sm shadow-2xl shadow-accent/20"
                    >
                        <Phone className="w-5 h-5" />
                        Solicitar Asesoría
                    </Link>
                </div>
            </div>
        </nav>
    );
}
