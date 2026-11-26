/** Canonical origin. Override with NEXT_PUBLIC_SITE_URL if the public domain changes. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tatsiana-portfolio.vercel.app";

/**
 * Search-engine ownership codes. Leave "" until the code is received from the
 * service; an empty value renders no tag. Codes are public (not passwords).
 * - Google Search Console: "HTML tag" method, the value of content="..."
 * - Yandex Webmaster: meta tag method, content of <meta name="yandex-verification">
 * - Bing Webmaster Tools: meta tag method, content of <meta name="msvalidate.01">
 *   (not needed when the site is imported from Google Search Console)
 */
export const SEARCH_VERIFICATION = {
  google: "npa7RD4dMULDjeb4VNkzaAOaRcOjq45Dic3KoB_bgco",
  yandex: "",
  bing: "",
} as const;

/**
 * IndexNow key (Yandex, Bing). The same string must exist as /public/<key>.txt
 * with the key as its only content.
 */
export const INDEXNOW_KEY = "fe98c0021d0dbe8e8f4d5aeb318abaaf";
