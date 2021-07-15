import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import { AUTH_TOKEN } from './constant';

const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    signIn(params: {
        userName: $email, password: $password
    } ) {
        tokens {
            idToken
        }
    }
  }
`;

const LoginFormPage = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(true);
  const [alertError, setAlertError] = useState('');
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
  });

  const onToggleAlert = (msg) => {
    setAlertError(msg)
    setVisible(!visible)
  };

  const [login, { loading: mutationLoading } ] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: (response) => {
      const {
        tokens
      } = response.signIn;
      localStorage.setItem(AUTH_TOKEN, tokens.idToken);
      history.push('/user-info');
    }, onError(error) {
      onToggleAlert(error.message);
    },
  });
  return (
    <div>
      <h4 className="mv3 text-center mb-4 title-login"><strong>{ 'Login' }</strong></h4>
       <p className="text-danger">{ alertError }</p>
       {
         mutationLoading && <p>Loading...</p>
       }
      <div className="flex flex-column">
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="Enter your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex mt3 text-center">
        <Button
          color="info"
          className="pointer mr2 button login-btn"
          onClick={ login }
          size="lg"
        >
          {'Login'}
        </Button>
      </div>
    </div>
  );
};

export default LoginFormPage;