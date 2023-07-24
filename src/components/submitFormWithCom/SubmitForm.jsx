import "./SubmitForm.css";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    password: ""
}

const onSubmit = (values) => {
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required"),

    email: Yup.string()
        .required("Email is reqired")
        .email("Not a valid email format"),

    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must contain at least 6 chars")
        .max(15, "Password can contain max 15 chars")
        .matches (
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\-]{6,}$/, 
            "Password is not strong"
        )
});

const SubmitForm = () => {
    return (
        <div className="submit-form-container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="submit-form">

                    <h1 className="submit-form-heading">Submit Form</h1>

                    <div className="submit-form-row">
                        <label htmlFor="name">Name:</label>
                        <Field id="name" name="name"/>
                        <ErrorMessage name="name" component={"div"}/>
                    </div>

                    <div className="submit-form-row">
                        <label htmlFor="email">Email:</label>
                        <Field id="email" name="email"/>
                        <ErrorMessage name="email" component={"div"}/>
                    </div>

                    <div className="submit-form-row">
                        <label htmlFor="password">Password:</label>
                        <Field id="password" name="password"/>
                        <ErrorMessage name="password" component={"div"}/>
                    </div>

                    <button type="submit" id="submit">Submit</button>

                </Form>
            </Formik>
        </div>
    );
}

export default SubmitForm;