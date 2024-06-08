"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import messages from "@/messages.json";
import { Skeleton } from "@/components/ui/skeleton";
import { Mail } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { ThemeProvider } from "@/components/theme-provider";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/app/(app)/theme-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function Home({ children }: any) {

  return (
    <>
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 min-h-screen ">
        <section className="text-center mb-8 md:mb-12 ">
          <h1 className="text-3xl md:text-5xl font-bold">
            Exploring the Enigmatic Realm of Stealth Communications
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg">
            Explore Mystery Message - Where your identity remains a secret.
          </p>
        </section>
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]} //for autoplay
          className="w-full max-w-xs"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0" />
                    <div>
                      <p>{message.content}</p>
                      <p className="text-xs text-muted-foreground">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center space-x-4 pb-6 pt-6">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>

        <Slider defaultValue={[33]} max={100} step={1} />
      </main>
      {/* Footer */}
      <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
        © 2023 True Feedback. All rights reserved.
      </footer>
    </>
  );
}
