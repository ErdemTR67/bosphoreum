"use client";

import type { CSSProperties } from "react";
import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { navigationItems } from "@/content/site";

type MobileMenuProps = {
  activePath?: string;
  tone: "light" | "ink";
};

export function MobileMenu({ activePath, tone }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && panelRef.current) {
        const focusableElements = [
          triggerRef.current,
          ...panelRef.current.querySelectorAll<HTMLElement>("a[href], button"),
        ].filter((element): element is HTMLElement => element !== null);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements.at(-1);

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => firstLinkRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className={`mobile-menu mobile-menu--${tone}${isOpen ? " is-open" : ""}`}
    >
      <button
        ref={triggerRef}
        className="mobile-menu__trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{isOpen ? "Fermer" : "Menu"}</span>
        <span className="mobile-menu__icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      {isOpen ? (
        <div
          ref={panelRef}
          id={panelId}
          className="mobile-menu__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation principale"
        >
          <Link className="mobile-menu__brand" href="/" onClick={closeMenu}>
            Bosphoreum
          </Link>

          <nav aria-label="Navigation mobile">
            <ol className="mobile-menu__links">
              {navigationItems.map((item, index) => {
                const isCurrent =
                  activePath === item.href ||
                  (item.href === "/services" &&
                    activePath?.startsWith("/services/"));

                return (
                  <li
                    key={item.href}
                    style={{ "--menu-index": index } as CSSProperties}
                  >
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      aria-current={isCurrent ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>

          <Link
            className="mobile-menu__cta"
            href="/contact"
            onClick={closeMenu}
          >
            <span>Parler de votre projet</span>
            <span className="mobile-menu__passage" aria-hidden="true" />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
