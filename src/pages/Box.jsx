/* eslint-disable react/prop-types */
function Box(props) {
  console.log(props);
  return (
    <div className="box">
      <img src={props.obj.image} alt="" />
      <div className="box-info">
        <h3>{props.obj.heading}</h3>
        <p>{props.obj.description}</p>
        <a href="">Know More</a>
      </div>
    </div>
  );
}
export default Box;
