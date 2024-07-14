import React from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../FormContainer";
import Messages from "../messages";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"
function Signup() {
  let navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const submithandler = async (e) => {
   //e.perventDefault();
    setMessage(`${fname},${lname},${email},${pass1},${pass2},${mobile}`)
    if (pass1 !== pass2) {
      setMessage("password is not matching");
    } //else if (mobile.length !== 10) {
    //setMessage("pls entre 10 digit number");
    //else if (pass1.length !== 4) {
    //setMessage("pls entre password length");
    else {
      try {
        const response = await fetch(
          "https://farming-1.onrender.com/api/auth/createUser",
          // Add http:// here -----------^
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: fname + lname,
              email: email,
              password: pass1,
              mobile: mobile,
              isAdmin:isAdmin,
            }),
          }
        );

        const jsn = await response.json();
          if (!jsn.success) {
            console.log("hii");
            setMessage(jsn.error);
          } else {
            console.log("hello");
            localStorage.setItem("token", jsn.authToken);
            localStorage.setItem("name", jsn.name);
            localStorage.setItem("success", jsn.success);
            localStorage.setItem("isAmin", jsn.isAdmin);   
            setMessage("SignUp Success");
          navigate("/");
        }
      } catch (error) {
        setMessage("Something went wrog");
      }
      setFname("");
      setLname("");
      setEmail("");
      setPass1("");
       setPass2("");
      setMobile("");
      setMessage("");
    }
  }

  return (
    <>
    <div className="signup">
      <FormContainer>
        <Form onSubmit={submithandler} >
          <h1 className="text-centre">Signup</h1>
          {message && <Messages varient="sucess">{message}</Messages>}
          <i className="fa-regular fa-user"></i>
          <Form.Group>
            <Form.Label className="label">First name</Form.Label>
            <Form.Control
             name="fname"
              type="text"
              placeholder="Enter your first  name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
              className="input"
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label className="label">last name</Form.Label>
            <Form.Control
             name="lname"
              type="text"
              placeholder="Enter your last  name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
              className="input"
            ></Form.Control>
          </Form.Group>
          <i className="fa-regular fa-envelope"></i>
          <Form.Group>
            <Form.Label className="label">Email</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            ></Form.Control>
          </Form.Group>
          <i className="fa-solid fa-lock"></i>
          <Form.Group>
            <Form.Label className="label">Password</Form.Label>
            <Form.Control
              name="pass1"
              type="text"
              placeholder="Enter your password"
              value={pass1}
              onChange={(e) => setPass1(e.target.value)}
              required
              className="input"
            ></Form.Control>
          </Form.Group>
          <i className="fa-regular fa-lock"></i>
          <Form.Group>
            <Form.Label className="label">Confrim password</Form.Label>
            <Form.Control
              name="pass2"
              type="text"
              placeholder="Password"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
              required
              className="input"
            ></Form.Control>
          </Form.Group>
          <i className="fa-solid fa-mobile"></i>
          <Form.Group>
            <Form.Label className="label">Mobile Number</Form.Label>
            <Form.Control
             name="mobile"
              type="Number"
              placeholder="Enter your Mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="input"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Check
    required
    label="Do you want to be admin"
    checked={isAdmin} // Ensure that the checkbox state is controlled by the isAdmin state
    onChange={(e) => setIsAdmin(e.target.checked)} // Set isAdmin to true or false based on checkbox state
    feedbackType="invalid"
    id="isAdmin"
    className="check"
/>
</Form.Group>
<Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          className="check"
        />
      </Form.Group>
          <Button className="mt-3" type="submit" variant="success">
            Signup
          </Button>
        </Form>
      </FormContainer>
      </div>
    </>
  );
}

export default Signup;
