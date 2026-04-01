/**
 * Faculty Data — sourced from https://chemical.iittp.ac.in/people/faculty
 * Each object has a unique `id` used in URLs and DOM element ids.
 */
const faculties = [
  {
    id: "anki-reddy",
    name: "Prof. Anki Reddy Katha",
    designation: "Professor & Head of the Department",
    qualification: "Ph.D., Indian Institute of Science, Bangalore, India.",
    expertise: ["Granular Physics", "Energy and Environmental Sciences"],
    contact: { email: "anki.reddy@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?hl=en&user=4CKTSowAAAAJ",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/anki.jpg",
    category: "faculty"
  },
  {
    id: "arun-tangirala",
    name: "Prof. Arun K. Tangirala",
    designation: "Professor",
    qualification: "Ph.D., University of Alberta, Edmonton",
    expertise: ["Process Systems Engineering", "Data Science & Artificial Intelligence"],
    contact: { email: "arunkt@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?user=i2s59iQAAAAJ&hl=en&oi=ao",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/arun.png",
    category: "faculty"
  },
  {
    id: "sasidhar-gumma",
    name: "Prof. Sasidhar Gumma",
    designation: "Professor",
    qualification: "Ph.D., Cleveland State University.",
    expertise: ["Metal organic frameworks", "Adsorption"],
    contact: { email: "s.gumma@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?user=csFhYF4AAAAJ&hl=en&oi=ao",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/SG.jpg",
    category: "faculty"
  },
  {
    id: "sunil-kumar",
    name: "Prof. Thamida Sunil Kumar",
    designation: "Professor",
    qualification: "Ph.D., University of Notre Dame, USA.",
    expertise: ["Microfluidics", "Corrosion Simulation"],
    contact: { email: "sunil76@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?user=j07xKRYAAAAJ&hl=en&oi=sra",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/sunil.jpg",
    category: "faculty"
  },
  {
    id: "bijoy-kumar-das",
    name: "Dr. Bijoy Kumar Das",
    designation: "Associate Professor",
    qualification: "Ph.D., National University of Singapore (NUS), Singapore.",
    expertise: ["Advanced Battery Materials and Chemistries", "Battery Manufacturing and Scalability"],
    contact: { email: "bijoy@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?hl=en&user=bijoy",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/bijoy.png",
    category: "faculty"
  },
  {
    id: "m-nabil",
    name: "Dr. M Nabil",
    designation: "Associate Professor",
    qualification: "Ph.D., IIT Madras, India.",
    expertise: ["Machine Learning for Process Systems", "Process Optimization & Control"],
    contact: { email: "nabil@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?hl=en&user=S4aJEdQAAAAJ&view_op=list_works&sortby=pubdate",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/Nabil.png",
    category: "faculty"
  },
  {
    id: "anil-vir",
    name: "Dr. Anil Vir",
    designation: "Assistant Professor",
    qualification: "Ph.D., Indian Institute of Technology (IIT) Madras, India.",
    expertise: ["Microfluidics", "Multiphase flow and Reaction"],
    contact: { email: "anilvir@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?user=HK51kKYAAAAJ&hl=en&authuser=3",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/anilvir.jpg",
    category: "faculty"
  },
  {
    id: "brindha-moorthy",
    name: "Dr. Brindha Moorthy",
    designation: "Assistant Professor",
    qualification: "Ph.D., KAIST, South Korea.",
    expertise: ["Materials Science and Engineering", "Functional Materials for Energy Storage Applications"],
    contact: { email: "brindha.m@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?user=zcooNUEAAAAJ&hl=en",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/brindha.jpg",
    category: "faculty"
  },
  {
    id: "narendra-singh",
    name: "Dr. Narendra Singh",
    designation: "Assistant Professor",
    qualification: "Ph.D., Indian Institute of Technology Kanpur, India.",
    expertise: ["Photocatalysis", "Surface engineering of polymer and metal surfaces"],
    contact: { email: "narendra@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?hl=en&user=sz5gBpwAAAAJ",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/narendra.jpg",
    category: "faculty"
  },
  {
    id: "nilesh-choudhary",
    name: "Dr. Nilesh Choudhary",
    designation: "Assistant Professor",
    qualification: "Ph.D., Academy of Scientific and Innovative Research (CSIR-NCL).",
    expertise: ["Multi-scale molecular simulation for applied materials and complex systems"],
    contact: { email: "nilesh@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?hl=en&user=1tPTOVUAAAAJ",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/nilesh.jpeg",
    category: "faculty"
  },
  {
    id: "payel-sen",
    name: "Dr. Payel Sen",
    designation: "Assistant Professor",
    qualification: "Ph.D., University of Alberta, Canada.",
    expertise: ["Electrochemical biosensing", "Sensor system engineering"],
    contact: { email: "psen@iittp.ac.in" },
    googleScholar: "https://www.researchgate.net/profile/Payel-Sen-4",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/payel.png",
    category: "faculty"
  },
  {
    id: "ranjith-thangavel",
    name: "Dr. Ranjith Thangavel",
    designation: "Assistant Professor",
    qualification: "Ph.D., Chonnam National University, South Korea.",
    expertise: ["Li-ion batteries, Na-ion batteries and beyond", "Catalysis for electrochemical energy conversion"],
    contact: { email: "ranjith.t@iittp.ac.in" },
    googleScholar: "https://scholar.google.co.kr/citations?user=GhrcS7UAAAAJ&hl=en",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/ranjith.png",
    category: "faculty"
  },
  {
    id: "shamik-misra",
    name: "Dr. Shamik Misra",
    designation: "Assistant Professor",
    qualification: "Ph.D., Indian Institute of Technology, Bombay, India.",
    expertise: ["Process systems engineering", "Renewable energy, and sustainability"],
    contact: { email: "misra@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?hl=en&user=T7wda1AAAAAJ",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/misra.png",
    category: "faculty"
  },
  {
    id: "trivikram-nallamilli",
    name: "Dr. Trivikram Nallamilli",
    designation: "Assistant Professor",
    qualification: "Ph.D., Indian Institute of Technology Madras, India.",
    expertise: ["Colloid and interfacial Phenomena", "Soft matter and Food physics"],
    contact: { email: "trivikram@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?hl=en&user=xuaWOC0AAAAJ",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/trivikram.jpg",
    category: "faculty"
  },
  {
    id: "s-uday-kumar",
    name: "Dr. S Uday Kumar",
    designation: "Assistant Professor",
    qualification: "Ph.D., IIT - Roorkee, Roorkee, India.",
    expertise: ["Nanobiotechnology and Biomaterials"],
    contact: { email: "udaykumar@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?hl=en&user=-J7H_x4AAAAJ",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/uday.jpg",
    category: "faculty"
  },
  {
    id: "raghavarao",
    name: "Prof. K S M S Raghavarao",
    designation: "Visiting Professor",
    qualification: "Ph.D., Institute of Chemical Technology (UICT), Mumbai, India. Post Doc - NIST-Colorado",
    expertise: ["Food Process Engineering", "Separation Processes", "Contemporary Indian Thought"],
    contact: { email: "raghava@iittp.ac.in" },
    googleScholar: "https://scholar.google.com/citations?user=XyKApXgAAAAJ&hl=en&oi=ao",
    imageUrl:"../../../listoffacultypage/public/listoffacultypage/prof_asset/raghavarao.png",
    category: "visiting"
  }
];
