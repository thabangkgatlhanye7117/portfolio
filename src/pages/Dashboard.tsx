import GreetingWidget from "../components/dashboard/GreetingWidget";
import JourneyWidget from "../components/dashboard/JourneyWidget";
import SkillsWidget from "../components/dashboard/SkillsWidget";

import AnalyticsWidget from "../components/dashboard/AnalyticsWidget";
import FeaturedProjectWidget from "../components/dashboard/FeaturedProjectWidget";
import WorldMap from "../components/map/WorldMap";

import { motion } from "framer-motion";


export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#F5F5F3] px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Greeting */}
        
            <GreetingWidget />
        
        {/* Dashboard Grid */}
        <motion.section
  className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12"
  
>
  <div className="lg:col-span-7">
    
      <JourneyWidget />
    
  </div>

  <div className="lg:col-span-5">
   
      <SkillsWidget />
    
    
  </div>
  

  <div className="lg:col-span-8">
    
      <WorldMap />
    
  </div>
    <div className="lg:col-span-4 lg:pt-18 ">
   
     <AnalyticsWidget/>
   
  </div>
  

  <div className="lg:col-span-12">
    
      <FeaturedProjectWidget />
   
  </div>
</motion.section>
      </div>
    </main>
  );
}