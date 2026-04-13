"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, ArrowUpRight, Camera, Video, Film, Zap, Award, Users, TrendingUp } from "lucide-react";

export default function DNGOVisualsPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="DNGO Visuals"
          navItems={[
            { name: "Work", id: "work" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Book a Call", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="We Create Visuals That Move Culture"
          description="Helping brands and creatives tell powerful stories through cinematic content."
          tag="Creative Production Studio"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "View Work", href: "#work" },
            { text: "Book a Call", href: "#contact" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-bearded-traveler-hat-camouflage-jacket-with-backpack-tattooed-arms-holds-photo-camera-isolated-dark-background_613910-4305.jpg", imageAlt: "Cinematic brand film production" },
            { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-wearing-suit-black-white_23-2149411390.jpg", imageAlt: "Creative photography session" },
            { imageSrc: "http://img.b2bpic.net/free-photo/jolly-woman-filming-vlog-pointing-finger-high-tech-camera_482257-110272.jpg", imageAlt: "Professional social media content" },
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139123.jpg", imageAlt: "Music video production set" },
            { imageSrc: "http://img.b2bpic.net/free-photo/male-director-looking-script-his-new-movie_23-2149066359.jpg", imageAlt: "Behind the scenes creative direction" },
            { imageSrc: "http://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg", imageAlt: "Corporate video portrait" },
          ]}
        />
        <FeatureBento
          title="Our Services"
          description="Comprehensive visual production solutions for forward-thinking brands."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Video Production",              description: "Ads, brand films, and music videos crafted with a cinematic lens.",              bentoComponent: "reveal-icon",              icon: Film,
            },
            {
              title: "Content Creation",              description: "High-quality assets optimized for social media engagement and growth.",              bentoComponent: "reveal-icon",              icon: Video,
            },
            {
              title: "Photography",              description: "Stunning commercial and artistic imagery that captures your brand essence.",              bentoComponent: "reveal-icon",              icon: Camera,
            },
          ]}
        />
        <FeatureCardTwentySix
          title="Selected Work"
          description="Capturing stories that define culture."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "View Full Portfolio", href: "#work" }]}
          features={[
            { title: "Urban Rhythm", description: "Music Video Production", imageSrc: "http://img.b2bpic.net/free-photo/brutal-young-man-sunglasses-hat-island-travel_1321-3839.jpg", buttonIcon: ArrowUpRight },
            { title: "Corporate Flow", description: "Brand Storytelling", imageSrc: "http://img.b2bpic.net/free-photo/cheerful-trendy-girl-using-tablet_23-2147787591.jpg", buttonIcon: ArrowUpRight },
            { title: "Street Style", description: "Commercial Photography", imageSrc: "http://img.b2bpic.net/free-photo/young-people-urban-scene-with-k-pop-aesthetics_23-2149096940.jpg", buttonIcon: ArrowUpRight },
            { title: "Tech Future", description: "Social Media Campaign", imageSrc: "http://img.b2bpic.net/free-photo/abstract-futuristic-technology-with-polygonal-shapes-dark-blue-background-connection-technologies-backdrop-internet-communication_493343-29989.jpg", buttonIcon: ArrowUpRight },
          ]}
        />
        <MetricCardOne
          title="Impact Driven"
          description="We focus on quality and authenticity to ensure your brand stands out."
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "p1", value: "50+", title: "Projects", description: "Successfully completed creative productions", icon: Award },
            { id: "p2", value: "4M+", title: "Reach", description: "Combined organic audience engagement", icon: TrendingUp },
            { id: "p3", value: "20+", title: "Partners", description: "Brands, artists, and corporate clients", icon: Users },
          ]}
        />
        <ContactCTA
          tag="Book Your Project"
          title="Let’s Build Your Brand Visually"
          description="Get in touch today to discuss your next cinematic production project."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[{ text: "Get in Touch", href: "#contact" }]}
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="DNGO Visuals"
          columns={[
            { title: "Navigation", items: [{ label: "About", href: "#about" }, { label: "Services", href: "#services" }, { label: "Work", href: "#work" }] },
            { title: "Services", items: [{ label: "Video Production", href: "#" }, { label: "Photography", href: "#" }, { label: "Creative Direction", href: "#" }] },
            { title: "Follow Us", items: [{ label: "Instagram", href: "#" }, { label: "LinkedIn", href: "#" }, { label: "YouTube", href: "#" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}