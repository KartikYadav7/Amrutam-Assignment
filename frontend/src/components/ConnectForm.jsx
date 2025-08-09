import React, { useState } from 'react';

const ConnectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  alert ("Thank you for reaching out! We will get back to you soon.");
};


  return (
    <section className="bg-[#FFF7E2] px-6 py-16 font-[DM Sans]">
      <div className="max-w-6xl mx-auto text-center mb-2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#33643F] mb-4">Let’s Connect</h2>
        <p className="text-[#4C4C4C] max-w-xl mx-auto">
         We’re here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or personalized advice.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center ">
        <div className='p-6 md:p-15'>
        <img
          src="/connectForm.png"
          alt="turmeric and spoon"
          className="rounded-xl w-full h-fit  object-cover"
        />
        </div>

        <div className=' border border-[#C2C2C2] rounded-md '>
        <form
          onSubmit={handleSubmit}
          className="p-6 md:p-8 space-y-6 "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1 text-[#3A643B]">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-[#C2C2C2] bg-transparent outline-none py-2 text-[#7E7E7E]"
                placeholder="Vikas Kumar"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[#3A643B] mb-1">Your Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full border-b border-[#C2C2C2] bg-transparent outline-none py-2 text-[#7E7E7E]"
                placeholder="8743414476"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#3A643B] mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-[#C2C2C2] bg-transparent outline-none py-2 text-[#7E7E7E]"
              placeholder="vikass@gmail.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#3A643B] mb-1">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full border-b border-[#C2C2C2] bg-transparent outline-none py-2 resize-none"
              placeholder="I want to On-board as a Doctor"
            />
          </div>
          <button
            type="submit"
            className="bg-[#315918] hover:bg-[#2f522f] text-white font-bold py-2 px-6 rounded-md transition cursor-pointer "
          >
            Send Message
          </button>
        </form>
</div>
      </div>
    </section>
  );
};

export default ConnectForm;
