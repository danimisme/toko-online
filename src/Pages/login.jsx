import AuthLayout from "../componnents/Layouts/AuthLayouts";
import FormLogin from "../componnents/Fragments/FormLogin";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Don't have an account?
        <Link to="/register" className="text-blue-600 font-bold">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
