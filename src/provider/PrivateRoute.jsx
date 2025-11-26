import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
    //   console.log(user);
    
    if (loading) {
        return <Loader />
    }

  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRoute;
