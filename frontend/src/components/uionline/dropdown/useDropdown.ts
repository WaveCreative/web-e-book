import { useEffect, useRef, useState } from "react";

function useDropdown() {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current) return;

      if (!dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
        setPinned(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleHoverOpen = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (pinned) return;

    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300); 
  };

  const handleChevronClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setOpen((prev) => {
      const next = !prev;
      setPinned(next);
      return next;
    });
  };

  return {
    open,
    dropdownRef,
    handleChevronClick,
    handleMouseLeave,
    handleHoverOpen,
  };
}

export default useDropdown;