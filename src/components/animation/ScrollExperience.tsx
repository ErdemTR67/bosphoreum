"use client";

import { useEffect } from "react";

const revealGroups = [
  ".positioning__banks",
  ".service-crossing",
  ".method-path",
  ".work__project",
  ".about",
  ".contact__body",
  ".final-cta__inner",
  ".interior-hero__inner",
  ".route-services-list",
  ".route-method-list",
  ".service-detail",
  ".route-project",
  ".route-about",
  ".route-contact",
  ".booking-outcomes",
  ".booking-system__steps",
  ".booking-audiences__banks",
  ".booking-trust__inner",
] as const;

function getRevealVariant(element: HTMLElement) {
  if (element.matches(".service-crossing")) {
    return "crossing";
  }

  if (element.matches(".method-path")) {
    return "path";
  }

  if (
    element.matches(
      ".positioning__banks, .about, .contact__body, .booking-audiences__banks, .booking-trust__inner",
    )
  ) {
    return "banks";
  }

  return "settle";
}

export function ScrollExperience() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      return;
    }

    const root = document.documentElement;
    const revealElements = revealGroups.flatMap((selector) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector)),
    );
    const uniqueRevealElements = [...new Set(revealElements)];

    root.classList.add("has-scroll-motion");

    uniqueRevealElements.forEach((element, index) => {
      element.dataset.scrollReveal = getRevealVariant(element);
      if (element.matches(".service-crossing")) {
        element.style.setProperty("--crossing-order", `${index}`);
      }
    });

    const reveal = (element: Element) => {
      element.classList.add("is-scroll-visible");
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          reveal(entry.target);
          revealObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -4% 0px",
        threshold: 0.01,
      },
    );

    const revealVisibleElements = () => {
      uniqueRevealElements.forEach((element) => {
        if (element.classList.contains("is-scroll-visible")) {
          return;
        }

        const bounds = element.getBoundingClientRect();
        const isEnteringViewport =
          bounds.bottom > 0 && bounds.top < window.innerHeight * 0.96;

        if (isEnteringViewport) {
          reveal(element);
          revealObserver.unobserve(element);
        }
      });
    };

    uniqueRevealElements.forEach((element) => revealObserver.observe(element));
    revealVisibleElements();

    const hero = document.querySelector<HTMLElement>(".hero");
    const interiorHero =
      document.querySelector<HTMLElement>(".interior-hero");
    let frame = 0;

    const renderScroll = () => {
      frame = 0;

      if (hero) {
        const heroProgress = Math.min(
          Math.max(window.scrollY / hero.offsetHeight, 0),
          1,
        );

        hero.style.setProperty(
          "--hero-video-shift",
          `${(heroProgress * 5).toFixed(2)}vh`,
        );
        hero.style.setProperty(
          "--hero-video-scale",
          (1 + heroProgress * 0.055).toFixed(4),
        );
        hero.style.setProperty(
          "--hero-brand-shift",
          `${(-heroProgress * 5.5).toFixed(2)}rem`,
        );
        hero.style.setProperty(
          "--hero-statement-shift",
          `${(-heroProgress * 2.5).toFixed(2)}rem`,
        );
        hero.style.setProperty(
          "--hero-content-opacity",
          Math.max(1 - heroProgress * 1.35, 0).toFixed(3),
        );
      }

      if (interiorHero) {
        const bounds = interiorHero.getBoundingClientRect();
        const progress = Math.min(
          Math.max(-bounds.top / Math.max(bounds.height, 1), 0),
          1,
        );

        interiorHero.style.setProperty(
          "--interior-title-shift",
          `${(-progress * 3.5).toFixed(2)}rem`,
        );
        interiorHero.style.setProperty(
          "--interior-meta-shift",
          `${(progress * 1.5).toFixed(2)}rem`,
        );
      }

    };

    const requestRender = () => {
      revealVisibleElements();

      if (!frame) {
        frame = window.requestAnimationFrame(renderScroll);
      }
    };

    renderScroll();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      root.classList.remove("has-scroll-motion");

      uniqueRevealElements.forEach((element) => {
        delete element.dataset.scrollReveal;
        element.classList.remove("is-scroll-visible");
        element.style.removeProperty("--crossing-order");
      });
    };
  }, []);

  return null;
}
