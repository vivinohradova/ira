import ButtonMore from "../ButtonMore/ButtonMore";

const Success = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Оплата прошла успешно ✅</h1>
      <p>Спасибо за вашу оплату!</p>
      <ButtonMore text={"Home"} link={"https://vivinohradova.github.io/ira"}/>
    </div>
  );
};

export default Success;
