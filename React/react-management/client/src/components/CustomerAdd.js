import { post } from "axios";
import { useState } from "react";

function CustomerAdd() {
  const [values, setValues] = useState({
    name: "",
    birthday: "",
    gender: "",
    job: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addCustomer().then((res) => console.log(res.data));
  };
  const handleValueChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const addCustomer = () => {
    const url = "/api/customers";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return post(
      url,
      JSON.stringify({
        name: values.name,
        birthday: values.birthday,
        gender: values.gender,
        job: values.job,
      }),
      config
    );
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1>고객 추가</h1>
        이름 :
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleValueChange}
        />
        생년월일
        <input
          type="text"
          name="birthday"
          value={values.birthday}
          onChange={handleValueChange}
        />
        성별
        <input
          type="text"
          name="gender"
          value={values.gender}
          onChange={handleValueChange}
        />
        직업
        <input
          type="text"
          name="job"
          value={values.job}
          onChange={handleValueChange}
        />
        <button type="submit">추가하기</button>
      </form>
    </>
  );
}
export default CustomerAdd;
