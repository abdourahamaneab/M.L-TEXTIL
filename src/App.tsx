/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  ArrowRight, 
  Diamond, 
  CheckCircle2, 
  Truck, 
  ThumbsUp, 
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-warm-beige/50">
      <div className="flex justify-center items-center px-8 py-5 max-w-7xl mx-auto">
        <a href="#" className="text-2xl font-serif font-bold tracking-tight text-deep-sapphire">
          M.L TEXTILES
        </a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="/assets/hero.jpg" 
        alt="L'Excellence du Textile Sénégalais" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
        fetchpriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-serif text-white mb-8 drop-shadow-md leading-tight"
      >
        L'Excellence du Textile 
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-white/90 text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto"
      >
        Maison de prestige spécialisée dans le Bazin, le Wax et la Soie.
      </motion.p>
      <motion.a 
        href="#collections"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="inline-block bg-deep-sapphire text-white text-xs tracking-[0.3em] uppercase py-5 px-10 border border-white/20 hover:bg-white hover:text-deep-sapphire transition-all duration-500"
      >
        Découvrir la Collection
      </motion.a>
    </div>
  </section>
);

const TrustBar = () => (
  <div className="bg-warm-beige/30 py-10 border-b border-warm-beige">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: Diamond, label: "Tissus Premium" },
        { icon: CheckCircle2, label: "Savoir-faire Sénégalais" },
        { icon: Truck, label: "Livraison Dakar & International" },
        { icon: ThumbsUp, label: "Satisfaction Garantie" }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center text-center gap-3">
          <item.icon size={28} strokeWidth={1} className="text-soft-gold" />
          <span className="text-[10px] tracking-[0.15em] uppercase font-semibold text-deep-sapphire/70">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Heritage = () => (
  <section id="heritage" className="py-24 md:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-8">
        <span className="inline-block px-4 py-1.5 bg-warm-beige text-soft-gold text-[10px] tracking-[0.2em] uppercase font-bold">
          HÉRITAGE
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-deep-sapphire leading-tight">Notre Maison</h2>
        <p className="text-deep-sapphire/70 leading-relaxed text-lg font-light">
          Depuis trois générations, M.L Textiles incarne l'élégance intemporelle de la culture sénégalaise. Nous sélectionnons les fils les plus nobles pour tisser des étoffes qui racontent une histoire, alliant techniques ancestrales et vision contemporaine.
        </p>
        <div className="py-8 border-l-2 border-soft-gold pl-10 italic">
          <p className="text-3xl font-serif text-soft-sapphire/80 leading-snug">
            "Le tissu est l'âme de celle qui le porte."
          </p>
        </div>
        <a href="#" className="inline-flex items-center gap-3 text-deep-sapphire text-[11px] tracking-[0.2em] uppercase font-bold border-b border-deep-sapphire pb-1 hover:text-soft-gold hover:border-soft-gold transition-colors">
          Notre Histoire <ArrowRight size={14} />
        </a>
      </div>
      <div className="relative aspect-[4/5] overflow-hidden group">
        <img 
          src="/assets/heritage.jpg" 
          alt="Artisanat" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-soft-sapphire/5 group-hover:bg-transparent transition-colors"></div>
      </div>
    </div>
  </section>
);

const Collections = () => {
  const collections = [
    { name: "Collection Bazin", img: "/assets/bazin.jpg" },
    { name: "Collection Wax", img: "/assets/wax.jpg" },
    { name: "Collection Soie", img: "/assets/soie.jpg" }
  ];

  return (
    <section id="collections" className="py-24 bg-warm-beige/20">
      <div className="max-w-7xl mx-auto px-8 text-center mb-16">
        <h2 className="text-4xl font-serif text-deep-sapphire mb-6">Nos Collections</h2>
        <p className="text-deep-sapphire/60 max-w-xl mx-auto font-light">
          Découvrez l'élégance de nos tissus exclusifs : Bazin Riche, Wax Premium et Soie Sauvage.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
        {collections.map((col, idx) => (
          <div key={idx} className="group relative aspect-[3/4] cursor-pointer overflow-hidden">
            <img 
              src={col.img} 
              alt={col.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white font-serif text-2xl italic tracking-widest">{col.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Lookbook = () => (
  <section id="lookbook" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-8 text-center mb-16">
      <h2 className="text-4xl font-serif text-deep-sapphire mb-4">Lookbook</h2>
      <p className="text-deep-sapphire/60 font-light italic">L'inspiration au service de votre style.</p>
    </div>
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-8">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src="/assets/look1.jpg" 
          alt="Look 1" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src="/assets/look2.jpg" 
          alt="Look 2" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
);

const Artisans = () => (
  <section id="artisanship" className="py-24 bg-warm-beige/30 text-center">
    <div className="max-w-3xl mx-auto px-8">
      <h2 className="text-4xl font-serif text-deep-sapphire mb-6">Savoir-faire</h2>
      <p className="text-deep-sapphire/70 text-lg font-light leading-relaxed">
        L'excellence du geste au service de la matière. Chaque pièce est le fruit d'une collaboration entre nos maîtres artisans et des créateurs visionnaires.
      </p>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-pearl-white">
    <div className="max-w-3xl mx-auto px-8 text-center">
       <span className="inline-block px-4 py-1 bg-warm-beige text-deep-sapphire text-[10px] tracking-[0.2em] uppercase font-bold mb-6">
        CONSEIL PERSONNALISÉ
      </span>
      <h2 className="text-4xl font-serif text-deep-sapphire mb-6">Vivez l'Expérience M.L Textiles</h2>
      <p className="text-deep-sapphire/60 mb-12 font-light">
        Vous souhaitez un accompagnement sur mesure pour vos projets de haute couture ? Laissez vos coordonnées, un de nos conseillers vous contactera sous 24h.
      </p>
      
      <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] tracking-widest uppercase font-bold text-deep-sapphire">Nom Complet</label>
            <input 
              type="text" 
              placeholder="Ex: Fatou Diome" 
              className="w-full bg-warm-beige/20 border border-warm-beige px-4 py-4 focus:outline-none focus:border-soft-gold transition-colors font-light"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] tracking-widest uppercase font-bold text-deep-sapphire">Numéro de Téléphone</label>
            <input 
              type="tel" 
              placeholder="Ex: +221 ..." 
              className="w-full bg-warm-beige/20 border border-warm-beige px-4 py-4 focus:outline-none focus:border-soft-gold transition-colors font-light"
            />
          </div>
        </div>
        <button className="w-full bg-deep-sapphire text-white text-[11px] tracking-[0.3em] uppercase py-5 px-10 hover:bg-soft-sapphire transition-colors shadow-lg">
          Être recontacté par un conseiller
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#112240] text-warm-beige py-20 px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-serif tracking-tight mb-10">M.L TEXTILES</h2>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
        {["Privacy Policy", "Terms of Service", "Shipping & Returns", "Contact Us"].map((link) => (
          <a key={link} href="#" className="text-[10px] tracking-[0.2em] uppercase font-bold hover:text-white transition-colors">
            {link}
          </a>
        ))}
      </div>
      <div className="w-12 h-px bg-soft-gold/30 mx-auto mb-10"></div>
      <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-soft-gold/80">
        © 2024 M.L TEXTILES. HAUTE COUTURE HERITAGE.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <TrustBar />
      <Heritage />
      <Collections />
      <Lookbook />
      <Artisans />
      <Contact />
      <Footer />
    </div>
  );
}
