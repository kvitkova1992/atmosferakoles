import { X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BitrixWidget({ onOpenModal }: { onOpenModal: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Mini widget */}
      {!open && (
        <button
          onClick={onOpenModal}
          className="flex items-center gap-3 bg-white rounded-full shadow-xl border border-gray-100 pr-5 pl-1 py-1 hover:shadow-2xl transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-[#1053FF] overflow-hidden flex-shrink-0 border-2 border-[#1053FF]">
            <img src="/images/hero-plate.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-semibold text-[#1a1a2e]">Оставить заявку</span>
        </button>
      )}

      {/* Expanded form */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-[320px] overflow-hidden">
          <div className="bg-gradient-to-r from-[#0f1b3d] to-[#1a2b5e] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1053FF] overflow-hidden border border-white/20">
              <img src="/images/hero-plate.webp" alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Атмосфера Колёс</p>
              <p className="text-white/50 text-xs">Консультант</p>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/50 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-sm text-gray-600 mb-4">
              Оставьте заявку — мы перезвоним в течение 15 минут.
            </p>
            <Button
              onClick={() => { onOpenModal(); setOpen(false); }}
              className="w-full h-12 bg-[#1053FF] hover:bg-[#0d43cc] text-white font-semibold rounded-xl"
            >
              <Phone className="w-4 h-4 mr-2" />
              Оставить заявку
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
