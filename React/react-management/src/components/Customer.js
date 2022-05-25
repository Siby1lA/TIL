function Customer(props) {
  return (
    <>
      <CustomerProfile id={props.id} image={props.imgae} name={props.name} />
      <CustomerInfo
        name={props.name}
        birthday={props.birthday}
        gender={props.gender}
        job={props.job}
      />
    </>
  );
}

function CustomerProfile(props) {
  return (
    <div>
      <h2>
        {props.name}({props.id})
      </h2>
    </div>
  );
}

function CustomerInfo(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.job}</p>
    </div>
  );
}
export default Customer;
