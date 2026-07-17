import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function PricePage({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-3">Прайс</h1>
          <p className="text-gray-500 text-lg">Цены актуальные 27.06.2026</p>
        </div>

        {/* Price Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-8">
          <img
            src="/images/price-full.png"
            alt="Прайс-лист Атмосфера Колес"
            className="w-full h-auto"
          />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            onClick={onOpenModal}
            size="lg"
            className="bg-[#1053FF] hover:bg-[#0d43cc] text-white rounded-xl px-8 py-6 text-base font-semibold shadow-xl shadow-blue-500/30"
          >
            <Phone className="w-5 h-5 mr-2" />
            Оставить заявку
          </Button>
        </div>
      </div>
    </div>
  );
}
