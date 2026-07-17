import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useRef } from "react";

export default function ContactModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '<div id="bitrix-form-container" style="width:100%;min-height:400px;"></div>';

    // Load Bitrix24 form loader script
    const loaderScript = document.createElement('script');
    loaderScript.async = true;
    loaderScript.src = 'https://cdn-ru.bitrix24.ru/b19373380/crm/form/loader_239.js?' + (Date.now() / 180000 | 0);
    
    loaderScript.onload = () => {
      // After loader is loaded, initialize the form
      const formScript = document.createElement('script');
      formScript.setAttribute('data-b24-form', 'inline/239/lrq4w1');
      formScript.setAttribute('data-skip-moving', 'true');
      formScript.setAttribute('data-b24-domain', 'b24-lrq4w1.bitrix24.ru');
      container.appendChild(formScript);
      
      // Trigger Bitrix form initialization
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
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-4 overflow-hidden border-0 shadow-2xl bg-white">
        <div ref={containerRef} className="w-full" />
      </DialogContent>
    </Dialog>
  );
}
