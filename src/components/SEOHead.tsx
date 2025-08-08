import { useI18n } from "@/i18n/i18n";
import { useEffect } from "react";

const SEOHead = () => {
  const { t, lang } = useI18n();

  useEffect(() => {
    // Update document title and meta description based on language
    const title = lang === "en" 
      ? "Midiya — IT Solutions: Website Development, Mobile Apps, ERP Software" 
      : "Midiya — Sayt Sifarişi, Mobil Tətbiq, IT Xidməti, ERP Proqramı";
    
    const description = lang === "en"
      ? "Professional IT services in Azerbaijan: website development, mobile app creation, ERP software, warehouse management systems, industrial solutions and AI technology."
      : "Azərbaycanda peşəkar IT xidməti: sayt sifarişi, saytların yazılması, mobil tətbiq hazırlanması, ERP proqramı, anbar proqramı, sənaye həlləri və AI texnologiyası.";

    const keywords = lang === "en"
      ? "website development, mobile app development, IT services, ERP software, warehouse software, industrial solutions, AI technology, Azerbaijan"
      : "sayt sifarişi, saytların yazılması, it xidməti, mobil tətbiq hazırlanması, erp proqramı, anbar proqramı, sənaye həlləri, AI texnologiyası, Azərbaycan";

    document.title = title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      metaKeywords.setAttribute("content", keywords);
      document.head.appendChild(metaKeywords);
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) ogTitle.setAttribute("content", title);
    if (ogDesc) ogDesc.setAttribute("content", description);

    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    
    if (twitterTitle) twitterTitle.setAttribute("content", title);
    if (twitterDesc) twitterDesc.setAttribute("content", description);

    // Update lang attribute
    document.documentElement.lang = lang;
  }, [lang, t]);

  return null;
};

export default SEOHead;