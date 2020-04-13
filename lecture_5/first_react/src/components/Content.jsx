import React from 'react';
import Logo from '../img/logo-og.png';

function Content(props) {
  return (
    <section className="content">
      <h2>Content Section</h2>
      <img src={Logo} alt="Logo Image" className="content__img" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nesciunt
        eius doloribus quis cum iusto fugiat. Temporibus exercitationem vel
        totam repudiandae animi provident numquam praesentium ex. Dignissimos
        adipisci voluptatem unde.
      </p>
      <hr />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facilis
        minima, eveniet aliquam ex consequuntur voluptate commodi repellat,
        quasi laborum provident nisi optio qui? Commodi eius illo aspernatur
        neque porro.
      </p>
    </section>
  );
}

export default Content;
