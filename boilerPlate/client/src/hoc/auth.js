import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../redux/action/user";
import { useNavigate } from "react-router-dom";
export default function (SpecificComponent, option, adminRoute = false) {
  const navigate = useNavigate();
  // option...
  // null => 아무나 출입 가능
  // true => 로그인한 유저만 출입 가능
  // false => 로그인한 유저는 출입 부가능
  function AtuhenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);
        //로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          //로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            navigate("/");
          } else {
            if (option === false) navigate("/");
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AtuhenticationCheck;
}
