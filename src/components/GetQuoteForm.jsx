import React, {useEffect} from 'react'

const GetQuoteForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        script.async = true;
        document.body.appendChild(script);
        
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <div class="visme_d" data-title="Contact Form" data-url="kkjwmm0x-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="41867"></div>
  )
}

export default GetQuoteForm