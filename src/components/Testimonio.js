import "../Styles/testimonio.css";

export function Testimonio(props) {
  return (
    <div className="container-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../Images/testimonio-${props.imagen}.png`)}
        alt="testimonio-daniel"
      />
      <div className="container-texto-testimonio">
        <p className="nombre-testimonio">
          {props.nombre} en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en {props.empresa}
        </p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}
