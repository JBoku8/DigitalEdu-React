import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

const tech = [
  {
    category: 'javascript',
    title: 'react',
  },
  {
    category: 'javascript',
    title: 'Vue',
  },
  {
    category: 'javascript',
    title: 'Angular',
  },
  {
    category: 'html',
    title: 'html',
  },
  {
    category: 'css',
    title: 'web animation',
  },
];

function Features(props) {
  const [data, setData] = useState([]);
  const location = props.location;

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryObject = {};
    for (let [key, value] of query.entries()) {
      queryObject[key] = value;
    }
    if (queryObject['s']) {
      const filter = tech.filter((item) =>
        item.category.startsWith(queryObject['s'])
      );
      setData(filter);
    } else {
      setData([...tech]);
    }
  }, [location]);

  return (
    <div className="row p-3 flex-column bg-light">
      <h3>Features Page</h3>
      <h4>{props.pageTitle}</h4>
      <Link
        to={{
          pathname: props.match.url,
        }}
      >
        <h2 className="text-bold">All</h2>
      </Link>
      <Link
        to={{
          pathname: props.match.url,
          search: 's=html',
        }}
      >
        <h2 className="text-bold">HTML</h2>
      </Link>
      <Link
        to={{
          pathname: props.match.url,
          search: 's=css',
        }}
      >
        <h2 className="text-bold">CSS</h2>
      </Link>
      <Link
        to={{
          pathname: props.match.url,
          search: 's=javascript',
        }}
      >
        <h2 className="text-bold">Javascript</h2>
      </Link>
      <hr />
      <div className="row row-cols-3 p-3">
        {data.length &&
          data.map((item) => (
            <Card key={item.title}>
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.category}</h6>
              {/* <p className="card-text">{item.category}</p> */}
            </Card>
          ))}
      </div>
    </div>
  );
}

export default Features;
