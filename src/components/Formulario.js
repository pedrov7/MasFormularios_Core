import React, { useState } from "react";


const Formulario = props => {
    let flag = false;
    let flag1 = false;
    let pass1;
    let pass2;

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const [error,setError] = useState("");
    const [error1,setError1] = useState("");
    const [error2,setError2] = useState("");
    const [error3,setError3] = useState("");
    const [error4,setError4] = useState("");
    const [error5,setError5] = useState("");


    const user = (e) => {
        // console.log(e.target.name);
        const newUser = { firstName, lastName, email, password, confirmPassword };

        if(e.target.name === 'firstName'){
            if(e.target.value.length < 2 ){
                setError("First name must be at least 2 characters")
            }
            else{
                setError("");
            }
        }

        if(e.target.name === 'lastName'){
            if(e.target.value.length < 2){
                setError1("Last name must be at least 2 characters")
            }
            else{
                setError1("");   
            }
        }

        if(e.target.name === 'email'){
            if(e.target.value.length < 2 ){
                setError2("E-mail must be at least 2 characters")
            }
            else{
                setError2("");
            }
        }


        if(e.target.name === 'password'){
            if(e.target.value.length < 8 ){
                setError3("Password must be at least 8 characters")
                flag = false;
            }
            else{
                setError3("");
                pass1 = e.target.value;
                flag = true;
                console.log(pass1);
            }
        }



        if(e.target.name === 'confirmPassword'){
            if(e.target.value.length < 8 ){
                setError4("Password must be at least 8 characters")
                flag1 = false;
            }
            else{
                setError4("");
                pass2 = e.target.value;
                flag1 = true;
                console.log(pass2);
            }
        }

        if(flag === flag1){
            if(pass1 === pass2){
                console.log("in1");
                setError5("Password must match")
            }            
        }
        else{
            setError5("");
        }



        
            
           
        
    };




    return (
        <div className="main">
            <form className="container" onChange={user}>
                <div className="row">
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">First Name</span>
                                <input type="text" onChange={(e) => setfirstName(e.target.value)} name = "firstName" class="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <p>{error}</p>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Last Name</span>
                                <input type="text" onChange={(e) => setlastName(e.target.value)} name="lastName" class="form-control" placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <p>{error1}</p>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Email</span>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" class="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <p>{error2}</p>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Password</span>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <p>{error3}</p>
                            
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Confirm Password</span>
                                <input type="password" onChange={(e) => setconfirmPassword(e.target.value)} name="confirmPassword" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <p>{error4}</p>
                            <p>{error5}</p>


                        </div>


                    </div>


                </div>


            </form>

            <div>

                <h2>Formulary information</h2>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName} </p>
                <p>E-mail: {email} </p>
                <p>Password: {password}</p>
                <p>Confirm password: {confirmPassword}</p>

            </div>



        </div>



    );
}

export default Formulario;