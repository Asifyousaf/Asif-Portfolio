"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutMe() {
  return (
    <section className="py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-4">Full-Stack Developer with AI Integration Expertise</h3>
              <p className="text-lg text-muted-foreground">
                I'm Asif Yousaf, a graduate Full-Stack Web Developer with a strong focus on building scalable, user-facing web applications and integrating AI-powered features into modern websites. I hold a BSc (Hons) in Creative Computing from Bath Spa University and have hands-on experience developing complete web solutions from frontend to backend.
              </p>
              <p className="text-lg text-muted-foreground">
                My primary experience is in web development, working with JavaScript, HTML, CSS, Python, FastAPI, and databases, where I've built and deployed multiple responsive websites and backend APIs. I focus on clean architecture, maintainable code, and performance-driven design.
              </p>
              <p className="text-lg text-muted-foreground">
                Alongside web development, I am actively expanding my skills in AI integration, applying LLMs, Retrieval-Augmented Generation (RAG), LangChain, and vector databases to enhance web applications with intelligent features such as conversational interfaces, automated support flows, and data-driven responses. I also have a solid understanding of machine learning fundamentals and how ML models fit into real-world software systems.
              </p>
              <p className="text-lg text-muted-foreground">
                My current goal is to build production-ready web applications enhanced with AI, combining strong backend engineering with practical, reliable AI capabilities.
              </p>
              
              <div className="flex justify-center mt-6">
                <Button asChild size="lg">
                  <Link href="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}