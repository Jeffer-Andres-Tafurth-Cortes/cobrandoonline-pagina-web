import Categorias from "@/components/Categories";
import MiddleHero from "../components/MiddleHero";
import Hero from "./hero/page";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <MiddleHero />
      <Benefits />
    </>
  );
}
