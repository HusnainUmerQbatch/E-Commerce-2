const serviceErrorHandler = (err) => {
  const data = err?.response?.data;
  if (data) {
    if (data?.details?.length > 0) {
      return data.details[0].message;
    } else if (data?.message) {
      return data.message;
    }
  }
  return "Something went wrong. Try again later or contact developer.";
};

export {  serviceErrorHandler };
