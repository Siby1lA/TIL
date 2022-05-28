function CustomerDelete(props) {
  const deleteCustomer = (id) => {
    const url = "/api/customer/" + id;
    fetch(url, {
      method: "DELETE",
    });
  };
  return <button onClick={() => deleteCustomer(props.id)}>삭제</button>;
}
export default CustomerDelete;
