import React from 'react';

function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <textarea placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
