import React, { useEffect } from 'react';

const ContactForm = () => {
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
    <div class="visme_d" data-title="Contact Form" data-url="vdnremjz-contact-form?sidebar=true" data-domain="forms" data-full-page="false" data-min-height="600px" data-form-id="41844"></div>
  );
};
export default ContactForm;

// import React, { useEffect } from 'react';

// const VismeForm = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   useEffect(() => {
//     const disableReactEventHandling = () => {
//       const vismeForm = document.querySelector('.visme_d iframe');
//       vismeForm.contentWindow.React = null;
//     };

//     disableReactEventHandling();

//     return () => {
//       // Clean up any resources or event listeners if needed
//     };
//   }, []);

//   return (
//     <div className="visme_d"
//       data-title="Blog Contact Form"
//       data-url="vdno44gd-blog-contact-form?sidebar=true"
//       data-domain="forms"
//       data-full-page="false"
//       data-min-height="600px"
//       data-form-id="35795">
//     </div>
//   );
// };

// export default VismeForm;