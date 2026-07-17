import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBooking } from '../../hooks/useBooking';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Услуги', path: '/#services' },
  { label: 'О нас', path: '/#about' },
  { label: 'Портфолио', path: '/portfolio' },
  { label: 'Контакты', path: '/contacts' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openBooking } = useBooking();
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-md" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="c">
          <div className="flex items-center justify-between h-[64px]">
            <Link to="/" className="text-[18px] font-black tracking-tight text-white" style={{ fontStyle: 'italic' }}>
              АТМОСФЕРА <span className="text-[#1053FF]">КОЛЁС</span>
            </Link>

            <div className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={(e) => {
                    if (item.path.startsWith('/#') && isHome) {
                      e.preventDefault();
                      document.querySelector(item.path.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`text-[13px] font-medium transition-colors ${
                    (location.pathname === item.path || (item.path === '/' && isHome))
                      ? 'text-[#FF3333]'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+73422252989" className="text-[13px] text-white/60 hover:text-white flex items-center gap-1.5 transition-colors">
                <Phone className="w-3 h-3" /> +7 (342) 225-29-89
              </a>
              <button onClick={openBooking} className="btn-red text-[13px] py-2 px-5">Записаться</button>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white/60 p-2">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <div className={`fixed inset-0 z-[99] bg-black/70 transition-opacity lg:hidden ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileOpen(false)} />
      <div className={`fixed top-0 right-0 bottom-0 w-[280px] bg-[#111] z-[101] transition-transform duration-300 lg:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
        <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 text-white/40 p-2"><X className="w-5 h-5" /></button>
        <div className="flex flex-col p-8 pt-20 gap-1">
          {navItems.map(item => (
            <Link key={item.label} to={item.path} onClick={() => setMobileOpen(false)} className="text-[15px] py-3 text-white/60 hover:text-white transition-colors" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{item.label}</Link>
          ))}
          <button onClick={() => { setMobileOpen(false); openBooking(); }} className="btn-red w-full justify-center mt-4">Записаться</button>
        </div>
      </div>
    </>
  );
}
