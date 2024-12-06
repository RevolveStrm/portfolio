import Script from "next/script";

const GTag = () => (
  <>
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-KJ1V1RR3KM"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-KJ1V1RR3KM');
      `}
    </Script>
  </>
);

export default GTag;
