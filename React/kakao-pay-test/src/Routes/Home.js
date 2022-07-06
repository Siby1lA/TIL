import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const config = {
    next_redirect_pc_url: "",
    tid: "",
    params: {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "초코파이",
      item_code: "100",
      quantity: 1,
      total_amount: 2200,
      vat_amount: 200,
      tax_free_amount: 0,
      approval_url: "http://localhost:3000/payresult",
      fail_url: "http://localhost:3000/payresult",
      cancel_url: "http://localhost:3000/payresult",
    },
  };
  const pay = () => {
    const { params } = config;
    axios
      .post("/v1/payment/ready", null, {
        params, // config 설정에 데이터를 담아 넘겨준다.
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_PAY_KEY}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        const {
          data: { next_redirect_pc_url, tid },
        } = res;
        console.log(next_redirect_pc_url);
        window.localStorage.setItem("tid", tid);
        window.location.href = next_redirect_pc_url;
      });
  };

  return (
    <div>
      <button onClick={() => pay()}>카카오 페이 결제</button>
    </div>
  );
}

export default Home;
