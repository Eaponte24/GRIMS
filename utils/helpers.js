const { Department } = require('../models');

getDepartmentId = async (departmentName) => {
  try {
    const departmentData = await Department.findOne({
      where: {
        department_name: departmentName,
      },
    });
    return departmentData.id;
  } catch (err) {
    console.log(err);
  }
};

const parseFileName = (name) => {
  name.normalize("NFKD").replace(/\p{Diacritic}/gu, "")
	return name
		.replace(/[^a-zA-Z0-9 ]/g, '')
		.replace(/\s/g, '_')
		.toLowerCase();
};

module.exports = { getDepartmentId, parseFileName };
