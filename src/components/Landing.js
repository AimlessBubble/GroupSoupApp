import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();

    return (
        <div id="Landing">

            <section>
                <img src={require("../images/GroupSoup.png")} id="LandingLogo"></img>
            </section>

            <section>
                <button id="LandingSignIn" onClick={() => navigate('/login')}> Sign in </button>
                <div id="LandingBar"></div>
            </section>

            <section id="SignInOptions"> 
                <button> Sign in with </button>
                <button> Sign in with </button>
                <button> Sign in with </button>
                <button> Sign in with </button>
                <p> Don't have an account? Sign up</p>
            </section>

        </div>  
    )
}

export default Landing;