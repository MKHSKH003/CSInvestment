import React from 'react';
import Toaster, { ToastStyles } from 'react-native-toaster';

let LoginFailure = ({isLoginSuccess}) => (
    isLoginSuccess==false?
    <Toaster message={  { text: 'Login failure, check your login details',styles: ToastStyles.error }}  />
    :
    null
);

export default LoginFailure;
