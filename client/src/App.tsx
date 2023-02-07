import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  const { user } = useAuth0();

  console.log(user);
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
