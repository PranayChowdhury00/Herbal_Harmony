import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const faqs = [
    { question: "How can I book an appointment?", answer: "You can book an appointment using our online booking system or by calling us directly." },
    { question: "Where is your office located?", answer: "We are located at 123 Business Street, Dhaka." },
    { question: "Do you offer online consultations?", answer: "Yes, we offer online video consultations. Contact us for more details." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#214F4B] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-200 mb-10" data-aos="fade-up">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4 text-white" data-aos="fade-up" data-aos-delay={index * 100}>
              <button
                className="w-full text-left text-lg font-medium flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && <p className="text-gray-300 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
