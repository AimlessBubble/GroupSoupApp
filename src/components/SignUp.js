import { useNavigate } from "react-router-dom"

function SignUp() {
    const navigate = useNavigate();

    return (
        <div id="SignUpStart">
            <h1>
                Finally, you're here! Ready to stir things up together?
            </h1>

            <section>
                <button className="submitButton" type="submit" onClick={()=> navigate("/Home")}> Hell yea!</button>
                <p className="mt-5"> Already have an account? <a href="/Login"> Sign in </a> </p>
            </section>

            <section>
                <button className="backButton" onClick={() => navigate('/')}> Take me back! </button>
            </section>

        </div>
    )
}

export default SignUp;