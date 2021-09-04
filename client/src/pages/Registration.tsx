import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import MainLayout from '../modules/MainLayout/components';
import Input from '../modules/Input/components';
import Button from '../modules/Button/components';
import { css } from '@emotion/react';
import { Link, useHistory } from 'react-router-dom';
import { IRegistration } from '../common/types';
import { useSession } from '../context/SessionContext';

const validationSchema = yup.object().shape({
    email: yup.string().email('Введите валидный email').required('Введите email'),
    password: yup.string().matches(/^[A-Za-z][A-Za-z0-9]*$/, 'Только латиница и цифры').min(8, 'Минимум 8 символов').required('Введите пароль'),
    firstName: yup.string().required('Введите имя'),
    secondName: yup.string().required('Введите фамилию'),
});

const wrapperStyles = `
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        width: 100%;

        display: flex;
        flex-direction: column;
    }
`;

const headingStyle = `
    font-family: Minsk;
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
    color: #FFFFFF;

    margin: 0;
    margin-bottom: 66px;
`;

const linkStyle = `
    display: block;
    font-size: 13px;
    line-height: 20px;
    color: #FFFFFF;
    margin: 0 auto;

    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;

const Registration: React.FC = () => {
    const history = useHistory();
    const { register } = useSession();

    const onSubmit = async ({ email, firstName, secondName, password }: IRegistration) => {
        await register({
            email, 
            password,
            firstName,
            secondName
        });

        history.push('/');
    }
    return (
        <MainLayout maxHeight={797}>
            <div css={css(wrapperStyles)}>
                <h2 css={css(headingStyle)}>Зарегистрироваться</h2>
                <Formik
                    initialValues={{
                        email: '',
                        firstName: '',
                        secondName: '',
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
                            name="firstName" 
                            label="Имя" 
                            value={values.firstName} 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            error={touched.firstName && errors.firstName}
                        />
                        <Input 
                            type="text" 
                            name="secondName" 
                            label="Фамилия" 
                            value={values.secondName} 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            error={touched.secondName && errors.secondName}
                        />
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
                            ownStyles="margin: 30px auto 25px; display: block;"
                        >
                            Зарегистрироваться
                        </Button>
                        <Link to="/login" css={css(linkStyle)}>
                            Войти
                        </Link>
                    </form>
                )}
                </Formik>
            </div>
        </MainLayout>
    )
}

export default Registration
