import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>JL | Welcome</title>
        <meta
          name="description"
          content="I'm a full-stack web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <Main />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
