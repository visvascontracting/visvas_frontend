import React, { useState } from 'react';

const FaqQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Since how long has Visvas Construction Contracting Company been in the construction business?",
      answer: "Visvas Construction Contracting Company has been a trusted name in the construction industry for over 25 years, delivering residential, commercial, and industrial projects with excellence, precision, and integrity."
    },
    {
      question: "Does Visvas Construction Contracting Company undertake home designing services?",
      answer: "Yes. We offer end-to-end home designing solutions, including architectural planning, structural design, interior design, and 3D visualization to ensure your dream home is designed perfectly before construction begins."
    },
    {
      question: "Does Visvas Construction Contracting Company undertake any commercial projects?",
      answer: "Absolutely. Alongside residential buildings, we specialize in commercial construction projects such as offices, retail spaces, warehouses, and mixed-use developments."
    },
    {
      question: "Does Visvas Construction Contracting Company offer any construction warranties?",
      answer: "Yes, all our projects come with standard construction warranties that cover structural integrity, workmanship, and material quality to ensure long-term durability and peace of mind."
    },
    {
      question: "Will I get to choose the materials that are planned to be used in my project?",
      answer: "Yes. Clients have full flexibility to choose from a wide range of verified and high-quality materials. Our team provides expert guidance to help you make the best selection for both aesthetics and durability."
    },
    {
      question: "Can I change any project specifications after signing the agreement?",
      answer: "Yes, modifications can be made during the construction process depending on the project stage. However, any design or material change is subject to mutual approval and may affect the cost and timeline."
    },
    {
      question: "Is it mandatory to purchase all materials through Visvas Construction Contracting Company?",
      answer: "Not mandatory, but highly recommended. We source materials from trusted suppliers and brands to maintain consistent quality and ensure seamless project execution."
    },
    {
      question: "Which material categories does Visvas Construction Contracting Company support?",
      answer: "We support all major material categories, including cement, steel, concrete, tiles, sanitaryware, woodwork, electrical fittings, plumbing, and interior finishes."
    },
    {
      question: "How does the selection process work for tiles, sanitaryware, and other fittings?",
      answer: "Our design and procurement teams will assist you in visiting showrooms, reviewing catalogs, or selecting from digital samples. Once approved, we coordinate delivery and installation as per project timelines."
    },
    {
      question: "How are materials delivered and managed at the construction site?",
      answer: "All materials are delivered through verified logistics partners and managed by our on-site supervisors. We ensure safe storage, quality checks, and efficient inventory management throughout the construction phase."
    },
    {
      question: "How does Visvas Construction Contracting Company ensure material quality?",
      answer: "We maintain strict quality control measures, sourcing only from certified and reputed suppliers. Regular on-site inspections and lab tests are conducted to ensure materials meet all required standards."
    },
    {
      question: "Is the cost of materials included in the overall construction package?",
      answer: "Yes. Our turnkey packages include material costs unless stated otherwise. However, clients opting for customized or luxury materials may incur additional costs based on selection."
    },
    {
      question: "How do you manage project timelines and schedules?",
      answer: "We follow a systematic project management process that includes milestone-based tracking, regular client updates, and digital monitoring tools to ensure projects are completed on time."
    },
    {
      question: "How long does it take to construct a residential project?",
      answer: "The duration depends on factors such as project size, design complexity, approvals, and material selection, but typically ranges from 8 to 18 months for residential homes."
    },
    {
      question: "Does Visvas Construction Contracting Company undertake home interior services?",
      answer: "Yes. We provide complete interior solutions—from design concept to execution—covering false ceilings, flooring, furniture, lighting, and modular kitchen installations."
    },
    {
      question: "Does Visvas Construction Contracting Company assist in getting government approvals & loans?",
      answer: "Yes, we help clients with building plan approvals, government clearances, and home construction loans through our network of financial and legal partners."
    },
    {
      question: "Does Visvas Construction Contracting Company provide any protection against delays in the completion of the project?",
      answer: "Yes. We provide timeline guarantees with accountability. In case of unavoidable delays, we maintain full transparency and provide revised schedules with documented reasons."
    },
    {
      question: "What if there is any increase in material prices during the course of the project? Will it be absorbed by the contractor?",
      answer: "Our contracts are designed to ensure fairness. Any significant market fluctuations in material costs are discussed transparently and adjusted based on mutually agreed terms."
    },
    {
      question: "What are the payments process & controls in place for a project?",
      answer: "Payments are structured in milestones aligned with project progress—ensuring transparency and accountability. Each stage is approved before the next payment cycle begins."
    },
    {
      question: "What are the benefits of procuring materials through Visvas Construction Contracting Company?",
      answer: "Procuring materials through us ensures quality assurance, timely delivery, better pricing, and warranty support, backed by our long-standing relationships with leading brands."
    },
    {
      question: "Which brands are partnered with Visvas Construction Contracting Company?",
      answer: "We collaborate with top national and international brands for cement, steel, sanitaryware, paints, tiles, and fittings to ensure high durability and superior finishes."
    },
    {
      question: "Can I use my own vendors for certain materials?",
      answer: "Yes, clients may use their preferred vendors upon approval, provided materials meet our quality and compliance standards."
    },
    {
      question: "What kind of warranties are provided on materials?",
      answer: "Warranties vary by product type and manufacturer. We ensure all materials supplied come with official manufacturer warranties and after-sales support."
    },
    {
      question: "Is there a cost benefit if I procure materials through Visvas Construction Contracting Company?",
      answer: "Yes. We offer bulk purchase benefits and negotiated pricing through our vendor network, which often leads to substantial cost savings for our clients."
    },
    {
      question: "What services do we offer under Project Delivery?",
      answer: "We offer complete project delivery services, including design, planning, material procurement, execution, quality control, and handover—ensuring a hassle-free experience."
    },
    {
      question: "What is your approach to budgeting and cost management?",
      answer: "We follow a transparent and data-driven budgeting system, with detailed estimates, periodic cost reviews, and digital tools to track spending against milestones."
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto p-4 w-full">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center py-1 md:py-3 lg:py-4 focus:outline-none"
              >
                <span className="text-md md:text-lg lg:text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="text-xl md:text-2xl lg:text-2xl text-gray-500 transition-transform duration-200">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm md:text-md lg:text-md text-gray-700 mt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqQuestions;
