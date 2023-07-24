import "./SubmitForm.css";
import { useFormik } from "formik";

const SubmitFrom = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },

        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div className="submit-form-container">
            <form className="submit-form" onSubmit={formik.handleSubmit}>
                
                <h1 className="submit-form-heading">Submit Form</h1>

                <div className="submit-form-row">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required onChange={formik.handleChange} value={formik.values.name}/>
                </div>

                <div className="submit-form-row">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required onChange={formik.handleChange} value={formik.values.email}/>
                </div>

                <div className="submit-form-row">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required onChange={formik.handleChange} value={formik.values.password}/>
                </div>

                <button id="submit" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SubmitFrom;