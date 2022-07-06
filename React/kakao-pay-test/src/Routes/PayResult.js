import React, { useEffect } from "react";
import axios from "axios";

function PayResult() {
  const code = new URL(window.location.href).searchParams.get("pg_token");
  const config = {
    params: {
      cid: "TC0ONETIME",
      tid: window.localStorage.getItem("tid"),
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      pg_token: code,
    },
  };
  useEffect(() => {
    const { params } = config;
    axios
      .post("/v1/payment/approve", null, {
        params, // config 설정에 데이터를 담아 넘겨준다.
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_PAY_KEY}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) console.log("결제완료");
      });
  }, []);
  return <div>Result Page</div>;
}

export default PayResult;
