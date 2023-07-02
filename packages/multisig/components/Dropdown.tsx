import { useEffect, useRef, useState, type ReactNode } from "react";
import { Typography } from "./Typography";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface DropdownProps {
  currentValue: ReactNode;
  placeholder: string;
  children: (handleClose: () => void) => ReactNode;
}

export const Dropdown = ({
  currentValue,
  placeholder,
  children,
}: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={handleToggle}
        className="w-full h-[52px] flex justify-between items-center px-4 rounded border bg-white border-[#E8ECEF]"
      >
        {currentValue ? (
          currentValue
        ) : (
          <Typography.SMText className="text-[#98A9BC]">
            {placeholder}
          </Typography.SMText>
        )}
        <Image
          src="/chevron-down.svg"
          alt="chevron-down"
          width={16}
          height={16}
        />
      </button>
      {isOpen && (
        <div className="absolute mt-2 rounded top-full left-0 right-0 z-[500] flex flex-col bg-white shadow-md px-4 py-2 max-h-[500px] overflow-y-auto">
          {children(handleClose)}
        </div>
      )}
    </div>
  );
};
