import React from "react";

export const Details = (props) => (
  <div className="col-md-5 offset-md-1">
    <div className="row mt-2">
      <div className="col-sm-4">
        <div className="pb-1"><strong>Wiek:</strong></div>
      </div>
      <div className="col-sm-8">
        <div className="pb-1 text-secondary">{props[0].age}</div>
      </div>
      <div className="col-sm-4">
        <div className="pb-1"><strong>Email:</strong></div>
      </div>
      <div className="col-sm-8">
        <div className="pb-1 text-secondary">{props[0].email}</div>
      </div>
      <div className="col-sm-4">
        <div className="pb-1"><strong>Telefon:</strong></div>
      </div>
      <div className="col-sm-8">
        <div className="pb-1 text-secondary">{props[0].phone}</div>
      </div>
      <div className="col-sm-4">
        <div className="pb-1"><strong>Adres:</strong></div>
      </div>
      <div className="col-sm-8">
        <div className="pb-1 text-secondary">{props[0].address}, {props[0].postCode}</div>
      </div>
    </div>
  </div>
)