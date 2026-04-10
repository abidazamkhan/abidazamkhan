type HtmlLike = string | null | undefined;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const sanitizeHtml = (value: string) =>
  value
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, "")
    .replace(/\son\w+\s*=\s*'[^']*'/gi, "")
    .replace(/javascript:/gi, "");

const wrapDynamicLabel = (value: string) =>
  value
    .replace(
      /<\s*(b|strong)\b[^>]*>\s*([^<:\n]{2,120}:)\s*<\s*\/\s*(b|strong)\s*>/gi,
      '<span class="dynamic-label">$2</span>',
    )
    .replace(
      /<(li|p)([^>]*)>\s*("?)([^<:\n]{2,120}:)(?=\s)/gi,
      '<$1$2>$3<span class="dynamic-label">$4</span>',
    );

const normalizeHtml = (value: string) => {
  const raw = value.trim();
  if (!raw) return "";

  if (raw.includes("<")) {
    return wrapDynamicLabel(sanitizeHtml(raw));
  }

  return escapeHtml(raw);
};

export const hasHtmlContent = (value: HtmlLike) => Boolean(value?.trim());

export const toSafeHtml = (value: HtmlLike) => ({
  __html: normalizeHtml(value || ""),
});
