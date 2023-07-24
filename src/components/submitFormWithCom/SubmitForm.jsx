import "./SubmitForm.css";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
    name: "",
    email: "",
    password: ""
}

const onSibmit = (values) => {
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required"),

    email: Yup.string()
        .required("Email is required")
        .email("Not a valid email pattern"),

    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must contain at least 6 chars")
        .max(15, "password must has max 15 chars")
        .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\-]{6,}$/,
            "Not a strong password"
        ),
});

const SubmitForm = () => {
    return (
        <div className="submit-form-container">
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSibmit}
        >
            <Form className="submit-form">

                <h1 className="submit-form-heading">Submit form</h1>

                <div className="submit-form-row">
                    <label htmlFor="name">Name:</label>
                    <Field type="text" id="name" name="name"/>
                    <ErrorMessage name="name" component={"div"}/>
                </div>

                <div className="submit-form-row">
                    <label htmlFor="email">Email:</label>
                    <Field type="email" id="email" name="email" component={"div"}/>
                    <ErrorMessage name="email"/>
                </div>

                <div className="submit-form-row">
                    <label htmlFor="password">password:</label>
                    <Field type="password" id="password" name="password"/>
                    <ErrorMessage name="password" component={"div"}/>
                </div>

                <button id="submit" type="submit">Submit</button>
            </Form>
        </Formik>
        </div>
    );

}

export default SubmitForm;