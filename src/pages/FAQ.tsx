import React from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors pr-8">
          {question}
        </span>
        {isOpen ? (
          <Minus className="h-6 w-6 text-purple-500 flex-shrink-0" />
        ) : (
          <Plus className="h-6 w-6 text-purple-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-8 pr-12">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const faqs = [
  {
    question: "What makes The Business of Song unique?",
    answer: "We combine AI-powered music generation with human expertise to create custom songs that perfectly match your brand's voice and message. Our innovative approach ensures each piece is original, memorable, and tailored to your specific needs."
  },
  {
    question: "How long does it take to create a custom song?",
    answer: "Typically, we deliver custom songs within 5-10 business days, depending on the complexity and requirements. Rush orders can be accommodated for an additional fee. We'll provide a specific timeline during our initial consultation."
  },
  {
    question: "Can I request revisions to my song?",
    answer: "Yes! Our standard package includes two rounds of revisions to ensure your complete satisfaction. Additional revision rounds can be purchased if needed. We work closely with you to perfect every aspect of your custom song."
  },
  {
    question: "What file formats do you deliver?",
    answer: "We provide your custom song in industry-standard formats including WAV, MP3, and AIFF. We can also accommodate specific format requests to ensure compatibility with your systems and platforms."
  },
  {
    question: "Do you offer volume pricing for multiple songs?",
    answer: "Yes, we offer competitive package rates for multiple songs. This is perfect for businesses needing different versions of their song or multiple unique pieces. Contact us for a custom quote based on your needs."
  },
  {
    question: "Who owns the rights to the custom song?",
    answer: "Upon final payment, you receive full commercial rights to your custom song. This includes usage rights for marketing, internal communications, and public performance. We provide detailed documentation of your ownership."
  },
  {
    question: "Can you match specific musical styles or genres?",
    answer: "Absolutely! Our team can create songs in any style or genre. Whether you need corporate rock, gentle acoustic, electronic, or classical, we'll match your preferred style while maintaining your brand's identity."
  },
  {
    question: "Do you offer rush delivery options?",
    answer: "Yes, we offer expedited delivery for time-sensitive projects. Rush orders can be completed in as little as 48-72 hours, depending on complexity. Additional fees apply for rush service."
  }
];

export const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80"
            alt="Music Studio"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <HelpCircle className="h-16 w-16 mx-auto mb-6 text-purple-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Everything you need to know about our custom musical solutions
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="divide-y divide-gray-200 px-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Still Have Questions Card */}
        <div className="mt-16 bg-purple-500 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Our team is here to help! Reach out to us for personalized assistance.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-purple-500 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};