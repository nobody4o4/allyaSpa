import FAQCard from "../components/faqCard";
import { getFAQ } from "../endpoint/services.endpoint";
import FetchMain from "../services/fetchMain.service";

// import FAQ from "../assets/FAQ.png";
export default function Faq() {
  const { data } = FetchMain(getFAQ);
  console.log(data);
  return (
    <>
      <div className=" my-20 flex justify-between  gap-10">
        <div className="flex w-[70rem] flex-col gap-4 ">
          <section className="flex flex-col gap-8">
            <div className="container flex flex-col justify-center ">
              <h2 className="leadi mb-2 border-b pb-4  text-4xl font-bold text-primaryColor sm:text-5xl">
                FAQs
              </h2>
              <div className="flex flex-col gap-2 divide-y sm:px-8 lg:px-12 xl:px-5 ">
                {data?.map((faq, index) => (
                  <FAQCard
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
