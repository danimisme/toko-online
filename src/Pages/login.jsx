import AuthLayout from "../componnents/Layouts/AuthLayouts"
import FormLogin from "../componnents/Fragments/FormLogin"
const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage