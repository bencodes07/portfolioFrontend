import Tab from "../../src/components/admin/Tab";
import Taskbar from "../../src/components/admin/Taskbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

function Admin(props) {
  const router = useRouter();
  useEffect(() => {
    if (!props.loggedIn) {
      // router.push("/login");
    }
  }, []);

  return (
    <div className="admin">
      <Taskbar />
      <Tab />
    </div>
  );
}

Admin.getInitialProps = async function (context) {
  const { data } = await fetch("http://localhost:8000/api/check_user", {
    method: "POST",
    credentials: "include",
  });

  return { loggedIn: data.loggedIn };
};

export default Admin;
