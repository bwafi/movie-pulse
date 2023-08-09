import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className="w-full h-screen flex bg-green-black text-white">
      <Layout>
        <Hero />
        <Trending />
      </Layout>
    </div>
  );
}
