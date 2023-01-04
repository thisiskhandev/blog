import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const navigate = useRouter();
  useEffect(() => {
    navigate.replace("/");
  }, []);
  return null;
}
