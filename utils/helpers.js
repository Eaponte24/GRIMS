// get all departments
const getDepartments = async () => {
	const response = await fetch('/api/departments');
	const departments = await response.json();
	return departments;
};

getDepartmentId = async (departmentName) => {
  const departments = await getDepartments();
  const department = departments.find(
    (department) => department.department_name === departmentName
  );
  return department.id;
};

const parseFileName = (name) => {
  name.normalize("NKFD").replace(/\p{Diacritic}/gu, "")
	return name
		.replace(/[^a-zA-Z0-9 ]/g, '')
		.replace(/\s/g, '_')
		.toLowerCase();
};

module.exports = { getDepartments, getDepartmentId, parseFileName };
