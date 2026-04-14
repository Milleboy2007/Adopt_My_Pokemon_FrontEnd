import Footer from "../components/General/Footer"
import Header from "../components/General/Header"
import SignInForms from "../components/SignIn/SignInForms"
import "./SignIn.css"

function SignIn(){
    return (
        <>
            <Header/>
            <main>
                <SignInForms/>
            </main>
            <Footer/>
        </>
    )
} export default SignIn