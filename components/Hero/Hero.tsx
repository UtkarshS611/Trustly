import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero1 = () => {
  return (
    <section className="py-32 flex justify-center items-center px-10">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              Your Job Companion
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Welcome to Trustly
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Trustly is a global AI-driven platform that uncovers fake job
              postings, empowering job seekers with trust scores and ensuring a
              secure job search experience.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link href={"/sign-in"}>
                <Button className="w-full sm:w-auto">Get Started</Button>
              </Link>
              <Button variant="outline" className="w-full sm:w-auto">
                Docs
                <ArrowUpRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
          <Image
            src="/HeroImage.png"
            height={600}
            width={800}
            alt="placeholder hero"
            className="max-h-[60vh] w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero1;
