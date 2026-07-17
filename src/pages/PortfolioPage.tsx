import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

/* ===================== USE IS MOBILE ===================== */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

/* ===================== VIDEO PLAYER ===================== */
function VideoPlayer({ src, onClick }: { src: string; onClick?: () => void }) {
  return (
    <video
      key={src}
      src={src + "?v=2"}
      className="rounded-2xl overflow-hidden shadow-lg aspect-square w-full h-full object-cover cursor-pointer"
      style={{ display: 'block' }}
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      onClick={onClick}
    />
  );
}

/* ===================== PHOTO CELL ===================== */
function PhotoCell({ src, onClick }: { src: string; onClick?: () => void }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-md aspect-square ${onClick ? "cursor-pointer" : ""}`} onClick={onClick}>
      <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
    </div>
  );
}

/* ===================== LIGHTBOX ===================== */
function Lightbox({ items, index, onClose, onPrev, onNext }: {
  items: string[]; index: number; onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  const [touchStart, setTouchStart] = useState(0);
  const isVideo = items[index]?.endsWith('.mp4') || items[index]?.endsWith('.mov');

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) onNext();
    else if (diff < -50) onPrev();
  };

  if (index < 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={onClose} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <button className="absolute top-4 right-4 text-white text-3xl z-10" onClick={onClose}>×</button>
      <button className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl z-10 p-4" onClick={(e) => { e.stopPropagation(); onPrev(); }}>‹</button>
      <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl z-10 p-4" onClick={(e) => { e.stopPropagation(); onNext(); }}>›</button>
      <div className="w-full h-full max-w-lg mx-auto flex items-center justify-center p-8" onClick={(e) => e.stopPropagation()}>
        {isVideo ? (
          <video src={items[index]} className="max-w-full max-h-full rounded-xl" controls autoPlay />
        ) : (
          <img src={items[index]} alt="" className="max-w-full max-h-full rounded-xl object-contain" />
        )}
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">{index + 1} / {items.length}</div>
    </div>
  );
}

/* ===================== GRID ITEM ===================== */
function GridItem({ src, idx, isMobile, openLb }: { src: string; idx: number; isMobile: boolean; openLb: (i: number) => void }) {
  const isV = src.endsWith('.mp4') || src.endsWith('.mov');
  return isV ? (
    <div onClick={isMobile ? () => openLb(idx) : undefined} className={isMobile ? "cursor-pointer" : ""}>
      <VideoPlayer src={src} onClick={isMobile ? () => openLb(idx) : undefined} />
    </div>
  ) : (
    <PhotoCell src={src} onClick={isMobile ? () => openLb(idx) : undefined} />
  );
}

/* ===================== PORTFOLIO SECTION ===================== */
function PortfolioSection({ title, items, bg, isMobile, cols = 5 }: {
  title: string; items: string[]; bg?: string; isMobile: boolean; cols?: number;
}) {
  const [lbIndex, setLbIndex] = useState(-1);

  const openLb = useCallback((idx: number) => { if (isMobile) setLbIndex(idx); }, [isMobile]);
  const closeLb = () => setLbIndex(-1);
  const prevLb = () => setLbIndex(p => p <= 0 ? items.length - 1 : p - 1);
  const nextLb = () => setLbIndex(p => p >= items.length - 1 ? 0 : p + 1);

  return (
    <section className={`py-16 ${bg || "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl lg:text-3xl font-bold text-[#1a1a2e] mb-8 text-center">
          {title}
        </motion.h3>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className={`grid gap-2 ${cols === 5 ? 'grid-cols-5' : 'grid-cols-4'}`}>
          {items.map((src, i) => <GridItem key={i} src={src} idx={i} isMobile={isMobile} openLb={openLb} />)}
        </motion.div>
      </div>
      <Lightbox items={items} index={lbIndex} onClose={closeLb} onPrev={prevLb} onNext={nextLb} />
    </section>
  );
}

/* ===================== COMPACT HERO ===================== */
function HeroSection() {
  return (
    <section className="pt-24 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e]">Наши работы</h1>
      </div>
    </section>
  );
}

/* ===================== MAIN PAGE ===================== */
export default function PortfolioPage({ onOpenModal }: { onOpenModal: () => void }) {
  const isMobile = useIsMobile();

  return (
    <>
      <HeroSection />

      {/* 1. Серебро, чёрный, алмазная проточка — 5x2 */}
      <PortfolioSection
        title="Серебро, чёрный, алмазная проточка"
        items={[
          "/images/portfolio-silver-black/01.jpg",  // IMG_6949
          "/images/portfolio-silver-black/02.jpg",  // IMG_6114
          "/images/portfolio-silver-black/03.jpg",  // IMG_6956
          "/images/portfolio-silver-black/04.jpg",  // IMG_0669
          "/videos/new/v01.mp4",                    // IMG_8703
          "/images/portfolio-silver-black/05.jpg",  // IMG_2255
          "/images/portfolio-silver-black/06.jpg",  // IMG_8755
          "/images/portfolio-silver-black/07.jpg",  // IMG_1214
          "/images/portfolio-silver-black/08.jpg",  // IMG_0254
          "/videos/new/v02.mp4",                    // IMG_0492
        ]}
        isMobile={isMobile}
        cols={5}
      />

      {/* 2. Термоэмали, полировка — 5+4 */}
      <PortfolioSection
        title="Термоэмали, полировка"
        items={[
          "/images/portfolio-thermo/01.jpg",  // IMG_0300
          "/images/portfolio-thermo/02.jpg",  // IMG_0207
          "/images/portfolio-thermo/03.jpg",  // IMG_9711
          "/images/portfolio-thermo/04.jpg",  // IMG_6757
          "/videos/new/v03.mp4",              // IMG_1446
          "/images/portfolio-thermo/05.jpg",  // IMG_0355
          "/images/portfolio-thermo/06.jpg",  // IMG_9738
          "/images/portfolio-thermo/07.jpg",  // IMG_1519
          "/images/portfolio-thermo/08.jpg",  // IMG_9667
          "/videos/new/v04.mp4",              // IMG_1579
        ]}
        bg="bg-[#f8f9ff]"
        isMobile={isMobile}
        cols={5}
      />

      {/* 3. Матовые и яркие цвета — 5x2 */}
      <PortfolioSection
        title="Матовые и яркие цвета"
        items={[
          "/images/portfolio-matte/01.jpg",  // IMG_0159
          "/images/portfolio-matte/02.jpg",  // IMG_0194
          "/images/portfolio-matte/03.jpg",  // IMG_0691
          "/images/portfolio-matte/04.jpg",  // IMG_7592
          "/videos/new/v05.mp4",             // IMG_0868
          "/images/portfolio-matte/05.jpg",  // IMG_0505
          "/images/portfolio-matte/06.jpg",  // IMG_0373
          "/images/portfolio-matte/07.jpg",  // IMG_0196
          "/images/portfolio-matte/08.jpg",  // IMG_8407
          "/videos/new/v06.mp4",             // IMG_0752
        ]}
        isMobile={isMobile}
        cols={5}
      />

      {/* 4. Покраска суппортов — 5x1 */}
      <PortfolioSection
        title="Покраска суппортов"
        items={[
          "/images/portfolio-sup/01.jpg",  // IMG_3687
          "/images/portfolio-sup/02.jpg",  // IMG_5377
          "/images/portfolio-sup/03.jpg",  // IMG_8171
          "/images/portfolio-sup/04.jpg",  // IMG_9432
          "/videos/new/v07.mp4",           // IMG_1149
        ]}
        bg="bg-[#f8f9ff]"
        isMobile={isMobile}
        cols={5}
      />

      {/* 5. Шиномонтаж / правка / сварка дисков — 4x1 */}
      <PortfolioSection
        title="Шиномонтаж / правка / сварка дисков"
        items={[
          "/images/portfolio-tire/01.jpg",  // IMG_8191
          "/images/portfolio-tire/02.png",  // IMG_1600
          "/images/portfolio-tire/03.png",  // IMG_1601
          "/videos/new/v10.mp4",            // IMG_0884
        ]}
        isMobile={isMobile}
        cols={4}
      />

      {/* 6. Детейлинг дисков / локальный ремонт — 4x1 */}
      <PortfolioSection
        title="Детейлинг дисков / локальный ремонт"
        items={[
          "/images/portfolio-detail/01.png",  // IMG_1596
          "/images/portfolio-detail/02.png",  // IMG_1597
          "/videos/new/v08.mp4",              // IMG_6557
          "/videos/new/v09.mp4",              // IMG_0824
        ]}
        bg="bg-[#f8f9ff]"
        isMobile={isMobile}
        cols={4}
      />

      {/* 7. Пескоструй / порошковая покраска — 4x1 ВСЕ ФОТО */}
      <PortfolioSection
        title="Пескоструй / порошковая покраска"
        items={[
          "/images/portfolio-sandblast/01.jpg",  // IMG_0240
          "/images/portfolio-sandblast/02.jpg",  // IMG_0427
          "/images/portfolio-sandblast/03.jpg",  // IMG_9351 (screenshot)
          "/images/portfolio-sandblast/04.jpg",  // IMG_9063 (screenshot)
        ]}
        bg="bg-[#f8f9ff]"
        isMobile={isMobile}
        cols={4}
      />

      {/* 8. Ремонт шин / шипование / новые шины / хранение — 4x1 */}
      <PortfolioSection
        title="Ремонт шин / шипование / новые шины / хранение"
        items={[
          "/images/portfolio-tire-repair/01.jpg",  // IMG_0249
          "/images/portfolio-tire-repair/02.jpg",  // IMG_9877
          "/images/portfolio-tire-repair/03.png",  // IMG_3796
          "/images/portfolio-tire-repair/04.jpg",  // IMG_8134
        ]}
        bg="bg-[#f8f9ff]"
        isMobile={isMobile}
        cols={4}
      />

      {/* Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link to="/uslugi" className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-[#f8f9ff] to-[#f0f3ff] border border-[#1053FF]/10 hover:border-[#1053FF]/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all group">
                <div>
                  <span className="text-lg font-bold text-[#1a1a2e] mb-1 block">Все услуги</span>
                  <p className="text-sm text-gray-500">Полный перечень услуг</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1053FF] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Link to="/price" className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-[#f8f9ff] to-[#f0f3ff] border border-[#1053FF]/10 hover:border-[#1053FF]/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all group">
                <div>
                  <span className="text-lg font-bold text-[#1a1a2e] mb-1 block">Прайс</span>
                  <p className="text-sm text-gray-500">Актуальные цены</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#1053FF] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f1b3d] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <img src="/images/cta-disk.webp" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Хотите так же? Оставьте заявку!
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Позвоните или оставьте заявку — мы подберём оптимальное решение.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={onOpenModal} size="lg" className="bg-[#1053FF] hover:bg-[#0d43cc] text-white rounded-xl px-8 py-6 text-base font-semibold shadow-xl shadow-blue-500/30">
                <Phone className="w-5 h-5 mr-2" />
                Оставить заявку
              </Button>
              <a href="tel:+73422252989">
                <Button variant="outline" size="lg" className="border-white/30 text-white bg-white/5 hover:bg-white/10 rounded-xl px-8 py-6 text-base font-semibold">
                  +7 (342) 225-29-89
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
