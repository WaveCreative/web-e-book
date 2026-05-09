import { useEffect, useRef, useState } from "react";

function useDropdown() {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
        setPinned(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChevronClick = () => {
    setOpen((prev) => {
      const next = !prev;
      setPinned(next);
      return next;
    });
  };

  const handleMouseLeave = () => {
    if (!pinned) setOpen(false);
  };

  const handleHoverOpen = () => setOpen(true);

  return {
    open,
    dropdownRef,
    handleChevronClick,
    handleMouseLeave,
    handleHoverOpen,
  };
}

export default useDropdown;
