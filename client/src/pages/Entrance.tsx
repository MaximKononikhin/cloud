import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import MainLayout from '../modules/MainLayout/components';
import Input from '../modules/Input/components';

const validationSchema = yup.object().shape({
    email: yup.string().email('Введите валидный email').required('Введите email'),
    password: yup.string().required('Введите пароль')
})

const Entrance: React.FC = () => {
    return (
        <MainLayout>
            <div>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={(values) => console.log(values)}
                    validateOnBlur
                    validationSchema={validationSchema}
                >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <form onSubmit={handleSubmit}>
                        <p>
                            <Input type="text" name="email" label="Email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                        </p>
                        { touched.email && errors.email && <p>{errors.email}</p>}
                        <p>
                            <label>
                                Пароль
                                <input 
                                    type="text" 
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </label>
                        </p>
                        { touched.password && errors.password && <p>{errors.password}</p>}
                        <button 
                            disabled={!isValid && !dirty}
                            type="submit"
                        >
                            Отправить
                        </button>
                    </form>
                )}
                </Formik>
            </div>
        </MainLayout>
    )
}

export default Entrance
