export type Subject = {
  id: number;
  code: string;
  name: string;
  department: string;
  university: string;
  description: string;
};

export const subjects: Subject[] = [
  // University 1
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    department: "Computer Science",
    university: "Madurai Kamaraj University",
    description:
      "Fundamentals of programming using C and problem solving techniques.",
  },
  {
    id: 2,
    code: "CS201",
    name: "Data Structures",
    department: "Computer Science",
    university: "Madurai Kamaraj University",
    description:
      "Study of arrays, stacks, queues, linked lists, trees and graphs.",
  },
  {
    id: 3,
    code: "MATH101",
    name: "Calculus",
    department: "Mathematics",
    university: "Madurai Kamaraj University",
    description:
      "Limits, derivatives, integration and applications of calculus.",
  },
  {
    id: 4,
    code: "PHY101",
    name: "Classical Mechanics",
    department: "Physics",
    university: "Madurai Kamaraj University",
    description: "Basic principles of motion, forces and energy.",
  },
  {
    id: 5,
    code: "CHEM101",
    name: "Organic Chemistry",
    department: "Chemistry",
    university: "Madurai Kamaraj University",
    description: "Structure, reactions and synthesis of organic compounds.",
  },

  // University 2
  {
    id: 6,
    code: "CS102",
    name: "Web Development",
    department: "Computer Science",
    university: "Bharathiar University",
    description:
      "Introduction to HTML, CSS, JavaScript and modern web technologies.",
  },
  {
    id: 7,
    code: "CS202",
    name: "Database Management Systems",
    department: "Computer Science",
    university: "Bharathiar University",
    description:
      "Concepts of relational databases, SQL queries and normalization.",
  },
  {
    id: 8,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Mathematics",
    university: "Bharathiar University",
    description: "Matrices, determinants, vector spaces and eigenvalues.",
  },
  {
    id: 9,
    code: "STAT101",
    name: "Statistics",
    department: "Statistics",
    university: "Bharathiar University",
    description:
      "Probability theory, statistical distributions and hypothesis testing.",
  },
  {
    id: 10,
    code: "COM101",
    name: "Financial Accounting",
    department: "Commerce",
    university: "Bharathiar University",
    description:
      "Basic accounting principles and preparation of financial statements.",
  },

  // University 3
  {
    id: 11,
    code: "CS103",
    name: "Software Engineering",
    department: "Computer Science",
    university: "University of Madras",
    description:
      "Software development life cycle, design methodologies and testing.",
  },
  {
    id: 12,
    code: "CS203",
    name: "Operating Systems",
    department: "Computer Science",
    university: "University of Madras",
    description: "Process management, memory management and file systems.",
  },
  {
    id: 13,
    code: "BIO101",
    name: "Microbiology",
    department: "Biology",
    university: "University of Madras",
    description:
      "Study of microorganisms including bacteria, viruses and fungi.",
  },
  {
    id: 14,
    code: "ECON101",
    name: "Microeconomics",
    department: "Economics",
    university: "University of Madras",
    description: "Demand, supply, market equilibrium and consumer behavior.",
  },
  {
    id: 15,
    code: "ENG101",
    name: "Communicative English",
    department: "English",
    university: "University of Madras",
    description: "Development of communication, grammar and writing skills.",
  },
];
