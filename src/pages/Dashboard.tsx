import { useState } from "react";
import { motion } from "framer-motion";

import GreetingWidget from "../components/dashboard/GreetingWidget";
import JourneyWidget from "../components/dashboard/JourneyWidget";
import SkillsWidget from "../components/dashboard/SkillsWidget";
import AnalyticsWidget from "../components/dashboard/AnalyticsWidget";
import FeaturedProjectWidget from "../components/dashboard/FeaturedProjectWidget";
import WorldMap from "../components/map/WorldMap";

export default function Dashboard() {
  const [activeTrack, setActiveTrack] = useState("");
  const [activeContinent, setActiveContinent] = useState("Africa");

  return (
    <div className="lg:py-10 px-10">
      {/* Greeting */}
      <GreetingWidget/>
      <motion.section
        className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12"
      >
        {/* Journey */}
        <div className="lg:col-span-7">
          <JourneyWidget
            setActiveTrack={setActiveTrack}
          />
        </div>

        {/* Skills */} 
        <div className="lg:col-span-5">
          <SkillsWidget
            activeTrack={activeTrack}
          />
        </div>

        {/* World Map */}
        <div className="lg:col-span-8">
          <WorldMap
            activeContinent={activeContinent}
            setActiveContinent={setActiveContinent}
          />
        </div>

        {/* Analytics */}
        <div className="lg:pt-18 lg:col-span-4">
          <AnalyticsWidget
            activeContinent={activeContinent}
          />
        </div>

        {/* Featured Project */}
        <div className="lg:col-span-12">
          <FeaturedProjectWidget />
        </div>
      </motion.section>
    </div>
  );
}