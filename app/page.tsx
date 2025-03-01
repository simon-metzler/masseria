import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import PricingTable from "./components/PricingTable";

export default function Home() {
  return (
    <div>
      <Hero />
      <Overview />
      <PricingTable />
      <Footer />
    </div>
  );
}
