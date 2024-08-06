"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const Bio = () => {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center py-12 xl:py-0 bg-gray-900">
      <div className="container mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.8, ease: "easeIn" } }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
          I am deeply passionate about the theory of mathematics and its vast applications in computer science. The elegance and rigor of mathematical concepts like topology, analysis, and graph theory have always fascinated me. This passion drives me to delve into complex problems and find innovative solutions, particularly through the use of machine learning algorithms. I find immense satisfaction in training models and witnessing the practical impact of abstract mathematical ideas.
          </p>
          <p className="text-lg mb-4">
          My academic journey is far from over, as I aspire to pursue a Ph.D. in mathematics. This advanced study will allow me to further explore the depths of mathematical theory and its intersections with technology. I believe that a profound understanding of mathematics can unlock new potentials in various fields, including my professional interests.
          </p>
          <p className="text-lg mb-4">
          In addition to my academic pursuits, I enjoy a balanced lifestyle. Going to the gym is one of my favorite activities, helping me stay physically and mentally fit. When I am not immersed in mathematical problems, I love reading about theoretical mathematics, particularly topics like topology and graph theory. These subjects not only challenge my intellect but also inspire me to think creatively and abstractly.
          </p>
          <p className="text-lg mb-4">
          I am also dedicated to helping students with mathematics, aiming to dispel the stigma that math is hard. I believe that with the right guidance and approach, anyone can appreciate and excel in mathematics. It is incredibly rewarding to see students gain confidence and develop a genuine interest in the subject. By making math more accessible and enjoyable, I hope to inspire the next generation of mathematicians and problem solvers.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
};

// const Services = () => {
//   const services = [
//     {
//       num: "01",
//       title: "Web Development",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
//       href: "",
//     },
//     {
//       num: "02",
//       title: "UI/UX Design",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
//       href: "",
//     },
//     {
//       num: "03",
//       title: "Logo Design",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
//       href: "",
//     },
//     {
//       num: "04",
//       title: "SEO",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
//       href: "",
//     },
//   ];

//   return (
//     <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: 1,
//             transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//           }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
//         >
//           {services.map((service, index) => {
//             return (
//               <div
//                 key={index}
//                 className="flex-1 flex flex-col justify-center gap-6 group"
//               >
//                 {/* top */}
//                 <div className="w-full flex justify-between items-center">
//                   <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
//                     {service.num}
//                   </div>
//                   <Link
//                     href={service.href}
//                     className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
//                   >
//                     <BsArrowDownRight className="text-primary text-3xl" />
//                   </Link>
//                 </div>
//                 {/* title */}
//                 <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
//                   {service.title}
//                 </h2>
//                 {/* description */}
//                 <p className="text-white/60">{service.description}</p>
//                 {/* border */}
//                 <div className="border-b border-white/20 w-full"></div>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

const HomePage = () => {
  return (
    <>
      <Bio />
      {/* <Services /> */}
    </>
  );
};

export default HomePage;
