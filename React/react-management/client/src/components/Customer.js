import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CustomerDelete from "../../../../../React/react-management/client/src/components/CustomerDelete";
function Customer(props) {
  return (
    <>
      <TableRow>
        <TableCell>{props.id}</TableCell>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.birthday}</TableCell>
        <TableCell>{props.gender}</TableCell>
        <TableCell>{props.job}</TableCell>
        <TableCell>
          <CustomerDelete id={props.id} />
        </TableCell>
      </TableRow>
    </>
  );
}

export default Customer;
