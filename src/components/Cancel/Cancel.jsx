import ButtonMore from "../ButtonMore/ButtonMore";

const Cancel = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Оплата не завершена ❌</h1>
      <p>Вы отменили оплату.</p>
       <ButtonMore text={"Home"} link={"https://vivinohradova.github.io/ira"}/>
    </div>
  );
};

export default Cancel;
