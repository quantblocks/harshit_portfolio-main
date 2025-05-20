import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/**
 * — Fixed card dimensions for symmetry (540 px × 620 px on ≥ sm)
 * — Image container now uses `aspect-video` (16 : 9) so screenshots display without cropping
 *   Tailwind's built‑in aspect‑ratio utilities require v3.2+. If unavailable, swap
 *   `aspect-video` for a manual trick: `pb-[56.25%]` + absolutely‑positioned <img>.
 */

const CARD_HEIGHT = 540; // px – tweak to taste

const ProjectCard = ({ index, name, description, tags, image }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[540px] w-full flex flex-col"
      style={{ height: CARD_HEIGHT }}
    >
      {/* 16 : 9 screenshot */}
      <div className="relative w-full aspect-video">
        <img
          src={image}
          alt="project screenshot"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Title + description */}
      <div className="mt-5 flex-1">
        <h3 className="text-white font-bold text-[24px] leading-[32px]">
          {name}
        </h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Tech tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        This section highlights hands‑on applications of my core skills—mathematical optimisation, predictive modelling, and end‑to‑end data engineering—demonstrating my ability to translate complex requirements into efficient, scalable solutions and deliver measurable impact.
      </motion.p>
    </div>

    {/* 4 rem gap for generous spacing */}
    <div className="mt-20 flex flex-wrap gap-16">
      {projects.map((project, i) => (
        <ProjectCard key={`project-${i}`} index={i} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "");
