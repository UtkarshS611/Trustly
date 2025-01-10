import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const Faqs = () => {
    const faqs = [
      {
        question: "What is a Trustly?",
        answer:
          "Trustly is a platform built especially for job and internship seekers to find out about a job posting whether it's genuine post or a dummy role to scam people.",
      },
      {
        question: "What is the purpose of Trustly?",
        answer:
          "The purpose of a Trustly is to provide a platform for job seekers to find out about a job posting whether it's genuine post or a dummy role to scam people.",
      },
    ];
  
    return (
      <section className="py-32 max-w-[80%] mx-auto">
        <div className="container">
          <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
            Frequently asked questions
          </h1>
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    );
  };
  
  export default Faqs;
  