"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building high-performance web applications using Laravel, Vue.js, and MySQL with modern best practices.",
    href: "",
  },
  {
    num: "02",
    title: "Full-Stack Development",
    description:
      "Creating dynamic and scalable web applications with expertise in both front-end and back-end development.",
    href: "",
  },
  {
    num: "03",
    title: "Custom CRM Development",
    description:
      "Designing and developing customer relationship management (CRM) systems tailored to business needs using Laravel and Vue.js.",
    href: "",
  },
  {
    num: "04",
    title: "WordPress Development",
    description:
      "Building and customizing WordPress websites, themes, and plugins to meet client requirements.",
    href: "",
  },
  {
    num: "05",
    title: "E-Commerce Solutions",
    description:
      "Developing secure and scalable e-commerce platforms using Laravel, WooCommerce, or Shopify integrations.",
    href: "",
  },
  {
    num: "06",
    title: "API Development & Integration",
    description:
      "Creating RESTful APIs and integrating third-party services like payment gateways, SMS, and VoIP solutions.",
    href: "",
  },
  {
    num: "07",
    title: "Database Design & Optimization",
    description:
      "Designing scalable and optimized database structures using MySQL, improving performance and data management.",
    href: "",
  },
  {
    num: "08",
    title: "UI/UX Design & Frontend Development",
    description:
      "Designing responsive and interactive user interfaces using Bootstrap, Tailwind CSS, and Vue.js.",
    href: "",
  },
  {
    num: "09",
    title: "DevOps & Deployment",
    description:
      "Automating deployment processes, CI/CD pipelines, and managing cloud-based infrastructure for web applications.",
    href: "",
  },
  {
    num: "10",
    title: "Freelance Consulting",
    description:
      "Providing expert guidance on project development, best practices, and software architecture for startups and businesses.",
    href: "",
  },
];
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl "/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
