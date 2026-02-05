import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appointmentForm");

  if (!form) {
    console.error("appointmentForm not found");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "appointments"), {
        patientName: document.getElementById("a_name").value,
        phone: document.getElementById("a_phone").value,
        email: document.getElementById("a_email").value || "",
        date: document.getElementById("a_date").value,
        message: document.getElementById("a_message").value || "",
        createdAt: new Date()
      });

      alert("✅ Appointment booked successfully!");
      form.reset();
    } catch (error) {
      console.error("Firestore error:", error);
      alert("❌ Failed to book appointment");
    }
  });
});
