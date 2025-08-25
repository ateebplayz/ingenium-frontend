"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type CategoryInfo = {
  title: string;
  subtitle: string,
  desc: string;
};

const categories: Record<string, CategoryInfo> = {
  "GENESIS": {
    title: "Genesis",
    subtitle: "Science",
    desc: "Genesis challenges participants to explore the depths of pure sciences, encompassing Physics, Chemistry, Biology, and Environmental Sciences. This competition comprises a dynamic quiz round that assesses participants' knowledge across these disciplines, followed by a problem solving tournament where teams must develop and present solutions to complex scientific challenges. The event emphasizes not only a deep understanding of scientific concepts but also the ability to communicate ideas effectively, making it a true test of both intellect and innovation."
  },
  "PROOF PERSUIT": {
    title: "Proof Persuit",
    subtitle: "Research",
    desc: "In this category, participants step into the role of both scholar and reporter, crafting a research paper that blends rigorous academic methodology with the storytelling precision of investigative journalism. Candidates will choose a topic of significance — social, scientific, technological, or cultural — and explore it through systematic research, credible sources, and critical analysis. The final paper should present not only factual accuracy and strong evidence, but also a clear, engaging narrative that communicates complex ideas to a wider audience. Judges will assess depth of research, originality, clarity, and the ability to turn raw information into meaningful insight."
  },
  "SILICON 4D41": {
    title: "Silicon 4D41",
    subtitle: "Computer Science",
    desc: "Welcome to Silicon 4D41, where we look for the world’s budding tech entrepreneurs, ready to change the world using their unique ideas. Participants will come up with brands and figure out AI aspects, while being tested on their design skills and critical thinking. Contestants will compete against other contestants to come up with the best brands and startups, giving a platform for ideas to flourish."
  },
  "CIVIL SYMPOSIUM": {
    title: "Civil Symposium",
    subtitle: "Engineering",
    desc: "In this category, participants step into the role of both scholar and reporter, crafting a research paper that blends rigorous academic methodology with the storytelling precision of investigative journalism. Candidates will choose a topic of significance — social, scientific, technological, or cultural — and explore it through systematic research, credible sources, and critical analysis. The final paper should present not only factual accuracy and strong evidence, but also a clear, engaging narrative that communicates complex ideas to a wider audience. Judges will assess depth of research, originality, clarity, and the ability to turn raw information into meaningful insight."
  },
  "CAELUM COGNITO": {
    title: "Caelum Cognito",
    subtitle: "Astronomy",
    desc: "Caelum Cognitio is a category designed for astronomy enthusiasts and admirers of the vastness of the cosmos. This category will test delegates’ knowledge on astronomy and astrophysics while also testing their ability to analyze and evaluate data. This category will also consist of a crisis round which will test participants’ critical thinking and decision making. This category is perfect for delegates who want to embark on a journey to deepen their understanding of the cosmos. This category will consist of 3 rounds."
  },
  "AXIOM OF CHOICE": {
    title: "Axiom of Choice",
    subtitle: "Mathematics",
    desc: "The Axiom of Choice category assesses mathematical competency across various domains. It utilizes a strategic resource management simulation, an estimation challenge, and a technical proficiency round, designed to test problem-solving under pressure, estimation skills in applied mathematics, and mastery of advanced mathematical techniques. This well-rounded format is ideal for participants who can think creatively, solve problems efficiently, and demonstrate a strong foundation in mathematical concepts."
  },
  "PERMUTATION PARADOX": {
    title: "Permutation Paradox",
    subtitle: "Cryptography",
    desc: "Enter the enigmatic realm of The Permutation Paradox, as you race against time and other contestants to prove your cryptographic mastery in a series of mind-bending challenges. Participants will have their observation and deduction skills tested as they make their way through individual challenges, embark on a scavenger hunt, and compete in exhilarating head-to-head battles to come out on top as the victors."
  },
  "THE LAST SIN": {
    title: "The Last Sin",
    subtitle: "Crime",
    desc: "In The Last Sin, participants immerse themselves in the intricate and challenging world of forensic science as they work to solve a simulated murder case. The competition places delegates in the role of investigators, requiring them to collect and analyze physical evidence, perform precise scientific experiments, and interrogate a series of suspects in order to uncover the truth. Throughout the process, participants will not only test their forensic skills and investigative techniques, but also their ability to synthesize complex findings into a clear, compelling, and logically sound narrative. Delegates will meticulously search for clues, test multiple hypotheses, and piece together key details, gradually building a comprehensive case. The ultimate goal: to deliver justice through evidence-based reasoning and a well-constructed argument that can withstand scrutiny."
  },
  "THE QUEST OF EREBOR": {
    title: "The Quest of Erebor",
    subtitle: "Fandom",
    desc: "The Quest of Erebor invites participants to delve into the realm of pop culture and media with a multi-faceted competition. Delegates will tackle trivia questions across various franchises, testing their knowledge of shows, movies, and video games. They will exercise their creativity by pitching plot ideas, showcasing their storytelling prowess. Participants will have their improv skills challenged as they act out scripts, judged on their performance and adaptability. This category is designed to highlight both deep familiarity with fandoms and the ability to innovate and perform under pressure."
  },
};

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col justify-start items-start bg-black font-primary">
      <div className="min-h-screen w-full bg-cover bg-[url(/home/Hero.png)] flex p-16 flex-col justify-center items-center">
        <div className="lg:absolute lg:top-12 lg:left-8 flex flex-col justify-start items-start">
          <h1 className="text-7xl lg:text-[150px] leading-16 lg:leading-32 font-black w-full text-center lg:text-start space-x-0 font-secondary">
            INGENIUM&lsquo;25
          </h1>
          <h1 className="text-5xl lg:text-[117px] leading-12 lg:leading-24 font-black w-full text-center lg:text-start text-primary-foreground space-x-0 font-secondary">
            NOVEMBER 7,8,9
          </h1>
        </div>
        <div className="lg:absolute lg:top-12 lg:right-8 flex flex-col justify-start items-start">
          <Button>Register Now</Button>
        </div>
        <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-4 justify-start items-start flex-col">
          <div className="hidden lg:flex flex-row w-full items-end justify-between">
            <h1 className="w-1/2 font-primary text-xl font-medium">
              Three days of science, tech, engineering, and creativity. From
              cracking ciphers to building AI startups, Ingenium unites brilliant
              minds to compete, collaborate, and create.
            </h1>
            <h1 className="font-primary text-xl font-medium">LHR 54000</h1>
          </div>
          <img className="w-full" src={"/home/Bar.png"}/>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-background w-full flex justify-start items-start p-8">
        <h1 className="w-full text-3xl lg:text-5xl font-medium lg:w-5/6">
          Ingenium is a 3-day competition bringing together students and
          innovators from diverse fields. Across categories like{" "}
          <span className="text-primary-foreground">
            science, technology, engineering, and creative problem-solving
          </span>
          , participants tackle intense challenges, from decoding complex ciphers
          to pitching AI-powered startups. It’s a platform to test skills, spark
          ideas, and connect with some of the brightest minds.
        </h1>
      </div>

      {/* Mid section */}
      <div className="bg-background w-full px-8 flex justify-center lg:justify-between items-center lg:items-stretch lg:flex-row flex-col lg:flex-colp-8">
        <div className="w-full lg:w-1/2 flex justify-end gap-12 lg:px-16 ">
          <img src={"/home/Pic-1.png"} className={'w-5/12 h-auto rounded-3xl'}/>
          <img src={"/home/Pic-2.png"} className={'w-5/12 h-auto rounded-3xl'}/>
        </div>
        <div className="w-full lg:w-1/2 flex flex-row justify-center items-center gap-8">
          <h1 className="text-xl lg:text-3xl text-center lg:text-start mt-4 lg:mt-0">
            Ingenium is a high-energy arena of competitions designed to inspire
            innovation and teamwork. Over three days, participants face unique
            challenges that blend knowledge, creativity, and strategy, making every
            moment an opportunity to excel.
          </h1>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-background w-full flex flex-col justify-start items-start p-8">
        <h1 className="text-5xl lg:text-7xl font-medium w-full font-secondary">
          From science to storytelling, each category offers a unique test of
          skill and creativity.
        </h1>
        <h1 className="text-5xl lg:text-7xl font-medium w-full font-secondary text-end text-primary-foreground">
          From cracking codes to building bold ideas, Ingenium’s categories cover
          a spectrum of challenges that push participants to think fast, work
          smart, and bring their best to the table.
        </h1>
        <img className="w-full mt-4" src={"/home/Bar.png"}/>
      </div>

      {/* Selector Grid */}
      <div className="bg-background w-full flex flex-col justify-start items-start p-8">
        <h1 className="w-full font-secondary text-5xl lg:text-9xl font-black text-center">
          THE <span className="text-primary-foreground">CATEGORIES</span>.
        </h1>
        <h1 className="w-full font-secondary text-3xl font-black text-center">
          You need to choose from each section
        </h1>
        <h1 className="w-full font-secondary text-xl text-primary-foreground font-black text-center">
          (Click to Expand)
        </h1>

        {/* 👇 DON'T TOUCH SELECTORS – only click logic */}
        <div
          className="flex flex-wrap justify-center items-center gap-4 w-full mt-12"
        >
          <div className="flex justify-start items-start gap-4 flex-col p-4 w-full lg:w-[45%] bg-primary-foreground/10">
            <h1 className="font-secondary text-4xl font-black text-primary-foreground text-center lg:text-start w-full">
              COMPULSORY <span className="text-xl text-white">Choose Upto Two</span>
            </h1>
            <div className="flex flex-row gap-4 flex-wrap justify-start items-stretch">
              <div
                onClick={() => setSelected(selected === "GENESIS" ? null : "GENESIS")}
                className="w-full lg:w-fit flex flex-col justify-center items-center border border-primary-foreground text-xl p-2 px-8 font-medium transition duration-500 hover:opacity-50 cursor-pointer">
                <h1 className="font-black text-center text-primary-foreground font-secondary -mb-2 text-xl">
                  SCIENCE
                </h1>
                <h1
                  className="font-secondary text-center font-black text-3xl">GENESIS</h1>
              </div>
              <div
                onClick={() => setSelected(selected === "PROOF PERSUIT" ? null : "PROOF PERSUIT")}
                className="w-full lg:w-fit flex flex-col justify-center items-center border border-primary-foreground text-xl p-2 px-8 font-medium transition duration-500 hover:opacity-50 cursor-pointer">
                <h1 className="font-black text-center text-primary-foreground font-secondary -mb-2 text-xl">
                  RESEARCH
                </h1>
                <h1
                  className="font-secondary text-center font-black text-3xl">PROOF PERSUIT</h1>
              </div>
              <div
                onClick={() => setSelected(selected === "SILICON 4D41" ? null : "SILICON 4D41")}
                className="w-full lg:w-fit flex flex-col justify-center items-center border border-primary-foreground text-xl p-2 px-8 font-medium transition duration-500 hover:opacity-50 cursor-pointer">
                <h1 className="font-black text-center text-primary-foreground font-secondary -mb-2 text-xl">
                  COMPUTER SCIENCE
                </h1>
                <h1
                  className="font-secondary text-center font-black text-3xl">SILICON 4D41</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start gap-4 flex-col p-4 w-full lg:w-[45%] bg-primary-foreground/10">
            <h1 className="font-secondary text-4xl font-black text-primary-foreground text-center lg:text-start w-full">
              APEX <span className="text-xl text-white">Choose One</span>
            </h1>
            <div className="flex flex-row gap-4 flex-wrap justify-start items-stretch">
              <div
                onClick={() => setSelected(selected === "CIVIL SYMPOSIUM" ? null : "CIVIL SYMPOSIUM")}
                className="w-full lg:w-fit flex flex-col justify-center items-center border border-primary-foreground text-xl p-2 px-8 font-medium transition duration-500 hover:opacity-50 cursor-pointer">
                <h1 className="font-black text-center text-primary-foreground font-secondary -mb-2 text-xl">
                  ENGINEERING
                </h1>
                <h1
                  className="font-secondary text-center font-black text-3xl">
                  CIVIL SYMPOSIUM
                </h1>
              </div>
              <div
                onClick={() => setSelected(selected === "CAELUM COGNITO" ? null : "CAELUM COGNITO")}
                className="w-full lg:w-fit flex flex-col justify-center items-center border border-primary-foreground text-xl p-2 px-8 font-medium transition duration-500 hover:opacity-50 cursor-pointer">
                <h1 className="font-black text-center text-primary-foreground font-secondary -mb-2 text-xl">
                  ASTRONOMY
                </h1>
                <h1
                  className="font-secondary text-center font-black text-3xl">
                  CAELUM COGNITO
                </h1>
              </div>
            </div>
          </div>

          {/* MATRIX */}
          <div className="flex justify-start items-start gap-4 flex-col p-4 w-full lg:w-[45%] bg-primary-foreground/10">
            <h1 className="font-secondary text-4xl font-black text-primary-foreground text-center lg:text-start w-full">
              MATRIX <span className="text-xl text-white">Choose One</span>
            </h1>
            <div className="flex flex-row gap-4 justify-start flex-wrap items-stretch">
              <div
                onClick={() => setSelected(selected === "AXIOM OF CHOICE" ? null : "AXIOM OF CHOICE")}
                className="w-full lg:w-fit flex flex-col justify-center items-center border border-primary-foreground text-xl p-2 px-8 font-medium transition duration-500 hover:opacity-50 cursor-pointer">
                <h1 className="font-black text-center text-primary-foreground font-secondary -mb-2 text-xl">
                  MATHEMATICS
                </h1>
                <h1
                  className="font-secondary text-center font-black text-3xl">
                  AXIOM OF CHOICE
                </h1>
              </div>
              <div
                onClick={() => setSelected(selected === "PERMUTATION PARADOX" ? null : "PERMUTATION PARADOX")}
                className="w-full lg:w-fit flex flex-col justify-center items-center border border-primary-foreground text-xl p-2 px-8 font-medium transition duration-500 hover:opacity-50 cursor-pointer">
                <h1 className="font-black text-center text-primary-foreground font-secondary -mb-2 text-xl">
                  CRYPTOGRAPHY
                </h1>
                <h1
                  className="font-secondary text-center font-black text-3xl">
                  PERMUTATION PARADOX
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start gap-4 flex-col p-4 w-full lg:w-[45%] bg-primary-foreground/10">
            <h1 className="font-secondary text-4xl font-black text-primary-foreground text-center lg:text-start w-full">
              UNDERWORLD <span className="text-xl text-white">Choose One</span>
            </h1>
            <div className="flex flex-row gap-4 flex-wrap justify-start items-stretch">
              <div
                onClick={() => setSelected(selected === "THE LAST SIN" ? null : "THE LAST SIN")}
                className="w-full lg:w-fit flex flex-col justify-center items-center border border-primary-foreground text-xl p-2 px-8 font-medium transition duration-500 hover:opacity-50 cursor-pointer">
                <h1 className="font-black text-center text-primary-foreground font-secondary -mb-2 text-xl">
                  CRIME
                </h1>
                <h1
                  className="font-secondary font-black text-3xl">THE LAST SIN</h1>
              </div>
              <div
                onClick={() => setSelected(selected === "THE QUEST OF EREBOR" ? null : "THE QUEST OF EREBOR")}
                className="w-full lg:w-fit flex flex-col justify-center items-center border border-primary-foreground text-xl p-2 px-8 font-medium transition duration-500 hover:opacity-50 cursor-pointer">
                <h1 className="font-black text-center text-primary-foreground font-secondary -mb-2 text-xl">
                  FANDOM
                </h1>
                <h1
                  className="font-secondary font-black text-3xl">
                  THE QUEST OF EREBOR
                </h1>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              key={selected}
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 30}}
              transition={{duration: 0.4}}
              className="mt-12 w-screen -ml-8 bg-cover bg-[url(/home/Category.png)] p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-9xl text-center lg:text-start font-secondary font-bold text-primary mb-4">
                {categories[selected].title}
              </h2>
              <h2
                className="text-7xl font-secondary text-center lg:text-start font-bold text-stroke-[0.5px] -mt-8 text-transparent text-stroke-primary-foreground mb-4">
                {categories[selected].subtitle}
              </h2>
              <p className="text-lg lg:text-2xl text-center lg:text-start text-white leading-relaxed">
                {categories[selected].desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <img className="w-full mt-12" src={"/home/Bar.png"}/>
      </div>

      <div className="flex flex-col justify-start items-start bg-black w-full font-primary py-20 px-16">
        <h1 className="w-full font-secondary text-5xl lg:text-7xl font-black text-center mb-12">
          Registration &amp; <span className="text-primary-foreground">Pricing</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch w-full">
          <div
            className="flex flex-col lg:flex-row min-h-[250px] justify-between bg-neutral-900 rounded-2xl p-10 w-full lg:w-1/2 border border-primary-foreground shadow-xl">
            <div className={'flex justify-start relative text-center lg:text-start items-start flex-col'}>
              <p className="text-4xl leading-4 lg:leading-8 mt-2 lg:mt-0 font-secondary font-bold text-primary-foreground">
                PKR 4000{" "}
                <span className="text-xl text-white">
                  per delegate
                </span>
              </p>
              <p className="text-4xl leading-4 lg:leading-8 mt-2 lg:mt-0 font-secondary font-bold text-primary-foreground">
                PKR 4500{" "}
                <span className="text-xl text-white">
                  per delegation
                </span>
              </p>
              <div className={'lg:absolute lg:bottom-0 lg:left-0 flex justify-center items-center w-full lg:w-fit mt-2 lg:mt-0'}>
                <Button className={''}>
                  Register Now
                </Button>
              </div>
            </div>
            <div className={'flex justify-center items-center lg:justify-end lg:items-end flex-col mt-4 lg:mt-0'}>
              <h2 className="text-sm text-neutral-500">Valid Until 1st November</h2>
              <h2 className="text-4xl lg:text-6xl text-center font-secondary font-bold text-primary-foreground">EARLY BIRD</h2>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row min-h-[250px] justify-between bg-neutral-900 rounded-2xl p-10 w-full lg:w-1/2 border border-neutral-700 shadow-xl">
            <div className={'flex justify-start relative text-center lg:text-start items-start flex-col'}>
              <p className="text-4xl leading-4 lg:leading-8 mt-2 lg:mt-0 font-secondary font-bold text-primary-foreground">
                PKR 3000{" "}
                <span className="text-xl text-white">
                  per delegate
                </span>
              </p>
              <p className="text-4xl leading-4 lg:leading-8 mt-2 lg:mt-0 font-secondary font-bold text-primary-foreground">
                PKR 3500{" "}
                <span className="text-xl text-white">
                  per delegation
                </span>
              </p>
              <div
                className={'lg:absolute lg:bottom-0 lg:left-0 flex justify-center items-center w-full lg:w-fit mt-2 lg:mt-0'}>
                <Button className={''}>
                  Register Now
                </Button>
              </div>
            </div>
            <div className={'flex justify-center items-center lg:justify-end lg:items-end flex-col mt-4 lg:mt-0'}>
              <h2 className="text-4xl lg:text-6xl text-center font-secondary font-bold text-primary-foreground">STANDARD</h2>
            </div>
          </div>
        </div>
        <img className="w-full mt-24" src={"/home/Bar.png"}/>
      </div>

      <div className="bg-[url(/home/Expand.png)] bg-cover w-full flex justify-start items-start flex-col p-8 py-16">
        <h1 className={'text-5xl lg:text-7xl w-ful llg:w-5/6 font-secondary font-bold mb-4'}>Get the complete <span
          className={'text-primary-foreground'}>Ingenium&lsquo;25</span> guide with all event details, rules and tips.
          Click below to download and start preparing for the ultimate competition.</h1>
        <Button className={''}>
          Download Now
        </Button>
      </div>
      <div className="bg-background w-full flex justify-end items-end flex-col relative py-8 lg:pt-12 lg:pb-0 px-8 lg:px-0">
        <h1 className="font-bold font-secondary text-center lg:text-start w-full lg:px-6 text-2xl lg:text-3xl mb-0 text-primary-foreground">
          INTERNATIONAL SCHOOL LAHORE PRESENTS
        </h1>
        <h1 className="font-bold font-secondary text-center w-full text-7xl lg:text-[25vw] lg:leading-[20vw]">
          INGENIUM<span className={'text-primary-foreground'}>&lsquo;25</span>
        </h1>
      </div>
    </div>
  );
}
