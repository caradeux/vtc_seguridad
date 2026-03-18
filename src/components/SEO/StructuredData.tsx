export function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SecurityService",
        "name": "VTC Seguridad",
        "image": "https://vtcseguridad.com/logo_vtc_seguridad_2025_Mesa-de-trabajo-1.png",
        "@id": "https://vtcseguridad.com",
        "url": "https://vtcseguridad.com",
        "telephone": "+54 261-5718877",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Carril Rodríguez Peña 2144",
            "addressLocality": "Maipú",
            "addressRegion": "Mendoza",
            "postalCode": "M5511",
            "addressCountry": "AR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -32.9378,
            "longitude": -68.7915
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "13:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/vtcseguridadmendoza/",
            "https://www.instagram.com/vtcseguridad/",
            "https://www.linkedin.com/company/vtcseguridad"
        ],
        "priceRange": "$$",
        "description": "Líderes en seguridad integral en Mendoza con más de 30 años de trayectoria. Sistemas de alarmas, monitoreo 24hs, CCTV y vigilancia física profesional."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
