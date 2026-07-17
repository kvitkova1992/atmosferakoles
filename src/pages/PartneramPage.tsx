import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Handshake, Users, TrendingUp, Star, Building2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

function BitrixPartnerForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = '<div id="bitrix-form-container" style="width:100%;min-height:400px;"></div>';

    const loaderScript = document.createElement('script');
    loaderScript.async = true;
    loaderScript.src = 'https://cdn-ru.bitrix24.ru/b19373380/crm/form/loader_239.js?' + (Date.now() / 180000 | 0);
    
    loaderScript.onload = () => {
      const formScript = document.createElement('script');
      formScript.setAttribute('data-b24-form', 'inline/239/lrq4w1');
      formScript.setAttribute('data-skip-moving', 'true');
      container.appendChild(formScript);
      
      if ((window as any).b24form) {
        (window as any).b24form.init && (window as any).b24form.init();
      }
    };
    
    document.body.appendChild(loaderScript);
    
    return () => {
      container.innerHTML = '';
      if (loaderScript.parentNode) {
        loaderScript.parentNode.removeChild(loaderScript);
      }
    };
  }, []);

  return <div ref={containerRef} className="p-4 min-h-[500px] w-full" />;
}

const benefits = [
  {
    icon: <Handshake className="w-7 h-7" />,
    title: "Взаимовыгодное сотрудничество",
    desc: "Специальные условия и скидки для партнёров. Индивидуальный подход к каждому.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Привлечение клиентов",
    desc: "Рекомендуем наших партнёров своим клиентам. Совместные маркетинговые активности.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Рост вместе",
    desc: "Развиваемся и масштабируемся совместно. Новые направления и возможности.",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Премиальный сервис",
    desc: "Приоритетное обслуживание, выездной менеджер, персональный подход.",
  },
];

/* ===================== COMPACT HERO ===================== */
function HeroSection() {
  return (
    <section className="pt-24 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-3">Партнёрам</h1>
        <p className="text-gray-500">Приглашаем к сотрудничеству автосервисы, детейлинг-центры, шиномонтажи и автосалоны.</p>
      </div>
    </section>
  );
}

/* ===================== BENEFITS ===================== */
function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="text-[#1053FF] border-[#1053FF]/30 mb-4 text-xs tracking-widest uppercase">
            Преимущества
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3">Почему с нами выгодно</h2>
          <p className="text-gray-500 max-w-md mx-auto">Надёжное партнёрство для роста вашего бизнеса</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1053FF] to-[#6b8cff] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1053FF] to-[#6b8cff] flex items-center justify-center text-white mb-5 shadow-lg shadow-blue-500/20">
                {b.icon}
              </div>
              <h4 className="text-lg font-bold text-[#1a1a2e] mb-2">{b.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== PARTNER TYPES ===================== */
function PartnerTypesSection() {
  const types = [
    { title: "Автосервисы", desc: "Доверьте покраску дисков профессионалам. Мы выполним работу качественно и в срок.", icon: <Building2 className="w-6 h-6" /> },
    { title: "Детейлинг-центры", desc: "Расширьте спектр услуг без собственного оборудования. Белая маркировка.", icon: <Star className="w-6 h-6" /> },
    { title: "Шиномонтажи", desc: "Предлагайте клиентам покраску дисков как дополнительную услугу.", icon: <Users className="w-6 h-6" /> },
    { title: "Автосалоны", desc: "Подготовка автомобилей к продаже, покраска дисков в заводской цвет.", icon: <Handshake className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f9ff] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="text-[#1053FF] border-[#1053FF]/30 mb-4 text-xs tracking-widest uppercase">
            Категории
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3">Кто может стать партнёром</h2>
          <p className="text-gray-500 max-w-md mx-auto">Открыты для сотрудничества с разными типами бизнеса</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {types.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1053FF]/10 flex items-center justify-center text-[#1053FF] flex-shrink-0">
                {t.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1a1a2e] mb-2">{t.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CONTACT FORM ===================== */
function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0f1b3d] to-[#1a2b5e] rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1053FF]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Станьте партнёром</h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Оставьте заявку — мы свяжемся с вами в течение рабочего дня и обсудим условия сотрудничества.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => setOpen(true)}
                size="lg"
                className="bg-[#1053FF] hover:bg-[#0d43cc] text-white rounded-xl px-8 py-6 text-base font-semibold shadow-xl shadow-blue-500/30"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Оставить заявку
              </Button>
              <a href="tel:+73422252989">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white bg-white/5 hover:bg-white/10 rounded-xl px-8 py-6 text-base font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +7 (342) 225-29-89
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[520px] p-0 overflow-hidden border-0 shadow-2xl bg-white">
          <BitrixPartnerForm />
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ===================== MAIN PAGE ===================== */
export default function PartneramPage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <PartnerTypesSection />
      <ContactSection />
    </>
  );
}
