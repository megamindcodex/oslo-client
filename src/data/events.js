// Real events from Oslo University Hospital (OUH), pulled from the official
// site. Recurring patient courses list their most recently published cohort
// dates — check the source link for the current schedule, since new cohort
// dates are added a few times a year and weren't all published yet.
export const events = [
  {
    slug: 'kloke-valg-arendalsuka-2026',
    title: 'Mer er ikke alltid bedre: Hvordan ta kloke valg i Helse-Norge?',
    dates: '11 August 2026',
    time: '10:00–11:30',
    location: 'Arendal kino, sal 2, Arendalsuka',
    site: 'Arendalsuka',
    audience: 'Healthcare professionals, students, policymakers & the public',
    recurring: false,
    description:
      'A public panel hosted by Oslo University Hospital at Arendalsuka on making wiser choices in Norwegian healthcare — covering when to say no to unnecessary treatment, the use of AI in clinical practice, and whether the health system currently supports good decision-making. Physicians, university leadership, government officials and patient representatives take part.',
    sourceUrl: 'https://www.oslo-universitetssykehus.no/arrangementer/kloke-valg/',
    sourceLabel: 'Oslo University Hospital'
  },
  {
    slug: 'tarmkreft-lerings-og-mestringskurs',
    title: 'Tarmkreft: Lærings- og mestringskurs',
    dates: '28–29 October 2026',
    time: '10:00–14:30 both days',
    location: 'Vardesenteret, Radiumhospitalet',
    site: 'Radiumhospitalet',
    audience: 'Patients treated for bowel cancer and their families',
    recurring: false,
    description:
      'A two-day course for people who have or have had treatment for bowel cancer, and their relatives, run by the Cancer Clinic\'s learning and coping centre. The program includes a talk from a former patient, information on the disease and treatment, peer experience-sharing, guidance on physical activity, and coping strategies for daily life, with a multidisciplinary team and an experienced patient advocate facilitating.',
    sourceUrl: 'https://www.oslo-universitetssykehus.no/avdelinger/kreftklinikken/avdeling-for-klinisk-service-kreftklinikken/seksjon-for-psykososial-onkologi-mestring-og-rehabilitering/larings--og-mestringssenteret-og-pusterommene-i-kreftklinikken/tarmkreft-lerings-og-mestringskurs/',
    sourceLabel: 'Oslo University Hospital'
  },
  {
    slug: 'astmaskole-voksne-ulleval',
    title: 'Astmaskole for voksne (Adult Asthma School)',
    dates: 'Most recently 1 & 3 June 2026 — runs several times a year',
    time: '10:00–14:45 (two-day course)',
    location: 'Ullevål',
    site: 'Ullevål',
    audience: 'Adults (18+) living with asthma',
    recurring: true,
    description:
      'A recurring two-day course run by Ullevål\'s lung rehabilitation team, giving adults with asthma practical knowledge on managing the condition day to day. Held a handful of times a year — contact the lung rehabilitation team for the next scheduled dates.',
    sourceUrl: 'https://www.oslo-universitetssykehus.no/avdelinger/medisinsk-klinikk/lungemedisinsk-avdeling-ulleval/lungerehabiliteringsteamet/kursoversikt-lungerehabilitering/',
    sourceLabel: 'Oslo University Hospital'
  },
  {
    slug: 'kolsskole-ulleval',
    title: 'Kolsskole (COPD School)',
    dates: 'Most recently 16 & 18 March 2026 — runs several times a year',
    time: '10:30–14:30 (two-day course)',
    location: 'Ullevål',
    site: 'Ullevål',
    audience: 'Patients living with COPD',
    recurring: true,
    description:
      'A recurring two-day course for people living with chronic obstructive pulmonary disease (COPD), run by Ullevål\'s lung rehabilitation team to help patients understand and manage their condition. Contact the lung rehabilitation team for the next scheduled dates.',
    sourceUrl: 'https://www.oslo-universitetssykehus.no/avdelinger/medisinsk-klinikk/lungemedisinsk-avdeling-ulleval/lungerehabiliteringsteamet/kursoversikt-lungerehabilitering/',
    sourceLabel: 'Oslo University Hospital'
  },
  {
    slug: 'seks-ukers-lungerehabiliteringskurs',
    title: '6-Week Lung Rehabilitation Course',
    dates: 'Most recently 13 April – 20 May 2026 — runs several times a year',
    time: 'Mondays & Wednesdays, 10:00–13:30',
    location: 'Ullevål',
    site: 'Ullevål',
    audience: 'Patients with chronic lung conditions',
    recurring: true,
    description:
      'A comprehensive six-week rehabilitation program at Ullevål for people living with chronic lung conditions, combining supervised exercise sessions with education, twice a week. New cohorts start several times a year — contact the lung rehabilitation team for the next intake.',
    sourceUrl: 'https://www.oslo-universitetssykehus.no/avdelinger/medisinsk-klinikk/lungemedisinsk-avdeling-ulleval/lungerehabiliteringsteamet/kursoversikt-lungerehabilitering/',
    sourceLabel: 'Oslo University Hospital'
  }
]
