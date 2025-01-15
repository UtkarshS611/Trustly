import { CircleArrowRight, Files, Settings } from "lucide-react";

const About = () => {
  return (
    <section className="py-32 flex justify-center px-10">
      <div className="container flex flex-col gap-28">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-5xl">
            Make your time and effort worth it
          </h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="https://shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder"
            className="size-full max-h-96 rounded-2xl object-cover"
          />
          <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
            <p className="text-sm text-muted-foreground">OUR MISSION</p>
            <p className="text-lg font-medium">
              Making students and job seekers life easier by providing them with a platform that uncovers fake job postings, empowering job seekers with trust scores and ensuring a secure job search experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              We make creating software ridiculously easy to use.
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Files className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Post transparency
              </h3>
              <p className="text-muted-foreground">
                We believe in transparency and honesty. We share information
                openly and proactively, and we respect each other and our
                community.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <CircleArrowRight className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Moving the needle
              </h3>
              <p className="text-muted-foreground">
                Boldly, bravely and with clear aims. We seek out the big
                opportunities and double down on the most important things to
                work on.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Settings className="size-5" />
              </div>
              <h3 className="mb-3 mt-2 text-lg font-semibold">
                Optimizing for empowerment
              </h3>
              <p className="text-muted-foreground">
                We believe that everyone should be empowered to do whatever they
                think is in the company&apos;s best interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
