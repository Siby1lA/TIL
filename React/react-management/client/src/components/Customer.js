import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
function Customer(props) {
  return (
    <>
      <TableRow>
        <TableCell>{props.id}</TableCell>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.birthday}</TableCell>
        <TableCell>{props.gender}</TableCell>
        <TableCell>{props.job}</TableCell>
      </TableRow>
    </>
  );
}

export default Customer;
