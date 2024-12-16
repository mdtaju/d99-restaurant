import { roboto } from "@/app/fonts/font-variables";
import { faqsData } from "@/data";

const Faqs = () => {
  return (
    <div className="w-full max-w-[750px] px-4 md:px-0 mx-auto py-[40px]">
      <h2 className={`main_title ${roboto.className}`}>FAQS</h2>
      <ul className="mt-6 pl-3 md:pl-10 border-l-2 py-4 border-themeBlack">
        {faqsData.map((faq, i) => (
          <li key={i} className="mt-4 relative">
            <span className="size-4 bg-themePrimary rounded-full absolute left-[-20px] md:left-[-48px] top-[8px]"></span>
            <h4 className="text-xl md:text-2xl font-semibold text-themePrimary">
              {faq.question}
            </h4>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faqs;
