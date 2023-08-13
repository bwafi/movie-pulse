import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className="w-full mx-auto bg-green-black text-white">
      <Layout>
        <Hero />
        <Trending />
      </Layout>
    </div>
  );
}
