import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
// import { withApollo } from '../../lib/apollo'
import { product } from './schema';

const HomePage = (props) => {
  const { data, loading, error } = useQuery(product, {
    variables: {
      category: "12"
    }
  });

  // const [getData, { data, loading, error }] = useLazyQuery(product, {
  //     variables: {
  //       category: "12"
  //     }
  //   });

  if (loading) return (<h1>Loading...</h1>);
  if (error) return (<p>Error</p>)
  if (data) console.log(data);
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {/* <button type="button" onClick={() => {
                loading ? () => {} : getData()
            }}>{loading ? 'Loading..': 'Get Data'}</button> */}
        <ul>
          {data && data.products && data.products.items && data.products.items.map((item, key) => (
            <li key={key}>{item.name}</li>
          ))}
        </ul>
      </main>
      <style jsx>{`

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
            margin: 0;
            line-height: 1.15;
            font-size: 1rem;
          }
      `}</style>
    </div>
  )
}


export default HomePage;
