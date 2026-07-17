import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const pageLinks = [
  { href: "/", label: "Главная" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/uslugi", label: "Услуги" },
  { href: "/partneram", label: "Партнёрам" },
];

const anchorLinks = [
  { href: "advantages", label: "Преимущества" },
  { href: "reviews", label: "Отзывы" },
  { href: "price", label: "Цены" },
  { href: "articles", label: "Статьи" },
  { href: "contacts", label: "Контакты" },
];

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isInternal = location.pathname !== "/";
  const dark = scrolled || isInternal;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Track which anchor section is visible
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveAnchor(null);
      return;
    }

    const observers: IntersectionObserver[] = [];
    anchorLinks.forEach((link) => {
      const el = document.getElementById(link.href);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveAnchor(link.href);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [location.pathname]);

  const handleAnchorClick = (anchorId: string) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(anchorId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  const handleHomeClick = () => {
    setActiveAnchor(null);
    setMobileOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageClick = (href: string) => {
    setActiveAnchor(null);
    setMobileOpen(false);
    navigate(href);
  };

  const isPageActive = (href: string) => {
    return location.pathname === href && activeAnchor === null;
  };

  const linkClass = (isActive: boolean) =>
    `text-sm font-medium transition-all relative group ${
      isActive
        ? dark ? "text-[#1053FF]" : "text-[#6b8cff]"
        : dark ? "text-gray-500 hover:text-[#1053FF]" : "text-white/70 hover:text-white"
    }`;

  const underlineClass = (isActive: boolean) =>
    `absolute -bottom-1 left-0 h-0.5 bg-[#1053FF] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        dark
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <button onClick={handleHomeClick} className="flex flex-col leading-tight cursor-pointer bg-transparent border-0 p-0 mr-6">
            <span className={`text-sm lg:text-base xl:text-lg font-black italic tracking-tight transition-colors whitespace-nowrap ${dark ? "text-[#1a1a2e]" : "text-white"}`}>
              АТМОСФЕРА <span className="text-[#1053FF]">КОЛЁС</span>
            </span>
            <span className={`text-[9px] lg:text-[10px] xl:text-xs font-medium tracking-wider uppercase transition-colors whitespace-nowrap ${dark ? "text-gray-500" : "text-white/60"}`}>
              Центр по обслуживанию шин и дисков
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 mr-6">
            {/* Home */}
            <button
              onClick={handleHomeClick}
              className={`${linkClass(isPageActive("/"))} bg-transparent border-0 p-0 cursor-pointer`}
            >
              Главная
              <span className={underlineClass(isPageActive("/"))} />
            </button>
            {/* Other pages */}
            {pageLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handlePageClick(link.href)}
                className={linkClass(location.pathname === link.href && activeAnchor === null)}
              >
                {link.label}
                <span className={underlineClass(location.pathname === link.href && activeAnchor === null)} />
              </Link>
            ))}
            {/* Anchors */}
            {anchorLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className={`${linkClass(activeAnchor === link.href)} bg-transparent border-0 p-0 cursor-pointer`}
              >
                {link.label}
                <span className={underlineClass(activeAnchor === link.href)} />
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <a
              href="tel:+73422252989"
              className={`text-sm font-semibold transition-colors whitespace-nowrap ${dark ? "text-[#1a1a2e]" : "text-white"}`}
            >
              +7 (342) 225-29-89
            </a>
            <div className="flex flex-col items-center">
              <Button
                onClick={onOpenModal}
                className="bg-[#1053FF] hover:bg-[#0d43cc] text-white rounded-lg px-4 py-2 text-sm font-semibold shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:-translate-y-0.5 h-auto"
              >
                Записаться
              </Button>
              <span className={`text-xs italic mt-1 transition-colors whitespace-nowrap ${dark ? "text-gray-500" : "text-white/70"}`}>
                Фанаты идеальных дисков и целых шин
              </span>
            </div>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${dark ? "text-[#1a1a2e]" : "text-white"}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[70px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ${
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          <button
            onClick={handleHomeClick}
            className={`block py-3 text-base font-medium text-left w-full bg-transparent border-0 ${
              isPageActive("/") ? "text-[#1053FF]" : "text-gray-600"
            }`}
          >
            Главная
          </button>
          {pageLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handlePageClick(link.href)}
              className={`block py-3 text-base font-medium ${
                location.pathname === link.href && activeAnchor === null ? "text-[#1053FF]" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {anchorLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleAnchorClick(link.href)}
              className={`block py-3 text-base font-medium text-left w-full bg-transparent border-0 ${
                activeAnchor === link.href ? "text-[#1053FF]" : "text-gray-600"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => { onOpenModal(); setMobileOpen(false); }}
            className="w-full mt-4 bg-[#1053FF] hover:bg-[#0d43cc] text-white rounded-lg"
          >
            Записаться
          </Button>
        </div>
      </div>
    </nav>
  );
}
