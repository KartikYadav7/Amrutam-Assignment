import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  { question: 'What is Amrutam?', answer: 'Amrutam is a holistic platform for health and wellness practitioners...' },
  { question: 'How does Amrutam help me grow as a practitioner?', answer: 'It connects you with patients, manages appointments, and more.' },
  { question: 'How do I become a part of Amrutam Doctor?', answer: 'You can register through the app by submitting your credentials.' },
  { question: 'What is Amrutam Global as a platform?', answer: 'Amrutam Global connects practitioners and patients worldwide.' },
  { question: 'What documents do I need to provide?', answer: 'ID proof, medical license, and qualification certificates.' },
  { question: 'Is there a fee to join Amrutam?', answer: 'No, joining the platform is completely free.' },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-[DM Sans] py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#33643F]">Frequently Asked Questions</h2>
        <p className="text-[#4C4C4C] mt-2">
          Find quick answers to common questions to help you navigate the app and its features easily.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 divide-y divide-[#3A643C]">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4 cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center text-left">
              <h3 className="text-lg font-medium text-[#666666]">{faq.question}</h3>
              <span className="text-[#666666]">
                {openIndex === index ? <FaMinus size={11} /> : <FaPlus size={11} />}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-[#666666] text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#3A643C] text-white font-medium px-6 py-3 rounded-md cursor-pointer transition">
          See More
        </button>
      </div>
    </section>
  );
}
