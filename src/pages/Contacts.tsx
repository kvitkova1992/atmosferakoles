import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { useBooking } from '../hooks/useBooking';

export default function Contacts() {
  const { openBooking } = useBooking();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="bg-[#0A0A0A] pt-[64px]">
      <section className="py-14">
        <div className="c">
          <Link to="/" className="back-arrow">
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>
          <span className="label-red">Связаться</span>
          <h1 className="h1-fk mb-10">Контакты</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-7">
              <div>
                <a href="tel:+73422252989" className="text-[28px] md:text-[36px] font-bold text-white hover:text-[#1053FF] transition-colors flex items-center gap-3">
                  <Phone className="w-7 h-7 text-[#1053FF]" />
                  +7 (342) 225-29-89
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white/25 mt-0.5 flex-shrink-0" />
                  <p className="text-[15px] text-white/55">Пермь, Хлебозаводская, 30а</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-white/25 mt-0.5 flex-shrink-0" />
                  <p className="text-[15px] text-white/55">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
              <div className="pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/25 mb-4">Мы в соцсетях</p>
                <div className="flex gap-5">
                  <a href="https://www.instagram.com/atmosfera_koles" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/45 hover:text-[#1053FF] transition-colors text-[14px]">
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                  <a href="https://vk.com/atmosfera_koles" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/45 hover:text-[#1053FF] transition-colors text-[14px]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.673 4 8.198c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.847 2.49 2.271 4.675 2.857 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.644v3.473c0 .373.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.644-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.744-.576.744z"/></svg>
                    VK
                  </a>
                </div>
              </div>
              <button onClick={openBooking} className="btn-red">Записаться</button>
            </div>
            <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <iframe src="https://yandex.ru/map-widget/v1/?ll=56.246306%2C57.968162&z=15&mode=search&whatshere%5Bpoint%5D=56.246306%2C57.968162&whatshere%5Bzoom%5D=17" width="100%" height="100%" className="w-full min-h-[380px]" style={{ border: 'none', filter: 'grayscale(0.5)' }} title="Карта" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
