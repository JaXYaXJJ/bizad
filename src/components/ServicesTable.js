import { useState } from "react";
import Joi from "joi";
import UserServiceChoice from "./UserServiceChoice";
import Status from "./Status";
import "./ServicesTable.css";

function ServicesTable() {
  const [services, setServices] = useState([]);
  const [notification, setNotification] = useState();
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addErr, setAddErr] = useState("");
  
  function addService() {
    const schema = Joi.object({
      notification: Joi.string(),
      status: Joi.string(),
      name: Joi.string().required().min(2),
      phone: Joi.string().required(),
      email: Joi.string()
        .required()
        .email({ tlds: {allow: false} }),
    });

    const service = {
      notification: notification,
      status: status,
      name: name,
      phone: phone,
      email: email,
    };

    const {error} = schema.validate(service);
    if (error) {
      setAddErr(error.details[0].message);
      console.log(error);
      return;
    }

    service.id = Math.random() + "";
    service.date = new Date().toLocaleString();

    const updated = [...services, service];
    setServices(updated);
  }

  function deleteService(service) {
    const updated = services.filter((serviceItem) => serviceItem.id !== service.id);
    setServices(updated);
  }

  return (
    <>
    <div className="topContainer p-5">
        <div className="topTitle d-flex justify-content-center">
        <h1 className="companyLogo">BizAd</h1>
        <h1 className="mx-2">notification center</h1>
        </div>
        <h3 className="d-flex justify-content-center">
          Choose services that you would like to get from BizAd
        </h3>
      </div>
      <div className="container d-flex justify-content-between p-4">
        
        <select className="rounded" value={notification} onChange={(e) => setNotification(e.target.value)}>
            <option>All</option>
            <option>Email</option>
            <option>WhatsApp</option>
            <option>Call</option>
            <option>SMS</option>
        </select>

        <select className="rounded mx-2" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Status</option>
            <option>Enable</option>
            <option>Disable</option>
        </select>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control me-2 rounded"
          type="text"
          placeholder="Name"/>

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control me-2 rounded"
          type="text"
          placeholder="Phone"/>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control me-2 rounded"
          type="text"
          placeholder="Email"/>

        <button className="serviceBtn rounded" onClick={addService}>
        <i class="bi bi-plus"></i>
        </button>
      </div>

      <div className="text-danger">{addErr}</div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Notification</th>
            <th>Status</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.date}</td>
              <td>
                <UserServiceChoice opt={service.notification}/>
              </td>
              <td>
                <Status type={service.status}/>
              </td>
              <td>{service.name}</td>
              <td>{service.phone}</td>
              <td>{service.email}</td>
              <td>
                <button className="serviceBtn rounded" onClick={() => deleteService(service)}>
                    <i class="bi bi-trash3"></i>
                </button>
               </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ServicesTable;
