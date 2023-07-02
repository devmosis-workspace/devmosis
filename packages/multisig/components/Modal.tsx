import {
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { Typography } from "./Typography";
import Image from "next/image";

interface ModalProps extends PropsWithChildren {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  footer: ReactNode;
}

export const Modal = ({
  title,
  isOpen,
  children,
  onClose,
  footer,
}: ModalProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useEffect(
    function lockBodyScroll() {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return () => {
        document.body.style.overflow = "unset";
      };
    },
    [isOpen]
  );

  return (
    <>
      {!isSSR &&
        isOpen &&
        createPortal(
          <div className="fixed top-0 left-0 right-0 bottom-0 z-[1000] flex justify-center items-center p-10">
            <div
              className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-[1000]"
              onClick={onClose}
            />
            <div className="rounded bg-white flex flex-col max-w-[750px] z-[1001] w-full">
              <div className="w-full rounded-t bg-white flex justify-between items-center px-6 h-16">
                <Typography.H3>{title}</Typography.H3>
                <button type="button" onClick={onClose} className="p-2 -mr-2">
                  <Image src="/close.svg" alt="close" width={25} height={25} />
                </button>
              </div>
              <div className="w-full flex flex-col p-6 bg-[#F8FAFB]">
                {children}
              </div>
              <div className="w-full flex p-6 rounded-b bg-white">{footer}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
