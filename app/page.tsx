import { HomeSection } from "@/components/home-section"
import { Gallery } from "@/components/gallery"
import { TabsSection } from "@/components/tabs-section"
import { ChatAnonim } from "@/components/chat-anonim"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HomeSection />
      <Gallery />
      <TabsSection />
      
      {/* Mesh Gradient Background */}
      <div className="mesh-gradient w-full absolute h-[600px] -z-10" style={{ top: "110%" }} />
      
      {/* Desktop Chat Section */}
      <div className="lg:mx-[12%] lg:mt-[-5rem] lg:mb-20 hidden lg:block">
        <div className="chat-modal p-5 lg:px-10">
          <ChatAnonim />
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
