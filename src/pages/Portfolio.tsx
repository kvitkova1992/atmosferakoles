import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

const photos = [
  { src: '/assets/images/portfolio-1.jpg', alt: 'Покраска дисков' },
  { src: '/assets/images/portfolio-2.jpg', alt: 'Работа с дисками' },
  { src: '/assets/images/portfolio-3.jpg', alt: 'Химчистка' },
  { src: '/assets/images/portfolio-4.jpg', alt: 'Диски разных цветов' },
  { src: '/assets/images/portfolio-5.jpg', alt: 'Полировка' },
  { src: '/assets/images/portfolio-6.jpg', alt: 'Детейлинг' },
];

export default function Portfolio() {
  const [lb, setLb] = useState<string | null>(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="bg-[#0A0A0A] pt-[64px]">
      <section className="py-14">
        <div className="c">
          <Link to="/" className="back-arrow">
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>
          <span className="label-red">Работы</span>
          <h1 className="h1-fk">Портфолио</h1>
          <p className="text-[15px] text-white/45 mt-3 max-w-md">
            Реальные результаты наших клиентов.
          </p>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
            {photos.map((p, i) => (
              <div key={i} className="gal-item" onClick={() => setLb(p.src)}>
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>

          {/* Video section */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)', margin: '64px 0' }} />
          <h2 className="h2-fk mb-8">Видео <span className="text-[#1053FF]">работ</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1,2,3,4].map(v => (
              <div key={v} className="vid-pl">
                <div className="vid-pl-bg" />
                <div className="vid-pl-play">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lb && (
        <div className="lb active" onClick={() => setLb(null)}>
          <button className="absolute top-6 right-6 text-white/50 hover:text-white z-10" onClick={() => setLb(null)}><X className="w-7 h-7" /></button>
          <img src={lb} alt="" className="max-w-full max-h-[90vh] object-contain rounded" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
