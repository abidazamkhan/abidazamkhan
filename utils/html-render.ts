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

const normalizeHtml = (value: string) => {
  const raw = value.trim();
  if (!raw) return "";

  if (raw.includes("<")) {
    return sanitizeHtml(raw);
  }

  const lines = raw
    .split(/\n|\u2022|\*/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length > 1) {
    return `<ul>${lines
      .map((line) => `<li>${escapeHtml(line)}</li>`)
      .join("")}</ul>`;
  }

  return `<p>${escapeHtml(raw)}</p>`;
};

export const hasHtmlContent = (value: HtmlLike) => Boolean(value?.trim());

export const toSafeHtml = (value: HtmlLike) => ({
  __html: normalizeHtml(value || ""),
});
