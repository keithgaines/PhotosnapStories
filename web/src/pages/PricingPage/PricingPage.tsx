import React, { useEffect } from 'react';
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Intro from 'src/components/Intro/Intro'

import '../../features.css'
import '../../pricing.css'

function Pricing() {
  useEffect(() => {
    var btn = document.getElementById('card-button-toggler');
    var monthly = document.getElementById('monthly');
    var yearly = document.getElementById('yearly');
    var third_p = document.querySelectorAll('.price-card p:nth-child(3)');
    var fourth_p = document.querySelectorAll('.price-card p:nth-child(4)');
    var fifth_p = document.querySelectorAll('.price-card p:nth-child(5)');
    var sixth_p = document.querySelectorAll('.price-card p:nth-child(6)');

    function toggleActive() {
      btn.classList.toggle('active');
      monthly.classList.toggle('active');
      yearly.classList.toggle('active');
      third_p.forEach(function (this_p) {
        this_p.classList.toggle('active');
      });
      fourth_p.forEach(function (this_p) {
        this_p.classList.toggle('active');
      });
      fifth_p.forEach(function (this_p) {
        this_p.classList.toggle('active');
      });
      sixth_p.forEach(function (this_p) {
        this_p.classList.toggle('active');
      });
    }

    btn.addEventListener('click', toggleActive);

    return () => {
      btn.removeEventListener('click', toggleActive);
    };
  }, []);

  return (
    <>
      <MetaTags title="Pricing" description="Pricing page" />
      <Intro
      title="Pricing"
      description="reate your stories. Photosnap is a platform for photographers and visual storytellers. It’s the simple way to
      create and share your photos." 
      />
      <div className="wrap-price">
      <div className="button-price">
        <p id="monthly" className="active">Monthly</p>
        <div id="card-button-toggler" className="toggle-btn">
          <div className="inner-circle"></div>
        </div>
        <p id="yearly" className="">Yearly</p>
      </div>
      <div className="prices-cards">

        <div className="price-card">
          <p>Basic</p>
          <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
          <p className="">$19.00</p>
          <p className="">per month</p>
          <p className="">$190.00</p>
          <p className="">per year</p>
          <div className="card-button-div">
            <button className="card-button">PICK PLAN</button>
          </div>
        </div>

        <div className="price-card black-price-card">
          <p>Pro</p>
          <p>More advanced features available. Recommended for photography veterans and professionals.</p>
          <p className="">$39.00</p>
          <p className="">per month</p>
          <p className="">$390.00</p>
          <p className="">per year</p>
          <div className="card-button-div">
            <button className="card-button card-white-button">PICK PLAN</button>
          </div>
        </div>

        <div className="price-card">
          <p>Business</p>
          <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
          <p className="">$99.00</p>
          <p className="">per month</p>
          <p className="">$990.00</p>
          <p className="">per year</p>
          <div className="card-button-div">
            <button className="card-button">PICK PLAN</button>
          </div>
        </div>
      </div>
    </div>
  <div className="compare">
    <div className="compare-outer">
      <h1>COMPARE</h1>
      <div className="compare-table">
        <div className="table-row">
          <div className="col-desc table-col">THE FEATURES</div>
          <div className="table-col">BASIC</div>
          <div className="table-col">PRO</div>
          <div className="table-col">BUSINESS</div>
        </div>
        <div className="table-row">
          <div className="col-desc table-col">UNLIMITED STORY POSTING</div>
          <div className="table-col checked"></div>
          <div className="table-col checked"></div>
          <div className="table-col checked"></div>
        </div>
        <div className="table-row">
          <div className="col-desc table-col">UNLIMITED PHOTO UPLOAD</div>
          <div className="table-col checked"></div>
          <div className="table-col checked"></div>
          <div className="table-col checked"></div>
        </div>
        <div className="table-row">
          <div className="col-desc table-col">EMBEDDING CUSTOM CONTENT</div>
          <div className="table-col"></div>
          <div className="table-col checked"></div>
          <div className="table-col checked"></div>
        </div>
        <div className="table-row">
          <div className="col-desc table-col">CUSTOMIZE METADATA</div>
          <div className="table-col"></div>
          <div className="table-col checked"></div>
          <div className="table-col checked"></div>
        </div>
        <div className="table-row">
          <div className="col-desc table-col">ADVANCED METRICS</div>
          <div className="table-col"></div>
          <div className="table-col"></div>
          <div className="table-col checked"></div>
        </div>
        <div className="table-row">
          <div className="col-desc table-col">PHOTO DOWNLOADS</div>
          <div className="table-col"></div>
          <div className="table-col"></div>
          <div className="table-col checked"></div>
        </div>
        <div className="table-row">
          <div className="col-desc table-col">SEARCH ENGINE</div>
          <div className="table-col"></div>
          <div className="table-col"></div>
          <div className="table-col checked"></div>
        </div>
        <div className="table-row">
          <div className="col-desc table-col">CUSTOM ANALYTICS</div>
          <div className="table-col"></div>
          <div className="table-col"></div>
          <div className="table-col checked"></div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}


export default Pricing;
