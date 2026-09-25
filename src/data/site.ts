/**
 * Source of truth for the site. Keep this aligned with the latest résumé.
 * Do not invent achievements, dates, URLs, or credentials here.
 */

export const person = {
  name: "Vansh Mittal",
  location: "Bloomington, Indiana",
  field: "Finance × Accounting × Informatics",
};

export const contact = {
  email: "vamitt@iu.edu",
  phone: "(812) 822-7926",
  phoneHref: "tel:+18128227926",
  /** Not in the résumé or repo — add the real URL before sharing. */
  linkedin: "https://www.linkedin.com/in/vamitt/",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#learning", label: "Learning" },
  { href: "#beyond", label: "Beyond" },
  { href: "#recal", label: "Recal" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  lede: "I study finance, accounting, and informatics at Indiana University, with a particular interest in understanding how businesses create value — and how that value gets reflected in markets.",
};

export const about = {
  title: "Finance, accounting, and the systems underneath them.",
  paragraphs: [
    "I am a student at Indiana University’s Kelley School of Business and Luddy School of Informatics, working toward a Bachelor of Science in Finance, Accounting, and Informatics. The combination is not a branding exercise. Accounting is how I try to see what a business actually did. Finance is how I try to say what it might be worth. Informatics is a reminder that both of those sit on data, models, and design choices.",
    "Most of my time goes into valuation, public-company research, and the unglamorous work of making a model internally consistent. I co-founded ThesisPoint Research to do that in public. Internships in private equity and valuation, and an investment banking bootcamp in New York, have been a way to see how those same questions look when the work has a deadline.",
    "I am early. I would rather be precise about what I have actually done — a DCF, a filing, a classroom, a report — than sound finished.",
  ],
  pullQuote:
    "A model is a set of claims. I want to know which claims survive a 10-K, a capital structure, and someone who disagrees.",
};

export const education = {
  school: "Indiana University",
  colleges: "Kelley School of Business · Luddy School of Informatics",
  city: "Bloomington, Indiana",
  degree: "Bachelor of Science in Finance, Accounting, and Informatics (STEM)",
  expected: "Expected May 2028",
  gpa: "3.81",
  honors: [
    "Hutton Honors Program",
    "Kelley Direct Admit",
    "Global Engagement Scholarship — $40,000 merit-based award",
    "1st Place — FSC Stock Pitch Case Competition (1st of 200+; LONG on Verisign)",
  ],
  coursework: [
    "Financial Reporting & Analysis",
    "Intermediate Financial Reporting",
    "Management Accounting & Analysis",
    "Topics in Finance",
    "Technology & Business Analysis",
  ],
};

export const experiences = [
  {
    org: "ThesisPoint Research",
    role: "Co-Founder",
    place: "Bloomington, IN",
    dates: "May 2026 – Present",
    summary:
      "An independent equity research platform. The work is to look at a public company the way a research process should: filings first, then a model, then a view that can be written down.",
    details: [
      "I help produce institutional-style stock reports built on DCF valuations, WACC and terminal value analysis, and comparable company benchmarking. The accounting work sits underneath that: 10-K and 10-Q analysis, normalizing revenue and margin drivers, working capital, capital structure, and the assumptions a valuation actually depends on.",
      "Published coverage so far includes Adobe Inc. and Meta Platforms. ThesisPoint is the place I am trying to make that process repeatable rather than a one-off class assignment.",
    ],
  },
  {
    org: "Houlihan Lokey",
    role: "Investment Banking Bootcamp",
    place: "New York, NY",
    dates: "December 2025 – January 2026",
    summary:
      "A firm-sponsored, in-office bootcamp. Competitively selected from a global applicant pool — not a full-time seat, and I do not describe it as one.",
    details: [
      "The week put me in the same room as CEO Scott Adelson and senior managing directors, and then back into the model. I worked through integrated three-statement modeling and comparable company analysis across 13 apparel peers, including Nike and adidas.",
      "I also built a DCF for Levi Strauss & Co. with an implied share price of approximately $20.14. The useful part was watching how quickly a multiple or a WACC moves the answer — and how little that means without a story that fits the financials.",
    ],
  },
  {
    org: "TRC Corporate Consulting",
    role: "Valuation Intern",
    place: "New Delhi, India",
    dates: "July 2025 – August 2025",
    summary:
      "A valuation internship that put DCF, purchase accounting, and option pricing on live company work rather than a textbook case.",
    details: [
      "I built a DCF for Ferns N Petals, working through revenue drivers, working capital, capex, and debt schedules. I also developed a Purchase Price Allocation for L&T Finance’s $56.6M acquisition of PMFPL’s gold loan arm, including a $10M branch network intangible and a $5.5M non-compete.",
      "Separately, I completed a Black-Scholes ESOP valuation for Acme Formulation. The thread across the three was the same: name the assumption, then see what the accounting and the contract actually support.",
    ],
  },
  {
    org: "Dark Alpha Capital",
    role: "Private Equity Intern",
    place: "Dover, DE",
    dates: "June 2025 – August 2025",
    summary:
      "Diligence and fundraising support on lower-middle-market healthcare and specialty services — operating models, not a public ticker.",
    details: [
      "I worked on diligence for 12+ targets in an $8–60M revenue range, looking at revenue quality, margin composition, customer retention, and the operating model underneath the CIM. That work included analysis around the $28M ShieldCoat Technologies acquisition and the $16M ArcticAir investment.",
      "I also supported fundraising materials for a $150M target fund — CIMs, pitch decks, and investor outreach to 80+ family offices, independent sponsors, and boutique institutional LPs.",
    ],
  },
];

export const researchIntro = {
  title: "Public markets, one company at a time.",
  lede: "ThesisPoint is how I try to turn filings, models, and a point of view into something another person can read. Coverage is still early. The method is the point.",
};

export const researchItems = [
  {
    category: "Sector note",
    title: "The outlook for the Indian banking sector in 2026",
    author: "Vansh Mittal",
    credit: "Senior Analyst · Financial · Financial Model Analyst",
    date: "May 22, 2026",
    description:
      "A look at Indian banking through credit demand, private-sector banks, digital banking, asset quality, margin pressure, regulatory risk, and the macro backdrop. Written as research, not as a prediction I would pretend is certain.",
    href: "",
  },
  {
    category: "Equity research",
    title: "Adobe Inc.",
    author: "Vansh Mittal",
    credit: "ThesisPoint Research",
    date: "",
    description:
      "Published coverage through ThesisPoint: public filings, valuation assumptions, and the usual work of asking whether the model and the business still agree.",
    href: "",
  },
  {
    category: "Equity research",
    title: "Meta Platforms",
    author: "Vansh Mittal",
    credit: "ThesisPoint Research",
    date: "",
    description:
      "Published coverage through ThesisPoint, built the same way: statements, drivers, comparables, and a DCF that has to survive its own assumptions.",
    href: "",
  },
];

export const learning = [
  {
    category: "Finance",
    tone: "The craft I spend the most time inside.",
    items: [
      "Financial modeling",
      "DCF",
      "Comparable company analysis",
      "Valuation",
      "Capital structure",
      "Accounting analysis",
      "Market research",
    ],
  },
  {
    category: "Markets",
    tone: "Mostly through research, clubs, and simulations.",
    items: [
      "Equities",
      "Options",
      "Fixed income",
      "Futures",
      "Distressed investing",
      "Public-market research",
    ],
  },
  {
    category: "Technology",
    tone: "Tools in service of the analysis, not a second résumé.",
    items: [
      "Python",
      "SQL",
      "Advanced Excel",
      "Power Pivot",
      "Excel Macros",
      "Data modeling",
      "Financial analysis",
      "Monte Carlo simulations",
      "Data-driven decision making",
    ],
  },
];

export const teaching = {
  lede: "I learn by building. I understand things better when I have to explain them.",
  roles: [
    {
      org: "BUS-A 306 Management Accounting & Analysis",
      role: "Supplemental Instruction Leader",
      dates: "August 2026 – Present",
      body: "I write original case sets on cost behavior, CVP analysis, budgeting, forecasting, standard costing, and variance analysis, then run weekly sessions — usually 15–20 students, 30–40 around exams. I was selected as 1 of 5 SI Leaders university-wide, through course performance, faculty nomination, a written application, and an interview.",
    },
    {
      org: "K303 Technology and Business Analytics",
      role: "Peer Tutor",
      dates: "August 2025 – May 2026",
      body: "I worked with 35+ students on advanced Excel, Power Pivot, data modeling, dashboards, Monte Carlo simulations, and macro-based automation — the unglamorous work of turning a dataset into something a business decision can use.",
    },
  ],
};

export const clubs = [
  {
    name: "Business Edge Club",
    role: "Financial Modeling Analyst",
    note: "A 3-statement model and DCF for Chipotle, and capital structure workshops for 50+ members.",
  },
  {
    name: "Fintech Club",
    role: "Active Member",
    note: "Stock research, options, and Python applied to financial analysis.",
  },
  {
    name: "Undergraduate Research and Trading Club",
    role: "Active Member",
    note: "Options, equities, fixed income, and futures — on simulated platforms, not a live P&L.",
  },
  {
    name: "Financial Literacy Club",
    role: "Active Member",
    note: "Valuation, time value of money, and discussions of M&A, IPOs, and earnings.",
  },
  {
    name: "Restructuring and Distressed Investing Club",
    role: "Active Member",
    note: "Distressed assets, restructuring, and the capital structure when a story has already broken.",
  },
];

export const skills = [
  {
    category: "Modeling",
    items: [
      "Advanced Excel",
      "Power Pivot",
      "Excel Macros",
      "Financial Modeling",
      "DCF",
      "Comparable Company Analysis",
    ],
  },
  {
    category: "Data / Technology",
    items: ["Python", "SQL", "Data Modeling", "Monte Carlo Simulation"],
  },
  {
    category: "Finance",
    items: ["Bloomberg Terminal", "Capital IQ", "Financial Analysis", "Valuation"],
  },
  {
    category: "Presentation",
    items: ["PowerPoint", "CIM / Pitch Deck preparation"],
  },
];

export const certifications = [
  "Akuna Capital Options 101",
  "Wall Street Bound Scholar",
  "Valuation Modelling — Training The Street / Train Pillars",
  "Fundamentals of Alternative Investments — CAIA",
  "Bloomberg Market Concepts",
];

export const beyond = [
  { name: "Travelling", hint: "Leaving the model for a while." },
  { name: "Poker", hint: "Probabilities with people in the room." },
  { name: "German Cars", hint: "Engineering, quietly." },
  { name: "Golden State Warriors", hint: "Basketball, loyally." },
  { name: "Roller Skating", hint: "Competitive." },
  { name: "Suits", hint: "The show. The clothes, too." },
];

export const recal = {
  why: [
    "I learn fastest around people who will not let a sloppy assumption pass. Clubs taught me the vocabulary. ThesisPoint, a PE intern desk, a valuation intern seat, and a week at Houlihan Lokey taught me how quickly that vocabulary meets a real company — and how often the first draft of a thesis is wrong.",
    "I want Recal for the same reason I write research and teach accounting: disagreement is how I find the claim I cannot defend. I am not looking for another credential. I am looking for a room where finance, accounting, markets, and the technology underneath them can sit in the same conversation, and where the test of an idea is whether it still holds after someone else has pushed on it.",
    "I am early in that work. That is precisely why I want to be around people who challenge my thinking. I would rather revise an assumption in public than arrive pretending I am finished.",
  ],
  bring: [
    {
      title: "Research, written down",
      body: "ThesisPoint exists because I wanted the model and the memo in the same place. I show up with that habit, not with a claim that coverage is complete.",
    },
    {
      title: "Teaching as a check on the work",
      body: "SI Leader for management accounting, peer tutor for business analytics. If I cannot explain the variance or the dashboard, I do not understand it yet.",
    },
    {
      title: "Markets and the private side",
      body: "Public-company research on one side; lower-middle-market diligence and a New York modeling week on the other. I am still learning both languages.",
    },
    {
      title: "Willingness to be wrong",
      body: "The useful part of a DCF, a PPA, or a stock pitch is not the output. It is finding the assumption that does not survive the filing.",
    },
  ],
};
