import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

const Modal = forwardRef(
  (
    {
      isOpen: _isOpen,
      onAfterOpen,
      onAfterClose,
      onRequestClose,
      closeTimeoutMS = 10,
      overlayClassName = "",
      className = "",
      bodyOpenClassName = "modal-open",
      htmlOpenClassName = "modal-open",
      shouldCloseOnOverlayClick = true,
      shouldCloseOnEsc = true,
      children,
    },
    ref
  ) => {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(_isOpen ?? false);

    const overlayRef = useRef(null);
    const contentRef = useRef(null);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((prev) => !prev),
    }));

    useEffect(() => {
      setIsOpen(_isOpen ?? false);
    }, [_isOpen]);

    useEffect(() => {
      if (isOpen) {
        setMounted(true);

        const t = setTimeout(() => {
          onAfterOpen?.();
        }, closeTimeoutMS);

        return () => clearTimeout(t);
      } else if (mounted) {
        const t = setTimeout(() => {
          setMounted(false);
          onAfterClose?.();
        }, closeTimeoutMS);

        return () => clearTimeout(t);
      }
    }, [isOpen, mounted, closeTimeoutMS, onAfterOpen, onAfterClose]);

    useEffect(() => {
      if (isOpen) {
        document.body.classList.add(bodyOpenClassName);
        document.documentElement.classList.add(htmlOpenClassName);
      } else {
        document.body.classList.remove(bodyOpenClassName);
        document.documentElement.classList.remove(htmlOpenClassName);
      }
      return () => {
        document.body.classList.remove(bodyOpenClassName);
        document.documentElement.classList.remove(htmlOpenClassName);
      };
    }, [isOpen, bodyOpenClassName, htmlOpenClassName]);

    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape" && shouldCloseOnEsc) {
          onRequestClose?.(e);
        }
      };
      if (isOpen) {
        document.addEventListener("keydown", handleKeyDown);
      }
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, shouldCloseOnEsc, onRequestClose]);

    const handleOverlayClick = (e) => {
      if (
        shouldCloseOnOverlayClick &&
        e.target.classList.contains("modal-overlay")
      ) {
        onRequestClose?.(e);
      }
    };

    if (!mounted) return null;

    return (
      <div
        style={{
          animation: isOpen
            ? `modalBackdropFadeIn ${closeTimeoutMS}ms forwards`
            : `modalBackdropFadeOut ${closeTimeoutMS}ms forwards`,
        }}
        ref={overlayRef}
        onClick={handleOverlayClick}
        className={twMerge(
          "fixed inset-0 flex items-center justify-center modal-overlay bg-black/50",
          overlayClassName
        )}
      >
        <div
          style={{
            animation: isOpen
              ? `modalFadeIn ${closeTimeoutMS}ms forwards`
              : `modalFadeOut ${closeTimeoutMS}ms forwards`,
          }}
          ref={contentRef}
          className={twMerge(
            "bg-white p-6 rounded-2xl shadow-lg w-120 transform",
            className
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default Modal;
