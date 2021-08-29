import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import MainLayout from '../modules/MainLayout/components';
import Input from '../modules/Input/components';
import Button from '../modules/Button/components';
import { css } from '@emotion/react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ILogin } from '../common/types';


const validationSchema = yup.object().shape({
    email: yup.string().email('Введите валидный email').required('Введите email'),
    password: yup.string().required('Введите пароль')
});

const wrapperStyles = `
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        width: 100%;
    }
`;

const headingStyle = `
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;

    color: #636363;

    margin: 0;
    margin-bottom: 53px;
`;

const Entrance: React.FC = () => {
    const history = useHistory();
    const { login } = useAuth();
    
    const onSubmit = async ({email, password}: ILogin) => {
        const response = await login({
            email: email, 
            password: password
        });

        history.push('/');
    };

    return (
        <MainLayout maxHeight={470}>
            <div css={css(wrapperStyles)}>
                <h2 css={css(headingStyle)}>Войти</h2>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={onSubmit}
                    validateOnBlur
                    validationSchema={validationSchema}
                >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <form onSubmit={handleSubmit}>
                        <Input 
                            type="text" 
                            name="email" 
                            label="E-mail" 
                            value={values.email} 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            error={touched.email && errors.email}
                        />
                        <Input 
                            type="password" 
                            name="password" 
                            label="Пароль" 
                            value={values.password} 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            error={touched.password && errors.password}
                        />
                        <Button
                            disabled={!isValid && !dirty}
                            type="submit"
                            ownStyles="margin: 0 auto; display: block;"
                        >
                            Продолжить
                        </Button>
                    </form>
                )}
                </Formik>
            </div>
        </MainLayout>
    )
}

export default Entrance