export const DEPARTMENTS = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
];

export const DEPARTMETNTS_OPTIONS = DEPARTMENTS.map((dept) => ({
  label: dept,
  value: dept.toLowerCase().replace(/\s+/g, "-"),
}));
