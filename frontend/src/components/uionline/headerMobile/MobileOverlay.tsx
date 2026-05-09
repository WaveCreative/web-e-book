import { ReactNode } from "react";

interface MobileOverlayProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function MobileOverlay({ open, onClose, children }: MobileOverlayProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 h-screen w-screen bg-black/50 md:hidden"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default MobileOverlay;
