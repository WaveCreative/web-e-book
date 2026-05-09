import { ReactNode } from "react";

interface DropdownShellProps {
  children: ReactNode;
  onMouseLeave?: () => void;
  shellRef?: React.Ref<HTMLDivElement>;
}

function DropdownShell({ children, onMouseLeave, shellRef }: DropdownShellProps) {
  return (
    <div
      ref={shellRef}
      className="relative flex items-center gap-2"
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

export default DropdownShell;
