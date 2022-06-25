import React from "react";
import {detailsData} from "../../utils/personal-data";

export const Details = () => (
  <div className="col-md-5 offset-md-1">
    <div className="row mt-2">
      <div className="col-sm-4">
        <div className="pb-1"><strong>Wiek:</strong></div>
      </div>
      <div className="col-sm-8">
        <div className="pb-1 text-secondary">{detailsData.age}</div>
      </div>
      <div className="col-sm-4">
        <div className="pb-1"><strong>Email:</strong></div>
      </div>
      <div className="col-sm-8">
        <div className="pb-1 text-secondary">{detailsData.email}</div>
      </div>
      <div className="col-sm-4">
        <div className="pb-1"><strong>Telefon:</strong></div>
      </div>
      <div className="col-sm-8">
        <div className="pb-1 text-secondary">{detailsData.phone}</div>
      </div>
      <div className="col-sm-4">
        <div className="pb-1"><strong>Adres:</strong></div>
      </div>
      <div className="col-sm-8">
        <div className="pb-1 text-secondary">{detailsData.address}, {detailsData.postCode}</div>
      </div>
    </div>
  </div>
)