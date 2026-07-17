import { useState, useEffect, useCallback, useRef } from 'react';
import { useBooking } from '../../hooks/useBooking';
import { X, Check, Phone } from 'lucide-react';

type FormState = 'form' | 'submitting' | 'success';

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking();
  const [phone, setPhone] = useState('');
  const [formState, setFormState] = useState<FormState>('form');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.startsWith('7')) v = v.slice(1);
    if (v.length > 10) v = v.slice(0, 10);
    setPhone(v); setError('');
  };

  const fmt = (v: string) => {
    if (!v) return '+7';
    let f = '+7';
    f += ' (' + v.slice(0, 3);
    if (v.length >= 3) f += ')';
    if (v.length > 3) f += ' ' + v.slice(3, 6);
    if (v.length > 6) f += '-' + v.slice(6, 8);
    if (v.length > 8) f += '-' + v.slice(8, 10);
    return f;
  };

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) { setError('Введите полный номер'); return; }
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
    setTimeout(() => { closeBooking(); setTimeout(() => { setFormState('form'); setPhone(''); }, 300); }, 3500);
  }, [phone, closeBooking]);

  const handleClose = useCallback(() => {
    closeBooking();
    setTimeout(() => { setFormState('form'); setPhone(''); setError(''); }, 300);
  }, [closeBooking]);

  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 100); }, [isOpen]);
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) handleClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [isOpen, handleClose]);
  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [isOpen]);

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className="modal-box">
        <button onClick={handleClose} className="modal-close-btn"><X className="w-5 h-5" /></button>
        {formState === 'success' ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-[#1053FF]/15 rounded-full flex items-center justify-center mx-auto mb-5">
              <Check className="w-7 h-7 text-[#1053FF]" />
            </div>
            <h3 className="text-[20px] font-semibold text-white mb-1">Спасибо!</h3>
            <p className="text-white/45 text-[14px]">Мы скоро позвоним</p>
          </div>
        ) : (
          <>
            <h3 className="text-[20px] font-semibold text-white mb-1">Записаться</h3>
            <p className="text-white/35 text-[13px] mb-6">Оставьте номер, мы перезвоним</p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-3">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                <input ref={inputRef} type="tel" value={fmt(phone)} onChange={handlePhoneChange} className={`phone-input ${error ? 'border-red-500/50' : ''}`} />
              </div>
              {error && <p className="text-red-400 text-[12px] mb-2">{error}</p>}
              <button type="submit" disabled={formState === 'submitting'} className="w-full bg-[#1053FF] text-white font-medium py-3.5 rounded-lg hover:bg-[#2563FF] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 text-[15px]">
                {formState === 'submitting' ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Отправка...</> : 'Отправить'}
              </button>
            </form>
            <p className="text-white/15 text-[11px] text-center mt-4">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
          </>
        )}
      </div>
    </div>
  );
}
