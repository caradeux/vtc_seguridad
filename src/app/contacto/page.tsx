"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Contacta con Expertos</h1>
                    <p className="text-xl text-foreground/60">
                        Estamos listos para diseñar tu próximo cinturón de seguridad. Escríbenos y un especialista te contactará en menos de 24 horas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info & Map */}
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                                <Phone className="w-8 h-8 text-primary mb-6" />
                                <h3 className="font-bold mb-2">Teléfono</h3>
                                <p className="text-foreground/60 text-sm mb-4">Llamada inmediata para emergencias.</p>
                                <a href="tel:+56989927030" className="text-primary font-bold hover:underline">+56 9 8992 7030</a>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                                <Mail className="w-8 h-8 text-primary mb-6" />
                                <h3 className="font-bold mb-2">Email</h3>
                                <p className="text-foreground/60 text-sm mb-4">Consultas comerciales y cotizaciones.</p>
                                <a href="mailto:contacto@vtcseguridad.cl" className="text-primary font-bold hover:underline">contacto@vtcseguridad.cl</a>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                            <div className="flex items-start gap-4 mb-8">
                                <MapPin className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-2">Ubicación Central</h3>
                                    <p className="text-foreground/60 text-sm">Av. Principal 1234, Piso 5. Santiago, Chile.</p>
                                </div>
                            </div>
                            {/* Placeholder for Map */}
                            <div className="aspect-video w-full bg-muted rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106514.81498654876!2d-70.6482697!3d-33.45694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                        {formStatus === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                    <Send className="w-10 h-10 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">¡Mensaje Enviado!</h2>
                                <p className="text-foreground/60 mb-8">Un experto se pondrá en contacto contigo muy pronto para brindarte la mejor asesoría.</p>
                                <button
                                    onClick={() => setFormStatus("idle")}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-3xl font-display font-bold mb-8 italic">Solicitar Evaluación</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Nombre Completo</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Ej: Juan Pérez"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Teléfono</label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+56 9 ..."
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Email</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="email@ejemplo.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Servicio de interés</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                                            <option className="bg-background">Seguridad Electrónica / Alarmas</option>
                                            <option className="bg-background">CCTV / Monitoreo</option>
                                            <option className="bg-background">Seguridad Física</option>
                                            <option className="bg-background">Otros</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Mensaje</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Cuéntanos brevemente sobre tus necesidades de seguridad..."
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        disabled={formStatus === "submitting"}
                                        className={cn(
                                            "w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:shadow-2xl hover:shadow-primary/40",
                                            formStatus === "submitting" && "opacity-70 cursor-not-allowed"
                                        )}
                                    >
                                        {formStatus === "submitting" ? "Enviando..." : "Enviar Solicitud"}
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>

                                <div className="mt-10 pt-10 border-t border-white/5">
                                    <p className="text-center text-sm text-foreground/40 mb-6">O prefiere escribirnos directamente por WhatsApp</p>
                                    <a
                                        href="https://wa.me/56989927030"
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 text-[#25D366] font-bold hover:scale-105 transition-transform"
                                    >
                                        <MessageCircle className="w-6 h-6 fill-current" />
                                        Iniciar chat inmediato
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
