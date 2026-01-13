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
              <h3 className="text-xl font-semibold text-foreground">Full-Stack Developer with AI-Integrated Experience</h3>
              <p className="text-lg text-muted-foreground">
                I&apos;m Asif Yousaf, a full-stack developer with hands-on experience building production-ready web applications using modern frontend and backend technologies. I specialize in creating clean, responsive user interfaces and connecting them to reliable backend systems, APIs, and databases.
              </p>
              <p className="text-lg text-muted-foreground">
                I have over two years of experience working with Python and JavaScript, and I&apos;ve built complete applications ranging from e-commerce platforms to client websites delivered through freelance work. One of my key projects includes Cybertronicbot, a full-stack fashion e-commerce platform with authentication, product management, and optimized user flows.
              </p>
              <p className="text-lg text-muted-foreground">
                Alongside full-stack development, I have practical exposure to AI-assisted systems, including building an AI-powered telecom customer support chatbot and integrating AI features such as chatbots, recommendation logic, and API-driven intelligence into real applications. I am actively expanding my skills in machine learning and applied AI, focusing on how intelligent systems can be deployed within production web environments rather than standalone demos.
              </p>
              <p className="text-lg text-muted-foreground">
                I&apos;m particularly interested in roles where full-stack engineering intersects with AI, automation, and data-driven features.
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