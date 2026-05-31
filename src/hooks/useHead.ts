import { useEffect } from "react";

export interface HeadMetadata {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterCreator?: string;
  author?: string;
  jsonLd?: Record<string, unknown>;
}

export function useHead(metadata: HeadMetadata) {
  useEffect(() => {
    const {
      title,
      description,
      keywords,
      canonical,
      ogTitle,
      ogDescription,
      ogImage,
      ogUrl,
      twitterCard,
      twitterCreator,
      author,
      jsonLd,
    } = metadata;

    // Update title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false,
    ) => {
      let tag = document.querySelector(
        `meta[${isProperty ? "property" : "name"}="${name}"]`,
      ) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(isProperty ? "property" : "name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Standard meta tags
    if (description) updateMetaTag("description", description);
    if (keywords) updateMetaTag("keywords", keywords);
    if (author) updateMetaTag("author", author);

    // Open Graph
    if (ogTitle) updateMetaTag("og:title", ogTitle, true);
    if (ogDescription) updateMetaTag("og:description", ogDescription, true);
    if (ogImage) updateMetaTag("og:image", ogImage, true);
    if (ogUrl) updateMetaTag("og:url", ogUrl, true);

    // Twitter
    if (twitterCard) updateMetaTag("twitter:card", twitterCard);
    if (twitterCreator) updateMetaTag("twitter:creator", twitterCreator);
    if (ogTitle) updateMetaTag("twitter:title", ogTitle);
    if (ogDescription) updateMetaTag("twitter:description", ogDescription);
    if (ogImage) updateMetaTag("twitter:image", ogImage);

    // Update canonical
    if (canonical) {
      let link = document.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Update JSON-LD structured data
    if (jsonLd) {
      let script = document.querySelector(
        'script[type="application/ld+json"]',
      ) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [metadata]);
}
