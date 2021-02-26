import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = currentExperience
    ? Math.round((currentExperience * 100) / experienceToNextLevel)
    : 0;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        {percentToNextLevel > 0 && percentToNextLevel < 100 && (
          <span
            className={styles.currentExperience}
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience} px
          </span>
        )}
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
