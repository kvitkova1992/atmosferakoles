import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A]" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="c py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Link to="/" className="text-[16px] font-black tracking-tight text-white" style={{ fontStyle: 'italic' }}>
              АТМОСФЕРА <span className="text-[#1053FF]">КОЛЁС</span>
            </Link>
            <p className="text-[13px] text-white/30 mt-2">Детейлинг-центр Пермь</p>
          </div>
          <div className="flex gap-8">
            <Link to="/" className="text-[13px] text-white/40 hover:text-white transition-colors">Главная</Link>
            <Link to="/portfolio" className="text-[13px] text-white/40 hover:text-white transition-colors">Портфолио</Link>
            <Link to="/contacts" className="text-[13px] text-white/40 hover:text-white transition-colors">Контакты</Link>
          </div>
        </div>
        <div className="mt-10 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-[11px] text-white/20">© Атмосфера колёс, 2025</p>
        </div>
      </div>
    </footer>
  );
}
