const convertData = (data: number[][], type: any) => {
  // چک کنید که type معتبر است و در داده وجود دارد
  if (!data || !data[type]) {
    console.error("Invalid data or type", data, type);
    return [];
  }

  // console.log("data:", data);
  // console.log("type:", type);

  const convertedData = data[type].map(
    (item : any) => {
      return {
        date: item[0],
        [type]: item[1],
      };
    }
  );

  // console.log("convertedData:", convertedData);

  return convertedData;
};

export default convertData;
