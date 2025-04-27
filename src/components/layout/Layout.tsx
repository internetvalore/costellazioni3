import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

const Layout: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Preload critical fonts */}
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Google Tag Manager */}
        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TTHM5L');

            // Initialize dataLayer
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Custom event tracking for form submissions
            document.addEventListener('submit', function(e) {
              if (e.target.getAttribute('data-netlify') === 'true') {
                const formName = e.target.getAttribute('name');
                dataLayer.push({
                  'event': 'form_submission',
                  'form_name': formName
                });
              }
            });

            // Custom event tracking for CTA clicks
            document.addEventListener('click', function(e) {
              // Track clicks on elements with class 'btn-primary'
              if (e.target.closest('.btn-primary')) {
                dataLayer.push({
                  'event': 'cta_click',
                  'button_text': e.target.innerText
                });
              }
              
              // Track clicks on download guide links
              if (e.target.closest('a[href*="/risorse/guide-download/"]')) {
                dataLayer.push({
                  'event': 'guide_download_click',
                  'guide_url': e.target.href
                });
              }
            });
          `}
        </script>
      </Helmet>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TTHM5L"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="GTM"
        ></iframe>
      </noscript>

      <div className="flex flex-col min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary-600">
          Salta al contenuto principale
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Caricamento...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;