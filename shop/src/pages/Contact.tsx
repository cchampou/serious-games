import React from 'react';
import pageLayout from '../hocs/pageLayout';
import ContactForm from '../components/contactForm/ContactForm';

type Props = Record<string, never>;

function Contact() {
  return <ContactForm />;
}

export default pageLayout<Props>(Contact);
