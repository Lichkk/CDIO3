export const isJsonString = (data) => {
  try {
    JSON.parse(data);
  } catch (error) {
    return false;
  }
  return true;
};

export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const validate = ({ values }) => {
  const error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  // const password_pattern = /^(?=. *\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-ZO-9]{8,}$/;

  if (values.email === "") {
    error.email = "Không được để trống";
  }

  if (values.password === "") {
    error.password = "Không được để trống";
  }

  if (!email_pattern.test(values.email)) {
    error.email = "Eemail không đúng dịnh dạng!";
  }

  return error;
};
