import Image from "next/image";

const webinars = [
  {
    id: "Company background analysis",
    subtitle: "Employer records",
    title: "Company background analysis",
    description:
      "Quickly analyze the background of a company to determine if it is a genuine company or not. This feature is useful for job seekers and investors.",
    image: "/Security.svg",
  },
  {
    id: "Founder contact",
    subtitle: "Records",
    title: "Founder contact",
    description:
      "Get the contact details of the founder of a company. This feature is useful for job seekers and investors to know if its an actual job posting or just a scam for getting free work done.",
    image: "/Job.svg",
  },
];

const Features = () => {
  return (
    <section className="py-32 flex justify-center">
      <div className="container flex flex-col items-center gap-16">
        <h2 className="mx-auto mb-3 text-pretty text-center font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl">
          Features
        </h2>
        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {webinars.map((webinar , index) => (
            <div
              key={index}
              className="group order-last grid gap-y-6 sm:order-first sm:col-span-12 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:col-span-10 lg:col-start-2 lg:gap-x-12"
            >
              <div className="sm:col-span-5">
                <div className="mb-4 md:mb-6">
                  <div className="flex text-xs uppercase tracking-wider text-muted-foreground">
                    <span className="mr-3 md:mr-5 lg:mr-6">{webinar.id}</span>
                    <span className="mr-3 md:mr-5 lg:mr-6">
                      {webinar.subtitle}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                  {webinar.description}
                </h3>
                <div className="mt-4 flex items-center space-x-2 md:mt-5">
                  <span className="font-semibold md:text-base">Read more</span>
                </div>
              </div>
              <div className="order-first sm:order-last sm:col-span-5">
                <div className="aspect-[16/9] overflow-clip rounded-lg">
                  <Image
                    width={600}
                    height={400}
                    src={webinar.image}
                    alt={webinar.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-[1.05]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
