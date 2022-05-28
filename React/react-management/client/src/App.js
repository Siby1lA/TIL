import "./App.css";
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useEffect, useState } from "react";
import CustomerAdd from "./components/CustomerAdd";

const callApi = async () => {
  const response = await fetch("/api/customers");
  const body = await response.json();
  return body;
};

function App() {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    callApi()
      .then((res) => setCustomers(res))
      .catch((err) => console.log(err));
  }, [customers]);
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
            <TableCell>설정</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers?.map((c) => (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          ))}
        </TableBody>
      </Table>
      <CustomerAdd />
    </div>
  );
}

export default App;
