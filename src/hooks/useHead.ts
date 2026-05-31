import { useEffect } from "react";

export interface HeadMetadata {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
}

export function useHead(metadata: HeadMetadata) {
  useEffect(() => {
    const {
      title,
      description,
      canonical,
      ogTitle,
      ogDescription,
      ogImage,
      ogUrl,
      twitterCard,
    } = metadata;

    // Update title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string) => {
      let tag =
        document.querySelector(`meta[property="${property}"]`) ||
        document.querySelector(`meta[name="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        if (property.startsWith("og:") || property.startsWith("twitter:")) {
          tag.setAttribute("property", property);
        } else {
          tag.setAttribute("name", property);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    if (description) updateMetaTag("description", description);
    if (ogTitle) updateMetaTag("og:title", ogTitle);
    if (ogDescription) updateMetaTag("og:description", ogDescription);
    if (ogImage) updateMetaTag("og:image", ogImage);
    if (ogUrl) updateMetaTag("og:url", ogUrl);
    if (twitterCard) updateMetaTag("twitter:card", twitterCard);

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
  }, [metadata]);
}
