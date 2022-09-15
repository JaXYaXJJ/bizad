import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div class="txt-container position-relative">
        <p class="position-absolute top-0 end-0 my-3">{props.bizCategory}</p>
        <p class="position-absolute bottom-0">{props.imgTxtDown}</p>
        <img src={props.bizImg} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.bizName}</h5>
        <p className="card-text my-3">{props.description}</p>
        <p className="card-text"><i class="bi bi-house"></i> {props.adress}</p>
        <p className="card-text">
          <i class="bi bi-telephone"></i> {props.phone}</p>
        <div class="d-flex justify-content-between">
          <p className="card-text">
            <i class="bi bi-facebook px-1"></i>
            <i class="bi bi-instagram px-1"></i>
            <i class="bi bi-whatsapp px-1"></i>
          </p>
          <p className="card-text">
            Raiting: {props.stars} <i class="bi bi-star"></i>
          </p>
        </div>

        <button className="orderBtn">Order Service</button>
      </div>
    </div>
  );
}

export default Card;
