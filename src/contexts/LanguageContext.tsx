'use client';

import { createContext, useContext, useState } from 'react';

export type Lang = 'fr' | 'en' | 'de' | 'es';

const translations = {
  fr: {
    nav: ['Menu', 'Personnalise', 'Nos stores', 'About'],
    ceSoir: {
      title: 'CE SOIR SEULEMENT',
      subtitle: 'Les bons plans disparaissent à minuit.',
      voirPlus: 'VOIR PLUS',
    },
    obsession: {
      title: "NÉS DE L'OBSESSION DU GOÛT ET DU DÉTAIL",
      subtitle: "POURQUOI LE BUBBLE TEA EST TOUJOURS PAREIL PARTOUT ? KITSUN EST NOTRE RÉPONSE.",
    },
    stores: {
      title: 'NOS STORES',
      subtitle: 'Viens nous voir',
      open: 'Ouvert',
      closed: 'Fermé',
    },
    footer: {
      contact: 'Contact',
      contactText: 'Tu as une question ? Écris-nous',
      navigation: 'Navigation',
      categories: 'Catégories',
      legal: 'Légal',
      legalLinks: ['Mentions légales', 'CGV', 'Confidentialité', 'Cookies'],
      copyright: '© 2025 Kitsun — Tous droits réservés',
    },
  },
  en: {
    nav: ['Menu', 'Customize', 'Our stores', 'About'],
    ceSoir: {
      title: 'TONIGHT ONLY',
      subtitle: 'Good deals disappear at midnight.',
      voirPlus: 'SEE MORE',
    },
    obsession: {
      title: 'BORN FROM AN OBSESSION WITH TASTE AND DETAIL',
      subtitle: 'WHY DOES BUBBLE TEA ALWAYS TASTE THE SAME EVERYWHERE? KITSUN IS OUR ANSWER.',
    },
    stores: {
      title: 'OUR STORES',
      subtitle: 'Come see us',
      open: 'Open',
      closed: 'Closed',
    },
    footer: {
      contact: 'Contact',
      contactText: 'Have a question? Write to us',
      navigation: 'Navigation',
      categories: 'Categories',
      legal: 'Legal',
      legalLinks: ['Legal notices', 'T&Cs', 'Privacy', 'Cookies'],
      copyright: '© 2025 Kitsun — All rights reserved',
    },
  },
  de: {
    nav: ['Menü', 'Anpassen', 'Unsere Läden', 'Über uns'],
    ceSoir: {
      title: 'NUR HEUTE ABEND',
      subtitle: 'Gute Angebote verschwinden um Mitternacht.',
      voirPlus: 'MEHR SEHEN',
    },
    obsession: {
      title: 'GEBOREN AUS DER OBSESSION FÜR GESCHMACK UND DETAIL',
      subtitle: 'WARUM SCHMECKT BUBBLE TEA ÜBERALL GLEICH? KITSUN IST UNSERE ANTWORT.',
    },
    stores: {
      title: 'UNSERE LÄDEN',
      subtitle: 'Komm uns besuchen',
      open: 'Geöffnet',
      closed: 'Geschlossen',
    },
    footer: {
      contact: 'Kontakt',
      contactText: 'Hast du eine Frage? Schreib uns',
      navigation: 'Navigation',
      categories: 'Kategorien',
      legal: 'Rechtliches',
      legalLinks: ['Impressum', 'AGB', 'Datenschutz', 'Cookies'],
      copyright: '© 2025 Kitsun — Alle Rechte vorbehalten',
    },
  },
  es: {
    nav: ['Menú', 'Personaliza', 'Nuestras tiendas', 'Acerca de'],
    ceSoir: {
      title: 'SOLO ESTA NOCHE',
      subtitle: 'Las ofertas desaparecen a medianoche.',
      voirPlus: 'VER MÁS',
    },
    obsession: {
      title: 'NACIDOS DE LA OBSESIÓN POR EL SABOR Y EL DETALLE',
      subtitle: '¿POR QUÉ EL BUBBLE TEA SIEMPRE SABE IGUAL EN TODOS LADOS? KITSUN ES NUESTRA RESPUESTA.',
    },
    stores: {
      title: 'NUESTRAS TIENDAS',
      subtitle: 'Ven a vernos',
      open: 'Abierto',
      closed: 'Cerrado',
    },
    footer: {
      contact: 'Contacto',
      contactText: '¿Tienes una pregunta? Escríbenos',
      navigation: 'Navegación',
      categories: 'Categorías',
      legal: 'Legal',
      legalLinks: ['Aviso legal', 'Términos', 'Privacidad', 'Cookies'],
      copyright: '© 2025 Kitsun — Todos los derechos reservados',
    },
  },
};

type Translations = typeof translations.fr;

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}>({
  lang: 'fr',
  setLang: () => {},
  t: translations.fr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
