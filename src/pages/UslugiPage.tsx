import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Check, ArrowRight, Wrench, Zap, CircleDot, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Реставрация дисков",
    description: "Профессиональная порошковая и жидкая покраска дисков любого размера и сложности. Используем оригинальные термоэмалии.",
    features: [
      "Жидкое хромирование",
      "Полировка дисков",
      "Алмазная проточка, шлифовка",
      "Порошковая покраска",
      "Жидкая покраска",
      "Термоэмали",
      "Матовые и глянцевые эффекты",
    ],
    image: "/images/n-06.webp",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Правка и сварка дисков",
    description: "",
    features: [
      "правка литых, кованых и стальных дисков",
      "сварка трещин в аргоне",
      "восстановление геометрии",
      "исправление восьмерок",
    ],
    images: ["/images/uslugi-pravka-new.jpg", "/images/uslugi-pravka2.jpg"],
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Покраска суппортов",
    description: "Порошковая покраска суппортов тормозов в любой цвет.",
    features: [
      "Любой цвет по каталогу RAL",
      "Гарантия до 2 лет",
      "Снятие/установка с автомобиля",
    ],
    image: "/images/uslugi-sup.jpg",
  },
  {
    icon: <CircleDot className="w-7 h-7" />,
    title: "Бережный Шиномонтаж",
    description: "",
    features: [
      "Ремонт боковых порезов (вулканизация)",
      "Ошиповка, шипование шин",
      "Хранение шин",
      "Новые шины",
    ],
    image: "/images/uslugi-shina.jpg",
  },
  {
    icon: <Check className="w-7 h-7" />,
    title: "Детейлинг дисков",
    description: "Комплексный уход за дисками без покраски. Полировка, защитные покрытия, керамика.",
    features: ["Полировка дисков", "Керамическое покрытие", "Защита от грязи", "Восстановление блеска"],
    image: "/images/uslugi-det.jpg",
  },
  {
    icon: <ArrowRight className="w-7 h-7" />,
    title: "Пескоструйная обработка/порошковая покраска запчастей",
    description: "",
    features: [
      "Очистка от старой краски",
      "Удаление ржавчины",
      "Подготовка под покраску",
      "Окрашивание и лакирование",
      "Большая камера для работ",
    ],
    image: "/images/uslugi-pesok.jpg",
  },
];

/* ===================== COMPACT HERO ===================== */
function HeroSection() {
  return (
    <section className="pt-24 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e]">Все услуги</h1>
      </div>
    </section>
  );
}

/* ===================== SERVICES LIST ===================== */
function ServicesList() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3">Что мы делаем</h2>
          <p className="text-gray-500 max-w-md mx-auto">Профессиональный подход к каждой задаче</p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                {service.images ? (
                  <div className="grid grid-cols-2 gap-3">
                    {service.images.map((img, j) => (
                      <div key={j} className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <img src={img} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1053FF] to-[#6b8cff] flex items-center justify-center text-white mb-5 shadow-lg shadow-blue-500/20">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">{service.title}</h3>
                {service.description && (
                  <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
                )}
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-[#1053FF] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CTA ===================== */
function CTASection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="py-24 bg-[#0f1b3d] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src="/images/cta-disk.webp" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Готовы преобразить ваши диски?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Оставьте заявку прямо сейчас и получите консультацию бесплатно.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={onOpenModal}
              size="lg"
              className="bg-[#1053FF] hover:bg-[#0d43cc] text-white rounded-xl px-8 py-6 text-base font-semibold shadow-xl shadow-blue-500/30"
            >
              <Phone className="w-5 h-5 mr-2" />
              Оставить заявку
            </Button>
            <a href="tel:+73422252989">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-white/5 hover:bg-white/10 rounded-xl px-8 py-6 text-base font-semibold"
              >
                Позвонить
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== MAIN PAGE ===================== */
export default function UslugiPage({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <>
      <HeroSection />
      <ServicesList />
      <CTASection onOpenModal={onOpenModal} />
    </>
  );
}
