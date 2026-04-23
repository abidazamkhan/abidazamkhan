"use client";

import type { MouseEvent } from "react";

/**
 * Replaces `href="javascript:void(0)"` (blocked by React 19+) with a safe
 * in-page hash + preventDefault so existing jQuery / bundle handlers still
 * see normal click events.
 */
function noopAnchor(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
}

/**
 * Top nav hamburger that opens the side menu. IDs/classes must match theme JS.
 */
export function SidemenuToggle() {
  return (
    <a
      href="#"
      onClick={noopAnchor}
      className="sidemenu_btn"
      id="sidemenu_toggle"
      role="button"
      aria-label="Open navigation menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
}

/** Invisible overlay link used by theme to close the side menu. */
export function CloseSideMenuOverlay() {
  return (
    <a
      id="close_side_menu"
      href="#"
      onClick={noopAnchor}
      tabIndex={-1}
      aria-hidden
    ></a>
  );
}
