import React from "react";
import styles from "../styles/Honors.module.css";

export default function Honors() {
  const honors = [
    { title: "Longlist, Queen Mary Wasafiri New Writing Prize", year: 2025 },
    { title: <><em>Narrative Magazine</em> 17th Annual Poetry Contest, </>, year: 2025 },
    { title: "Outstanding Junior in Literature, Northwestern University Department of English", year: 2025 },
    {
      title: "Commended Poet, The Poetry Society of the UK's National Poetry Competition",
      year: 2024,
    },
    { title: "William Faricy Poetry Award, Northwestern University Department of English", year: 2024 },

    { title: "Helen G. Scott Prize for Best First-Year Paper, Northwestern University Department of English", year: 2023 },
    { title: "William Faricy Poetry Award, Northwestern University Department of English", year: 2023 },
    { title: "Semifinalist, Gregory Djanikian Scholars", year: 2023 },
    { title: "Semifinalist, The Adroit Prizes", year: 2023 },
    { title: <><em>Narrative Magazine</em> “Tell Me a Story” High School Contest, judged by Jericho Brown</>, year: 2022 },
    { title: "Finalist, Hippocrates Young Poets Prize for Poetry and Medicine", year: 2022 },
    { title: "Finalist, Arthur Flowers Short Fiction Prize", year: 2021 },
    { title: "Commended Poet, Foyle Young Poets", year: 2021 },
    { title: <>Elinor Benedict Poetry Prize, <em>Passages North</em></>, year: 2021 },
    { title: "Winner in Prose, Counterclock Awards", year: 2021 },
    { title: "Finalist in Fiction, Columbia College Chicago’s Young Authors Writing Competition", year: 2021 },
    { title: "Honorable Mention, Princeton University Leonard L. Milberg Poetry Prize", year: 2021 },
    { title: <>Honorable Mention, <em>The Kenyon Review</em>’s Patricia Grodd Poetry Prize</>, year: 2021 },
    { title: <>Shortlist, <em>Sine Theta</em> Summer Writing Contest, judged by R.F. Kuang</>, year: 2021 },
  ];

  return (
    <section
      className={styles.honorsSection}
      aria-labelledby="honors-heading"
    >
      <header className={styles.header}>
        <h2 id="honors-heading" className={styles.title}>
          Selected Honors
        </h2>
      </header>

      <ul className={styles.honorList}>
        {honors.map((item, idx) => (
          <li key={idx} className={styles.honorItem}>
            <span className={styles.honorTitle}>{item.title}</span>{" "}
            <time className={styles.honorYear}>({item.year})</time>
          </li>
        ))}
      </ul>
    </section>
  );
}
