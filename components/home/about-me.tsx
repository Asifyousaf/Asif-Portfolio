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
              <h3 className="text-xl font-semibold text-foreground">Full-Stack Developer | Web & Mobile (Android) | AI-Integrated Systems</h3>
              <p className="text-lg text-muted-foreground">
                I’m Asif Yousaf, a full-stack developer with 4+ years of experience building scalable web and mobile applications. I specialize in developing clean, responsive user interfaces and connecting them to secure backend systems, APIs, and databases.
              </p>
              <p className="text-lg text-muted-foreground">
                I’ve built and deployed production-ready platforms including e-commerce systems, multi-feature client applications, and cross-platform solutions. My work includes developing Android apps using React Native, alongside modern web applications using React and TypeScript.
              </p>
              <p className="text-lg text-muted-foreground">
                I also have hands-on experience integrating AI-powered features such as chatbots, recommendation systems, and API-driven intelligence into real applications. My focus is on building practical AI solutions that enhance user experience within production systems.
              </p>
              <p className="text-lg text-muted-foreground">
                I’m particularly interested in opportunities where full-stack development intersects with AI, automation, and scalable system design.
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