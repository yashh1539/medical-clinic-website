import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("contactForm not found");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contact_messages"), {
        name: document.getElementById("c_name").value,
        email: document.getElementById("c_email").value,
        subject: document.getElementById("c_subject").value,
        message: document.getElementById("c_message").value,
        createdAt: new Date()
      });

      alert("📩 Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Firestore error:", error);
      alert("❌ Failed to send message");
    }
  });
});
