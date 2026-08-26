import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiMysql,
  SiGit,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { motion } from 'motion/react';
import SectionWrapper from './SectionWrapper';

const skills = [
  {
    name: 'HTML',
    icon: <SiHtml5 />,
    level: 'Comfortable',
  },
  {
    name: 'CSS',
    icon: <SiCss3 />,
    level: 'Comfortable',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    level: 'Intermediate',
  },
  {
    name: 'React',
    icon: <SiReact />,
    level: 'Intermediate',
  },
  {
    name: 'Python',
    icon: <SiPython />,
    level: 'Intermediate',
  },
  {
    name: 'Java',
    icon: <DiJava />,
    level: 'Familiar',
  },
  {
    name: 'MySQL',
    icon: <SiMysql />,
    level: 'Comfortable',
  },
  {
    name: 'Git / GitHub',
    icon: <SiGit />,
    level: 'Comfortable',
  },
];

const Skills = () => {
  return (
    <SectionWrapper delay={0.3}>
      <section id="skills" className="skills-section">

        {/* Header */}

        <div className="skills-header">
          <p className="skills-eyebrow">
            WHAT I WORK WITH
          </p>

          <h2 className="section-title">
            Skills<span>.</span>
          </h2>

          <p className="skills-description">
            A growing toolkit for building web apps,
            solving problems, and turning ideas into
            working products.
          </p>
        </div>

        {/* Skills */}

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
              }}
              whileHover={{
                y: -7,
              }}
            >
              <motion.div
                className="skill-icon"
                whileHover={{
                  scale: 1.15,
                  rotate: 4,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                }}
              >
                {skill.icon}
              </motion.div>

              <div className="skill-info">
                <h3>{skill.name}</h3>

                <span>
                  {skill.level}
                </span>
              </div>

              <motion.div
                className="skill-arrow"
                initial={{
                  opacity: 0,
                  x: -5,
                }}
                whileHover={{
                  opacity: 1,
                  x: 0,
                }}
              >
                ↗
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}

        <div className="skills-footer">
          <span />
          <p>
            Still learning. Still building.
          </p>
          <span />
        </div>

      </section>
    </SectionWrapper>
  );
};

export default Skills;