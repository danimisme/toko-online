import AuthLayout from "../componnents/Layouts/AuthLayouts";
import FormLogin from "../componnents/Fragments/FormLogin";
const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
