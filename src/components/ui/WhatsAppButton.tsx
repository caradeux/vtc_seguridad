"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
    const phoneNumber = "56989927030"; // From historical context
    const message = "Hola, me gustaría solicitar una asesoría de seguridad.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white pl-5 pr-6 py-4 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group overflow-hidden border border-white/20"
        >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[#25D366] blur-xl opacity-40 -z-10 group-hover:opacity-60 transition-opacity" />

            <span className="relative flex items-center gap-3">
                <div className="relative">
                    <MessageCircle className="w-7 h-7 fill-current" />
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-[#25D366] rounded-full animate-pulse" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-70 leading-none mb-0.5">Soporte 24/7</span>
                    <span className="font-black text-sm tracking-tight leading-none whitespace-nowrap">
                        Hablá con un Experto
                    </span>
                </div>
            </span>

            {/* Infinite pulse effect */}
            <span className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-0 group-hover:opacity-20 transition-opacity" />
        </Link>
    );
}
