import { useState, useEffect } from "react";
const FetchData = (url) => {
  const [data, setData] = useState(null);

  

  const loadData = async () => {
    const response = await fetch(url);
    const data = await response.json();
  //  console.log(data);
    setData(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleData = () => {
    loadData();
  };

  return [data, handleData];
};

export default FetchData;
