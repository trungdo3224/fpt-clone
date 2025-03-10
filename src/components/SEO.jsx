import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/images/fpt-telecom-og.jpg', 
  url,
  type = 'website',
  structuredData = null 
}) => {
  // Combine with site name
  const fullTitle = title ? `${title} | FPT Telecom` : 'FPT Telecom - Nhà cung cấp Internet hàng đầu Việt Nam';
  
  // Default description if none provided
  const metaDescription = description || 'FPT Telecom cung cấp dịch vụ Internet, truyền hình, camera an ninh và các giải pháp công nghệ hàng đầu Việt Nam với chất lượng cao và giá cả hợp lý';
  
  // Default keywords
  const metaKeywords = keywords || 'FPT, Internet, Cáp quang, Truyền hình, Camera, Wifi, Băng thông rộng, Lắp mạng';

  // Site URL
  const siteUrl = url || 'https://fpttelecoms.com';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={image} />
      
      {/* Structured Data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;