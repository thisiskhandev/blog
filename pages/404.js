import { useRouter } from "next/router";
import Wrapper from "components/Wrapper";
import CTA from "components/CTA";
import styles from "@styles/404.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Custom404() {
  const router = useRouter();
  const [num, setNum] = useState(0);
  const notify = () =>
    toast(`♾️ Redirecting to Homepage in ${num}s!`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  useEffect(() => {
    let oldNum = 6;
    let timer = setInterval(() => {
      setNum(--oldNum);
      if (oldNum === 1) {
        clearInterval(timer);
      }
    }, 1000);
    setTimeout(() => {
      notify();
    }, 2000);
    setTimeout(() => {
      router.push("/");
      // router.back();
    }, 6000);
  }, []);
  return (
    <>
      <Wrapper>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          limit={1}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <section
          className={
            styles.main +
            " flex flex-col text-center items-center justify-center"
          }
        >
          <h1 className={styles.h1}>404</h1>
          <div className={styles.content}>
            <h2 className={styles.h2}>We are sorry, page not found!</h2>
            <p className="w-3/4 mx-auto">
              The page you are looking for might have been removed had its named
              changed or is temporarily unavailable
            </p>
            <CTA name="Homepage" link="/" />
            <h3>{`Redirecting to Homepage in ${num}s!`}</h3>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
