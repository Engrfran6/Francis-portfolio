const page = ({params}) => {
  return (
    <div>
      <h2>CALCULATOR</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid doloribus cupiditate,
        quisquam nobis fugiat, dolore saepe eligendi voluptatem magnam tempore quos odio numquam.
        Quod fugit ex tempora quo illum, quaerat ad. Ea ad ratione, corporis voluptate fugit saepe
        aperiam earum quaerat, consequatur repudiandae sit. Excepturi ex, rerum qui accusantium iure
        quidem nobis voluptatem numquam assumenda deleniti debitis tempore autem consequatur
        doloremque, earum repellat reprehenderit consectetur libero expedita consequuntur, quo
        aliquid incidunt! Modi similique mollitia repudiandae nostrum tempora tenetur architecto
        deserunt vel? Natus maiores quibusdam a quas dolorem id, esse maxime odit enim? Laudantium
        rerum nesciunt molestias atque voluptatibus amet?
        <div>My Post: {params.slug}</div>
      </p>
    </div>
  );
};
export default page;
