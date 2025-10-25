"use client";
import Image from "next/image";
import React, { useState } from "react";
import woman from "@public/faq/woman.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Shafin vai er bive hobe naki?",
      answer:
        "Yes, Shafin vai's wedding will happen soon. The date will be announced shortly.",
    },
    {
      question: "Shafin vai er bive hobe naki?",
      answer:
        "The wedding preparations are underway. Family members are currently discussing the details.",
    },
    {
      question: "Shafin vai er bive hobo naki?",
      answer:
        "According to recent updates, the wedding is scheduled for next month with close family and friends.",
    },
    {
      question: "Shafin vai er bive hobe naki?",
      answer:
        "The venue has been booked and invitations will be sent out next week for the ceremony.",
    },
    {
      question: "Shafin vai er bive hobe naki?",
      answer:
        "Final arrangements are being made. The wedding will be a private ceremony followed by a reception.",
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 md:mt-30 grid justify-center px-4">
      <div className="text-center">
        <h1 className="font-bold text-5xl">
          Frequently Asked <span className="text-[#D01127]">Questions</span>{" "}
        </h1>
        <p className="my-5">Quick answers for a smarter PTE journey</p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-15 w-full max-w-7xl mx-auto">
        {/* dropdown section with fixed width */}
        <div className="w-full lg:w-[600px] space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden w-full">
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full bg-[#FFF7F7] p-4 flex justify-between items-center text-left font-medium hover:bg-[#ffecec] transition-all duration-200"
                style={{
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span className="flex-1 pr-4">{item.question}</span>
                <span className="text-xl font-bold ">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="bg-white p-4 border-t border-gray-200 w-full animate-fadeIn">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* image section */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-center items-center -mt-10">
          <Image
            src={woman}
            width={400}
            height={300}
            alt="Woman with question mark"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <span
          className="bg-[#D01127] text-center text-xl px-8 py-2 my-5 text-white rounded-lg cursor-pointer hover:bg-[#b80f22] transition-colors duration-200 inline-block"
          style={{
            boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, 0.2)",
          }}
        >
          All about the PTE Core Exam
        </span>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
