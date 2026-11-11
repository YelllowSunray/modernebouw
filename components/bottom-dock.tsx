import { StyleSwitcher } from "@/components/style-switcher";
import { defaultWhatsAppMessage, whatsappHref } from "@/lib/content";

export function BottomDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:pointer-events-none">
      <div className="dock-bar flex flex-col items-center gap-2 border-t border-line bg-elev/95 px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:border-0 md:bg-transparent md:pt-0 md:pb-5 md:backdrop-blur-none">
        <div className="style-slot w-full md:w-auto md:pointer-events-auto">
          <StyleSwitcher />
        </div>
        <div className="mobile-cta grid w-full grid-cols-2 gap-2 md:hidden" aria-hidden="true">
          <a className="btn-ghost" href={whatsappHref(defaultWhatsAppMessage)} tabIndex={-1}>
            WhatsApp
          </a>
          <a className="btn" href="/contact" tabIndex={-1}>
            Plan een opname
          </a>
        </div>
      </div>
    </div>
  );
}
