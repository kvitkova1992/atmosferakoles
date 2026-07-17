import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Phone, MapPin, Clock, Star,
  Palette, CircleDot,
  TrendingUp, RefreshCw, Check, Shield
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } }),
};

/* ===================== HERO ===================== */
function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f1b3d] to-[#16213e]">
      <div className="absolute inset-0">
        <img src="/images/d-01.webp" alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0f1b3d]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } }}}>

            <motion.div variants={fadeInUp} custom={0} className="space-y-1 mb-4">
              <h1 className="text-xl lg:text-3xl xl:text-4xl font-extrabold text-white leading-tight tracking-tight">
                Колёса — обувь автомобиля.
              </h1>
              <h1 className="text-xl lg:text-3xl xl:text-4xl font-extrabold text-white leading-tight tracking-tight whitespace-nowrap">
                Суппорта — изысканные шнурки.
              </h1>
              <p className="text-xl lg:text-3xl xl:text-4xl font-extrabold text-[#1053FF] leading-tight tracking-tight pt-1">
                Не позволяйте деталям выглядеть неряшливо.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} custom={1} className="flex flex-wrap gap-4 mb-2">
              <Button onClick={onOpenModal} size="lg"
                className="bg-[#1053FF] hover:bg-[#0d43cc] text-white rounded-xl px-8 py-6 text-base font-semibold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-1">
                <Phone className="w-5 h-5 mr-2" />
                Оставить заявку
              </Button>
            </motion.div>

          </motion.div>

          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="hidden lg:block">
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#0f1b3d]/60 rounded-3xl p-5 border border-white/10 shadow-2xl backdrop-blur-xl max-w-sm ml-auto">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img src="/images/d-01.webp" alt="Покраска дисков" className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-3">
                <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-xl p-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1053FF]/20 flex items-center justify-center flex-shrink-0">
                    <Palette className="w-4 h-4 text-[#6b8cff]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs">Покраска дисков</p>
                    <p className="text-white/40 text-[10px]">Порошковая и жидкая</p>
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-xl p-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1053FF]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-[#6b8cff]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs">Гарантия 5 лет</p>
                    <p className="text-white/40 text-[10px]">На все виды работ</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===================== STEPS ===================== */
function StepsSection() {
  const steps = [
    { img: "/images/step-1-receive.webp", title: "Приём колес", desc: "Приём в сервисе или на месте клиента" },
    { img: "/images/step-2-color.webp", title: "Подбор цвета", desc: "Профессиональный подбор оттенка по каталогам" },
    { img: "/images/step-3-tire.webp", title: "Шиномонтаж / правка", desc: "Демонтаж, правка геометрии" },
    { img: "/images/step-4-strip.webp", title: "Снятие старой краски", desc: "Пескоструйная очистка диска" },
    { img: "/images/step-5-shape.webp", title: "Выведение форм", desc: "Восстановление геометрии и линий" },
    { img: "/images/step-6-paint.webp", title: "Покраска", desc: "Порошковая покраска в камере" },
    { img: "/images/step-7-install.webp", title: "Сборка и установка", desc: "Монтаж на автомобиль клиента" },
    { img: "/images/step-8-delivery.png", title: "Выдача клиенту", desc: "Финальный осмотр и выдача" },
  ];

  return (
    <section className="py-24 bg-white" id="steps">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3">Этапы работ</h2>
        </motion.div>
        {/* Desktop: horizontal line - 7 steps (no step 8) */}
        <div className="hidden lg:flex items-start justify-center">
          {steps.slice(0, 7).map((step, i) => (
            <div key={i} className="flex items-start">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="text-center group w-[125px]">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#f8f9ff] border border-[#1053FF]/10 flex items-center justify-center p-3 group-hover:bg-[#1053FF]/5 transition-colors">
                  <img src={step.img} alt={step.title} className="w-full h-full object-contain" />
                </div>
                <p className="text-xs font-bold text-[#1a1a2e] mb-1">{step.title}</p>
                <p className="text-[10px] text-gray-400 leading-tight">{step.desc}</p>
              </motion.div>
              {i < 6 && (
                <div className="flex items-center justify-center w-6 flex-shrink-0 pt-10">
                  <div className="w-full h-px bg-[#1053FF]/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Mobile: 2 columns 4+4 with diagonal arrow ↗ */}
        <div className="lg:hidden relative">
          <div className="grid grid-cols-2 gap-x-4">
            {/* Left column: 0,1,2,3 */}
            <div className="flex flex-col items-center">
              {[0,1,2,3].map(idx => (
                <div key={idx} className="flex flex-col items-center w-full">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                    className="text-center w-[130px]">
                    <div className="w-16 h-16 mx-auto mb-1 rounded-2xl bg-[#f8f9ff] border border-[#1053FF]/10 flex items-center justify-center p-2"><img src={steps[idx].img} alt={steps[idx].title} className="w-full h-full object-contain" /></div>
                    <p className="text-[10px] font-bold text-[#1a1a2e] leading-tight">{steps[idx].title}</p>
                    <p className="text-[9px] text-gray-400 leading-tight">{steps[idx].desc}</p>
                  </motion.div>
                  {idx < 3 && <div className="py-1"><svg width="16" height="20" viewBox="0 0 16 20" fill="none"><path d="M8 0L8 16M8 16L3 11M8 16L13 11" stroke="#1053FF" strokeWidth="2" strokeOpacity="0.4"/></svg></div>}
                </div>
              ))}
            </div>
            {/* Right column: 4,5,6,7 */}
            <div className="flex flex-col items-center">
              {[4,5,6,7].map(idx => (
                <div key={idx} className="flex flex-col items-center w-full">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                    className="text-center w-[130px]">
                    <div className="w-16 h-16 mx-auto mb-1 rounded-2xl bg-[#f8f9ff] border border-[#1053FF]/10 flex items-center justify-center p-2"><img src={steps[idx].img} alt={steps[idx].title} className="w-full h-full object-contain" /></div>
                    <p className="text-[10px] font-bold text-[#1a1a2e] leading-tight">{steps[idx].title}</p>
                    <p className="text-[9px] text-gray-400 leading-tight">{steps[idx].desc}</p>
                  </motion.div>
                  {idx < 7 && <div className="py-1"><svg width="16" height="20" viewBox="0 0 16 20" fill="none"><path d="M8 0L8 16M8 16L3 11M8 16L13 11" stroke="#1053FF" strokeWidth="2" strokeOpacity="0.4"/></svg></div>}
                </div>
              ))}
            </div>
          </div>
          {/* ╚ shape: shifted left, shorter arms */}
          <svg className="absolute pointer-events-none" style={{left: '40%', bottom: '12%', width: '45%', height: '80%', opacity: 0.35}} viewBox="0 0 100 140" preserveAspectRatio="none">
            {/* Vertical line - shifted 80px left total */}
            <path d="M20 140 L20 0" stroke="#1053FF" strokeWidth="1.5" fill="none"/>
            {/* Top line right - shortened 25px */}
            <path d="M20 0 L50 0" stroke="#1053FF" strokeWidth="1.5" fill="none"/>
            {/* Bottom line left - shortened 25px */}
            <path d="M20 140 L-10 140" stroke="#1053FF" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ===================== TIMING ===================== */
function TimingSection() {
  const items = [
    { icon: <Clock className="w-6 h-6" />, label: "Сроки выполнения", value: "1–3 дня" },
    { icon: <Shield className="w-6 h-6" />, label: "Гарантия до", value: "2 лет" },
    { icon: <Palette className="w-6 h-6" />, label: "Материалы", value: "Порошковая краска и термоэмали" },
  ];

  return (
    <section className="py-16 bg-[#0f1b3d]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 py-6 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">
              <div className="w-12 h-12 rounded-xl bg-[#1053FF]/20 flex items-center justify-center text-[#6b8cff] flex-shrink-0">{item.icon}</div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider font-semibold">{item.label}</p>
                <p className="text-lg font-bold text-white">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== WHO NEEDS ===================== */
function WhoNeedsSection({ onOpenModal }: { onOpenModal: () => void }) {
  const cards = [
    { icon: <RefreshCw className="w-6 h-6" />, title: "Обновление внешности", problem: "Бордюрка, царапины, коррозия, отслоение ЛКП", solution: "Серебро, чёрный глянец, блестящий хром", img: "/images/transparent/final-card1.png" },
    { icon: <Palette className="w-6 h-6" />, title: "Смена имиджа / тюнинг", problem: "Скучный авто, хочется индивидуальности", solution: "Матовый цвет или яркие оттенки", img: "/images/transparent/final-card2.png" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Повышение стоимости авто", problem: "Подготовка к продаже, нужен заводской вид", solution: "Оригинальные термоэмали (под завод)", img: "/images/transparent/final-card3.png" },
  ];

  // 9 transparent wheel PNGs
  const galleryWheels = [
    "/images/transparent/g1-silver.png",
    "/images/transparent/g2-black.png",
    "/images/transparent/g3-gold.png",
    "/images/transparent/gallery4.png",
    "/images/transparent/gallery5.png",
    "/images/transparent/gallery6.png",
    "/images/transparent/gallery7.png",
    "/images/transparent/gallery8.png",
    "/images/transparent/card1-update.png",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3">Кому нужна покраска дисков?</h2>
        </motion.div>

        {/* 3 cards with icon + text + photo */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cards.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50">
              <div className="flex items-start gap-4 p-5">
                {/* Left: icon + text */}
                <div className="flex-1">
                  <div className="w-8 h-8 rounded-lg bg-[#1053FF] flex items-center justify-center text-white mb-2">
                    {card.icon}
                  </div>
                  <h4 className="text-sm font-bold text-[#1a1a2e] mb-1">{card.title}</h4>
                  <p className="text-xs text-gray-500 mb-2 leading-relaxed">{card.problem}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Решение</p>
                  <p className="text-xs font-semibold text-[#1053FF]">{card.solution}</p>
                </div>
                {/* Right: car photo without bg */}
                <div className="flex-shrink-0 self-center">
                  <img src={card.img} alt="" className="h-32 w-auto object-contain" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery: 9 real workshop photos */}
        <div className="grid grid-cols-3 md:grid-cols-9 gap-2 mb-10">
          {galleryWheels.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-xl overflow-hidden aspect-square shadow-md">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <Button onClick={onOpenModal} size="lg"
            className="bg-[#1053FF] hover:bg-[#0d43cc] text-white rounded-xl px-10 py-6 text-base font-semibold shadow-xl shadow-blue-500/30">
            <Phone className="w-5 h-5 mr-2" />
            Оставить заявку
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== SERVICES ===================== */
function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f9ff] to-white" id="uslugi">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3">Услуги</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Диски", items: [
              { label: "Покраска" },
              { label: "Правка" },
              { label: "Сварка" },
              { label: "Локальный ремонт", new: true },
              { label: "Детейлинг дисков", new: true },
            ]},
            { title: "Шины", items: [
              { label: "Шиномонтаж" },
              { label: "Ремонт шин" },
              { label: "Новые шины", new: true },
              { label: "Ошиповка" },
            ]},
            { title: "Доп. услуги", items: [
              { label: "Порошковая покраска суппортов" },
              { label: "Пескоструйная и дробеструйная обработка" },
              { label: "Выездная покраска дисков" },
            ]},
          ].map((col, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-600 text-sm">
                    <CircleDot className="w-4 h-4 text-[#1053FF] flex-shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    {item.new && (
                      <span className="text-[10px] font-bold text-white bg-[#1053FF] px-1.5 py-0.5 rounded">NEW</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== ADVANTAGES ===================== */
function AdvantagesSection() {
  return (
    <section className="py-24 bg-white" id="advantages">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3">Наши преимущества</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
          {[
            "У нас широкий спектр услуг по шинам и дискам в одном месте",
            "Наш опыт работы с 2014 года",
            "Восстановление дисков по технологиям покраски Mercedes, BMW, Toyota, Kia",
            "Постоянное обучение и отслеживание трендов",
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#f8f9ff] border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#1053FF]/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-[#1053FF]" />
              </div>
              <p className="text-lg font-semibold text-[#1a1a2e]">{item}</p>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}

/* ===================== REVIEWS ===================== */
function ReviewsSection() {
  const reviews2GIS = [
    { name: "Илья Ушаков", count: "2 отзыва", date: "23 июня", text: "Позвонил днем, к вечеру уже взяли в работу на правку дисков. Грамотные специалисты, работа проведена качественно." },
    { name: "Дмитрий Перминов", count: "1 отзыв", date: "18 июня", text: "Здравствуйте! Начну с того что сейчас в дефиците) а именно дружелюбный коллектив и компетентность в индивидуальных вопросах, молодцы! Работы проделали не мало, выправка, балансировка и окраска все сделано качественно и в своевременно без задержек! Фото и видео отчет отправляли! Не навязывают, не обманывают вообщем и в целом порядочные! Развал бы вам еще делать)))", long: true },
    { name: "Александр Шеин", count: "1 отзыв", date: "28 мая", text: "Покрасили диски, всё четко оперативно в короткие сроки!" },
    { name: "Даниил О.", count: "6 отзывов", date: "21 мая", text: "Устранили бордюрку, поправили геометрию, покрасили в эксклюзивный цвет! Всё качественно. Порадовал индивидуальный подход и приветливое общение. Рекомендую!" },
  ];

  const reviewsYandex = [
    { name: "Надежда", date: "30 марта", text: "Долго искала, кто покрасит качественно и по времени не ждать месяц, плюс отзывы. Нашла договорились о покраске дисков с проточкой. Сделали все на отлично. Мне понравилось очень обслуживание, работу свою знают. Все аккуратно выполнено. Главное по в...", more: true },
    { name: "Александр П.", date: "17 апреля", text: "Делал шиномонтаж и покраску дисков (два диска были поцарапаны о бордюр). Сделали все качественно и быстро. Диски после покраски выглядят как новые. Получил по факту новые диски за очень приемлемую цену. Остался максимально доволен качеств...", more: true },
    { name: "Владимир Сергеев", date: "14 января", text: "Качественный сервис, рекомендую!" },
  ];

  const Stars = ({ w = 4 }: { w?: number }) => (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, j) => (<Star key={j} className={`w-${w} h-${w} fill-amber-400 text-amber-400`} style={{ width: w * 4, height: w * 4 }} />))}
    </div>
  );

  return (
    <section className="py-24 bg-[#f0f2f5]" id="reviews">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] text-center mb-10">
          Отзывы о нас
        </motion.h2>

        {/* Rating header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center justify-between mb-8 max-w-2xl mx-auto px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 32 32" className="w-full h-full"><rect width="32" height="32" rx="6" fill="#1053FF"/><text x="16" y="21" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">2G</text></svg>
            </div>
            <span className="text-lg font-bold text-[#1a1a2e]">4,9</span>
            <Stars w={4} />
          </div>
          <a href="https://2gis.ru/perm/firm/70000001062009613/tab/reviews" target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium text-green-600 hover:underline">
            403 отзыва в 2ГИС
          </a>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left — 2GIS */}
          <div className="space-y-4">
            {reviews2GIS.map((r, i) => (
              <motion.a key={i} href="https://2gis.ru/perm/firm/70000001062009613/tab/reviews" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="block bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#e8eef7] flex items-center justify-center text-[#1053FF] font-bold text-xs flex-shrink-0">
                    {r.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-[#1a1a2e] text-sm">{r.name}</p>
                      <span className="text-gray-400 text-xs">{r.count}</span>
                    </div>
                  </div>
                </div>
                <Stars w={3} />
                <p className="text-gray-400 text-xs mt-1 mb-2">{r.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {r.long ? r.text.substring(0, 280) : r.text}
                </p>
                {r.long && (
                  <span className="text-[#1053FF] text-sm font-medium mt-2 inline-block hover:underline">Читать дальше</span>
                )}
              </motion.a>
            ))}
          </div>

          {/* Right — Yandex */}
          <div className="space-y-4">
            {/* Yandex card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <p className="font-semibold text-[#1a1a2e]">Атмосфера колёс</p>
                <span className="text-xs text-gray-400">Яндекс Карты</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[#1a1a2e]">5,0</span>
                <Stars w={4} />
              </div>
              <p className="text-xs text-gray-400 mb-4">147 отзывов • 190 оценок</p>
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 mb-4">
                <p className="text-sm text-gray-600">Поставьте нам оценку</p>
                <a href="https://yandex.ru/maps/org/atmosphera_koles/..." target="_blank" rel="noopener noreferrer"
                  className="ml-auto bg-[#1053FF] hover:bg-[#0d43cc] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  Оставить отзыв
                </a>
              </div>

              {/* Yandex reviews */}
              <div className="space-y-4 pt-2">
                {reviewsYandex.map((r, i) => (
                  <div key={i} className="border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a1a2e] text-sm">{r.name}</p>
                        <p className="text-gray-400 text-xs">{r.date}</p>
                      </div>
                    </div>
                    <Stars w={3} />
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                      {r.text}
                      {r.more && <span className="text-gray-400"> ... <span className="text-[#1053FF] hover:underline cursor-pointer">ещё</span></span>}
                    </p>
                  </div>
                ))}
              </div>

              <a href="https://yandex.ru/maps/..." target="_blank" rel="noopener noreferrer"
                className="block text-center text-[#1053FF] text-sm font-medium mt-4 pt-4 border-t border-gray-100 hover:underline">
                Больше отзывов на Яндекс Картах
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== PRICE ===================== */
function PriceSection() {
  return (
    <section className="py-24 bg-white" id="price">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3">Прайс</h2>
          <p className="text-gray-500 mb-10">Актуальные цены на все услуги</p>
        </motion.div>
        <motion.a href="#/price" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="block bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all cursor-pointer">
          <img src="/images/price-full.png" alt="Прайс-лист" className="w-full rounded-2xl" />
        </motion.a>
      </div>
    </section>
  );
}

/* ===================== ARTICLES ===================== */
function ArticlesSection() {
  const articles = [
    { title: "Покраска дисков: порошковая vs жидкая", desc: "В чём разница и что выбрать", img: "/images/n-01.webp", href: "/article-pokraska.html" },
    { title: "Ремонт шин, шипование, хранение", desc: "Всё о работе с шинами", img: "/images/tire-studded.webp", href: "/article-shiny.html" },
    { title: "Как ухаживать за покрашенными дисками", desc: "Советы по уходу", img: "/images/n-06.webp", href: "/article-ukhod.html" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f9ff] to-white" id="articles">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3">Статьи</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.a key={i} href={a.href} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }} className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all border border-gray-100">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={a.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-[#1a1a2e] mb-2 group-hover:text-[#1053FF] transition-colors">{a.title}</h4>
                <p className="text-sm text-gray-500">{a.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CONTACTS ===================== */
function ContactsSection() {
  return (
    <section className="py-24 bg-white" id="contacts">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3">Контакты</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            {[
              { icon: <Phone className="w-5 h-5" />, title: "Телефон", val: "+7 (342) 225-29-89", href: "tel:+73422252989" },
              { icon: <MapPin className="w-5 h-5" />, title: "Адрес", val: "Пермь, ул. Хлебозаводская, 30а" },
              { icon: <Clock className="w-5 h-5" />, title: "Режим работы", val: "Ежедневно с 9:00 до 21:00" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#1053FF]/10 flex items-center justify-center text-[#1053FF]">{item.icon}</div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{item.title}</p>
                  {item.href ? (
                    <a href={item.href} className="text-lg font-bold text-[#1a1a2e] hover:text-[#1053FF] transition-colors">{item.val}</a>
                  ) : (<p className="text-lg font-bold text-[#1a1a2e]">{item.val}</p>)}
                </div>
              </div>
            ))}
            <div className="flex gap-3 pt-4 flex-wrap">
              {["Telegram", "Вконтакте", "2ГИС", "Яндекс", "Макс"].map((name, i) => {
                const urls = ["https://t.me/atmosferakoles", "https://vk.com/atmosfera_koles", "https://2gis.ru/perm/firm/70000001037197882", "https://yandex.ru/maps/org/atmosfera_koles/1962787225/", "https://max.ru/profile/f9LHodD0cOIMaBxBMxd324qGjEYWb7VJhIGXEPJoe5rS9dD7BlXoferh_Ts"];
                return (
                  <a key={i} href={urls[i]} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-gray-100 rounded-xl text-sm font-semibold text-[#1a1a2e] hover:bg-[#1053FF] hover:text-white transition-all">{name}</a>
                );
              })}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://yandex.ru/map-widget/v1/?ll=56.246306%2C57.968162&z=15" className="w-full h-full min-h-[350px] border-0" title="Карта" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===================== MAIN PAGE ===================== */
export default function HomePage({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <>
      <HeroSection onOpenModal={onOpenModal} />
      <StepsSection />
      <TimingSection />
      <WhoNeedsSection onOpenModal={onOpenModal} />
      <ServicesSection />
      <AdvantagesSection />
      <ReviewsSection />
      <PriceSection />
      <ArticlesSection />
      <ContactsSection />
    </>
  );
}
