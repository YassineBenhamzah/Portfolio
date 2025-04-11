import { Button } from "../components/ui/button";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h2 className="h1 mb-6">
              Hello im <br />
              <span className="text-accent">Yassine Benhamzah</span>
            </h2>
            <p className="max-w-[500px] mb-9 text-white/80">
              I’m a Full Stack Developer skilled in Laravel, Vue.js, Next.js,
              and MySQL. I build fast and scalable web apps, focusing on
              performance and user experience.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/1UrJKJViEZ7NHUcqxwlUqQwEEY3XAldiQ/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full
               flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary 
               hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
