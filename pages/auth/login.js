import React from 'react';
import { useMutation } from '@apollo/client';
import { login } from './schema';

function LoginPage({ data }) {
    const [actionLogin, { loading }] = useMutation(login)

    const submit = () => {
        actionLogin({
            variables: {
                "email": "rifqi.abdillah@sirclo.com",
                "password": "Password-123"
              }
        }).then(res => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <div>
            <h5>LOGIN PAGE</h5>
            <button type="button" onClick={() => {
                loading ? () => {} : submit()
            }}>{loading ? 'Loading..': 'Login'}</button>
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/hello')
    const data = await res.json();
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
          data: data.name
      },
    }
  }

export default LoginPage;

