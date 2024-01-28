import AuthLayout from "../componnents/Layouts/AuthLayouts";
import FormRegister from "../componnents/Fragments/FormRegister";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        Have an account?
        <Link to="/login" className="text-blue-600 font-bold">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
