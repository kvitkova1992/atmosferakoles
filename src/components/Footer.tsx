import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f1b3d] text-white/40 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm">© Атмосфера Колёс, 2014–2026</span>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/" className="text-sm text-white/50 hover:text-[#6b8cff] transition-colors">Главная</Link>
            <Link to="/portfolio" className="text-sm text-white/50 hover:text-[#6b8cff] transition-colors">Портфолио</Link>
            <Link to="/uslugi" className="text-sm text-white/50 hover:text-[#6b8cff] transition-colors">Услуги</Link>
            <Link to="/partneram" className="text-sm text-white/50 hover:text-[#6b8cff] transition-colors">Партнёрам</Link>
            <Link to="/privacy" className="text-sm text-white/50 hover:text-[#6b8cff] transition-colors">Политика ПДн</Link>
            <a href="https://vk.com/atmosfera_koles" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-[#6b8cff] transition-colors">Вконтакте</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
