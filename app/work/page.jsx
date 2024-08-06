"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Movie Recommendation Engine",
    title: "",
    description:
      "This project involves creating a movie recommendation engine and implementing Naive Bayes classification from scratch. The movie recommendation engine uses the Naive Bayes algorithm to predict user preferences. It starts by loading rating data from a file into a structured numpy array, mapping movie IDs, and counting ratings for each movie. The data distribution is analyzed, and the most-rated movie is identified. In the Naive Bayes classification project, training data and labels are defined, and the algorithm calculates prior probabilities and likelihoods. The classification process includes predicting the likelihood of a user liking a movie based on prior ratings and comparing the results with scikit-learn's implementation.",
    stack: [{ name: "Naive Bayes" },{ name: "Python" }, { name: "scikit-learn" }, { name: "Numpy" }],
    image: "/assets/work/NaiveBayes.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Face Recognition",
    title: "Face Recognition",
    description:
      "This project showcases the application of Support Vector Machines (SVMs) in various machine learning tasks, including face recognition and data classification. It explores the use of different kernel functions, such as the Radial Basis Function (RBF), to transform data into higher-dimensional spaces, making it more separable for effective classification. The project demonstrates how SVMs can be utilized to achieve high accuracy in pattern recognition and classification problems, highlighting their versatility and efficiency in handling complex datasets. Through visualizations and practical examples, the project aims to provide a comprehensive understanding of SVMs and their practical applications in machine learning.",
    stack: [{ name: "SVM" },{ name: "Python" }, { name: "scikit-learn" }, { name: "Numpy" },{ name: "Pandas" }],
    image: "/assets/work/SMV.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Tree-Based: Predicting Online Ad Clicks",
    title: "project 3",
    description:
      "This project focuses on predicting click-through rates (CTR) using advanced machine learning techniques. It includes the implementation of decision trees and the use of XGBoost, a powerful gradient boosting algorithm. The goal is to enhance the accuracy of CTR predictions by leveraging these methods to handle large and complex datasets effectively. Through detailed examples and visualizations, the project demonstrates how decision trees and XGBoost can be applied to real-world data to improve predictive performance, providing valuable insights into user behavior and ad effectiveness. This project aims to illustrate the practical applications of these techniques in the field of digital advertising and marketing analytics.",
    stack: [{ name: "Tree-Based Algoritms" },{ name: "Python" }, { name: "scikit-learn" }, { name: "Numpy" },{ name: "Pandas" },{ name: "XGBoost" }],
    image: "/assets/work/TreeBased.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Logistic Regression: Predicting Online Ad Clicks",
    title: "project 4",
    description:
      "This project delves into the implementation and application of logistic regression and feature selection techniques. Logistic regression is utilized to model the probability of a binary outcome, offering insights into the relationship between input variables and the likelihood of a particular event. The project includes various approaches to logistic regression, from scratch implementations to using TensorFlow and scikit-learn. Additionally, it explores feature selection methods, such as using random forests, to identify the most important variables that influence the predictive model's performance. By combining these techniques, the project aims to enhance the accuracy and interpretability of predictive models, providing a robust framework for tackling classification problems in various domains.",
    stack: [{ name: "Logistic Regression Algorithm" },{ name: "Python" }, { name: "scikit-learn" }, { name: "Numpy" },{ name: "Pandas" },{ name: "TenserFlow" }],
    image: "/assets/work/LogisticREgression.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Predicting Stock Prices",
    title: "project 5",
    description:
      "This project explores the application of neural networks for stock price prediction. It involves building and training neural network models to forecast future stock prices based on historical data. By leveraging the power of deep learning, the project aims to capture complex patterns and relationships within the data that traditional methods might miss. Through practical implementations and detailed examples, the project demonstrates how neural networks can be effectively utilized to enhance predictive accuracy in financial markets, providing valuable insights for traders and investors.",
    stack: [{ name: "Artificial Neural Networks" },{ name: "Python" }, { name: "scikit-learn" }, { name: "Numpy" },{ name: "Pandas" },{ name: "TenserFlow" }],
    image: "/assets/work/NeuralNetwork.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
