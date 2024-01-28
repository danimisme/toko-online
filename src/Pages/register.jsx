import AuthLayout from "../componnents/Layouts/AuthLayouts";
import FormRegister from "../componnents/Fragments/FormRegister";
const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
