import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import TrailerUpcoming from "@/components/TrailerUpcoming";
import TrendingMovies from "@/components/TrendingMovies";
import TrendingPeople from "@/components/TrendingPeople";
import TrendingTv from "@/components/TrendingTv";

export default function Home() {
  return (
    <div className="w-full mx-auto bg-green-black text-grey">
      <Layout>
        <Hero />
        <TrendingMovies />
        <TrendingTv />
        <TrailerUpcoming />
        <TrendingPeople />
      </Layout>
    </div>
  );
}
