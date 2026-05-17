// Mock subject data for three university courses
// Each subject includes: id, courseCode, name, department, description

export interface Subject {
  id: string;
  code: string;
  name: string;
  department: string;
  description: string;
  createdAt?: string;
}

export const mockSubjects: Subject[] = [
  {
    id: "1",
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "An overview of computer science fundamentals, programming basics, and problem-solving techniques.",
  },
  {
    id: "2",
    code: "MATH201",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "A study of vector spaces, linear transformations, matrices, and their applications.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    code: "PHY110",
    name: "General Physics I Here",
    department: "Physics",
    description:
      "Covers classical mechanics, motion, energy, and the fundamentals of physical laws.",
    createdAt: new Date().toISOString(),
  },
];
