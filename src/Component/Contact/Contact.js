import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact_form">
      <form action="https://api.web3forms.com/submit" method="POST">
        <h2>Contact Form</h2>
        <input
          type="hidden"
          name="access_key"
          value="2dac12e3-6d87-4770-9507-8b4157170667"
        />

        <input type="text" name="name" required placeholder="Enter the name" />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter the email"
        />
        <textarea
          name="message"
          required
          placeholder="Enter the Message"
        ></textarea>
        <div class="h-captcha" data-captcha="true"></div>
        <button type="submit">Submit Form</button>
      </form>

      <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  );
}