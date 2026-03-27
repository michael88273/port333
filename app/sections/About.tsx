import { technologies } from "@/datas/data";

const About = () => {
  return (
    <section
      className="flex flex-col   mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="about"
      data-aos="fade-up"
    >
      <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-bold">
        <div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-border-color"></div>
        <span className=" font-bold text-lg sm:text-2xl font-idgrotesk">
          01. About Me
        </span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </div>
      <div className="flex flex-col  lg:flex-row w-full py-10  gap-10">
        <div className="w-full lg:w-[50%] flex flex-col gap-4 order-2 lg:order-1">
          <h4 className="font-bold">Technologies I work with</h4>
          <div
            className="bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
          >
            <ul className="px-6 py-6 flex flex-wrap gap-x-6 gap-y-4 sm:grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 font-idgrotesk">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-300 dark:filter dark:brightness-50 dark:invert hover:dark:brightness-100 hover:dark:invert-0"
                >
                  <img
                    src={tech.iconLink}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="hidden sm:inline-block">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] order-1 lg:order-2">
          <article className="leading-relaxed text-base md:text-lg">
           With over 10 years of hands-on experience, I design and deliver scalable web, mobile, and cloud-based applications across a variety of industries.
            <br />
            <br />
           I work across the full stack, using modern frontend technologies like React, Next.js, Angular, Flutter, and React Native, along with backend systems built in Node.js, Python, and C#. I also build and manage cloud infrastructure on AWS and Azure, using tools like Docker and Kubernetes to ensure scalability and reliability.
            <br />
            <br />
            I’ve led distributed teams and developed SaaS platforms, IoT systems, and AI-powered solutions, including LLM pipelines, predictive analytics, and real-time data workflows. I focus on building high-performance, reliable systems that simplify complex problems and deliver real business value.
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;
