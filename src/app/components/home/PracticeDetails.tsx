"use client";

interface PracticeDetail {
  id: string;
  title: string;
  count: string;
  label: string;
  description: string[];
}

const PRACTICE_DETAILS: Record<string, PracticeDetail> = {
  speaking: {
    id: "speaking",
    title: "Speaking Practice",
    count: "+4000",
    label: "Speaking Question",
    description: [
      "Master PTE Core Speaking with Real-Time AI Feedback.",
      "Practice Repeat Sentence, Describe Image, and Retell Lecture with instant feedback on accuracy, fluency, and pronunciation.",
      "Build confidence through real exam style questions designed to mirror authentic PTE Core experiences.",
    ],
  },
  writing: {
    id: "writing",
    title: "Writing Practice",
    count: "+3500",
    label: "Writing Task",
    description: [
      "Enhance your writing skills with comprehensive PTE Core Writing practice.",
      "Master Summarize Written Text and Write Essay with detailed feedback on grammar, vocabulary, and structure.",
      "Develop proficiency through targeted exercises aligned with real exam requirements.",
    ],
  },
  reading: {
    id: "reading",
    title: "Reading Practice",
    count: "+4500",
    label: "Reading Passage",
    description: [
      "Improve reading comprehension with extensive PTE Core Reading materials.",
      "Practice Multiple Choice, Re-order Paragraphs, and Fill in the Blanks with instant performance analysis.",
      "Build speed and accuracy through diverse passage types and question formats.",
    ],
  },
  listening: {
    id: "listening",
    title: "Listening Practice",
    count: "+3800",
    label: "Listening Task",
    description: [
      "Strengthen listening skills with authentic PTE Core audio content.",
      "Practice Summarize Spoken Text, Multiple Choice, and Fill in the Blanks with detailed feedback.",
      "Develop ear training through varied accents and real-world speaking scenarios.",
    ],
  },
};

interface PracticeDetailsProps {
  activeCardId: string;
}

export function PracticeDetails({ activeCardId }: PracticeDetailsProps) {
  const detail = PRACTICE_DETAILS[activeCardId];

  if (!detail) return null;

  return (
    <div className="lg:w-6xl lg:h-72 p-8 rounded-2xl bg-white border border-[#E5E7EB] mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Left side - Number and Label */}
      <div className="flex flex-col items-center justify-center lg:w-1/3">
        <div className="text-6xl font-bold text-[#7D0000]">{detail.count}</div>
        <div className="text-xl font-semibold text-gray-800 mt-4">
          {detail.label}
        </div>
      </div>
      <div className="h-55 hidden lg:block border border-[#E5E7EB]"></div>

      {/* Right side - Title and Description */}
      <div className="lg:w-2/3">
        <h2 className="text-4xl font-bold text-[#7D0000] mb-6">
          {detail.title}
        </h2>
        <ul className="space-y-4">
          {detail.description.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 text-gray-700 leading-relaxed"
            >
              <span className="text-[#7D0000] font-bold mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
