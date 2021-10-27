import { useEffect, useState } from "react";
import Table from "./components/Table";
import Loading from "./components/Loading";
import { USER_PER_PAGE } from "./utils/constants";

function App() {
  //State Values
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [totalPages, setTotalPages] = useState(0);

  //Fetch Data from Database
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/userData`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  //Update userList
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setUserList(data);
        setLoading(false);
        setTotalPages(Math.ceil(data.length / USER_PER_PAGE));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      {loading && <Loading />}
      <Table userList={userList} totalPages={totalPages} />
    </div>
  );
}

export default App;
