import { motion } from "framer-motion";
import {
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiFlutter,
  SiLaravel,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "../components/Header";
import { TypeAnimation } from "react-type-animation";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const SectionWrapper = ({ children, id }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    id={id}
    className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
  >
    {children}
  </motion.section>
);

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce web app with MERN stack",
      tech: ["React", "Node.js", "MySQL", "Redux"],
    },
    {
      title: "POS WEB APP",
      description: "Real-time collaborative task management system",
      tech: ["React", "Node", "Redux", "MySQL"],
    },
    {
      title: "Social Media App",
      description: "A social media app",
      tech: ["NextJS", "Node", "MongoDB"],
    },
    {
      title: "POS App",
      description: "Mobile POS App with Flutter",
      tech: ["Flutter", "Laravel", "MySQL"],
    },
  ];

  return (
    <SectionWrapper id="projects">
      <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
          >
            <div className="h-48 bg-gray-700 rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-900/50 text-sm rounded-full text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: "React", category: "Frontend" },
    { icon: <SiNextdotjs />, name: "NextJS", category: "Frontend" },
    { icon: <FaNodeJs />, name: "Node.js", category: "Backend" },
    { icon: <SiMongodb />, name: "MongoDB", category: "Database" },
    { icon: <FaDatabase />, name: "SQL", category: "Database" },
    { icon: <SiRedux />, name: "Redux", category: "State Management" },
    { icon: <SiFlutter />, name: "Flutter", category: "Mobile Development" }, // Updated category for Flutter
    { icon: <SiLaravel />, name: "Laravel", category: "Backend" }, // Updated category for Laravel
  ];

  return (
    <SectionWrapper id="skills">
      <h2 className="text-4xl font-bold text-white mb-12">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-colors"
          >
            <div className="text-4xl text-blue-400 mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            <p className="text-gray-400">{skill.category}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

const Experience = () => {
  const experiences = [
    {
      year: "2025-Present",
      role: "Jr. Full Stack Developer",
      company: "HTML5Solutions",
      description: "Developing Web and Mobile Applications",
    },
    {
      year: "2024-2025",
      role: "Full Stack WebDeveloper",
      company: "Reys Solutions",
      description: "Developed websites and web applications",
    },
  ];

  return (
    <SectionWrapper id="experience">
      <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
      <div className="space-y-8 relative">
        <div className="absolute left-1/2 w-1 bg-gray-800 h-full -translate-x-1/2" />
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative pl-8 md:pl-0 md:grid md:grid-cols-2"
          >
            <div
              className={`${
                index % 2 === 0 ? "md:text-right md:order-1" : "md:text-left"
              }`}
            >
              <p className="text-blue-400 font-semibold relative inline-block px-2 z-10">
                {exp.year}
                <span
                  className="hidden md:block absolute h-[2px] bg-gray-800 top-1/2 -translate-y-1/2"
                  style={{
                    width:
                      index % 2 === 0
                        ? "calc(100% + 150px)"
                        : "calc(100% + 150px)",
                    left: index % 2 === 0 ? "auto" : "100%",
                    right: index % 2 === 0 ? "100%" : "auto",
                  }}
                />
              </p>
            </div>
            <div className="md:px-8">
              {/* Rest of your card content remains the same */}
              <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="bg-gradient-to-br from-gray-900 to-blue-900/50 rounded-2xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold w-full md:w-auto"
              >
                Send Message
              </motion.button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="text-gray-300">
              <p className="text-lg mb-4">
                Feel free to reach out for collaborations or just a friendly
                hello!
              </p>
              <div className="space-y-2">
                <p>📧 saadofficial0999@gmail.com</p>
                <p>📱 +923079932212</p>
              </div>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/Saad09992/"
                className="text-3xl text-white hover:text-blue-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/m-saad-saleem-7b173a2a1/"
                className="text-3xl text-white hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const HeroSection = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <SectionWrapper id="home">
      {/* Remove or reduce padding/margin from the top */}
      <div className="min-h-fit pt-16 relative flex items-center justify-center overflow-hidden">
        {" "}
        {/* Added pt-16 to reduce space from the top */}
        {/* Animated Background Particles */}
        <div className="absolute inset-0 z-0">
          <Particles
            init={particlesInit}
            options={{
              particles: {
                number: { value: 50 },
                size: { value: 1 },
                color: { value: "#3B82F6" },
                links: {
                  enable: true,
                  color: "#8B5CF6",
                  opacity: 0.3,
                },
                move: { enable: true, speed: 1 },
              },
            }}
          />
        </div>
        {/* Content Container */}
        <div className="relative z-10 text-center md:text-left md:flex items-center justify-between w-full max-w-7xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-8"
          >
            {/* Animated Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-blue-400 font-mono"
            >
              Hi, I'm
            </motion.div>

            {/* Name with Gradient and Staggered Letters */}
            <motion.div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
              >
                M Saad
              </motion.h1>
            </motion.div>

            {/* Animated Title */}
            <div className="text-3xl md:text-5xl font-semibold text-gray-300 h-16">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Specialist",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl"
            >
              Crafting digital experiences that combine innovative solutions
              with elegant design. Passionate about building fast, scaleable,
              user-centric applications.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2"
              >
                <span>Let's Collaborate</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Visual Element - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden backdrop-blur-xl bg-gray-800/30 border border-gray-700/50">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center text-9xl"
              >
                👨💻
              </motion.div>

              <div className="absolute top-10 left-10 w-8 h-8 bg-blue-500/20 rounded-full blur-md" />
              <div className="absolute bottom-16 right-12 w-12 h-12 bg-purple-500/20 rounded-full blur-lg" />
              <div className="absolute top-24 right-16 w-16 h-16 bg-pink-500/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center "
        >
          <div className="w-5 h-8 rounded-full border-2 border-blue-400 relative">
            <motion.div
              animate={{ y: [0, 16], opacity: [1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="w-1 h-2 bg-blue-400 rounded-full absolute top-1 left-1/2 -translate-x-1/2"
            />
          </div>
          <span className="mt-2 text-sm text-gray-400">Scroll Down</span>
        </motion.div> */}
      </div>
    </SectionWrapper>
  );
};

function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <main className="pt-20">
        {/* Hero Section */}
        {/* <SectionWrapper id="home">
          <div className="min-h-screen flex items-center">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                M Saad
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-8"
              >
                Full Stack Developer specializing in modern web applications
              </motion.p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold"
              >
                Get in Touch
              </motion.a>
            </div>
          </div>
        </SectionWrapper> */}

        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
