import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import dummy_picture from "../assets/picture_placeholder.png";
import forpropertymanager_image from "../assets/forpropertymanager_image.jpg";
import forpropertymanager_step1 from "../assets/forpropertymanager_step1.png"
import forpropertymanager_step2 from "../assets/forpropertymanager_step2.png"
import forpropertymanager_step3 from "../assets/forpropertymanager_step3.png"
import forpropertymanager_step4 from "../assets/forpropertymanager_step4.png"

const resetForm = {
  firstName: "",
  lastName: "",
  businessName: "",
  locationCity: "",
  locationProvice: "Ontario",
  email: "",
  phoneNumber: "",
  totalUnitsManagedInPortfolio: "",
  propertyManagementSoftware: "notusingany",
};
export default function ForPropertyManager() {
  const requestDemo = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollHandler = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  const [formData, setFormData] = useState(resetForm);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("All inputs are valid");
  };

  return (
    <div className="forPropertyManager">
      <Navbar forPage="home" />
      <div className="container">
        <section className="one">
          <div className="left">
            <h1 className="headline">Rental properties</h1>
            <h4 className="headline-2">
              Rentwallex is proud to partner with leading property managers and
              landlords to offer our innovative financing solutions to tenants
              nationwide.
              <br />
              <br />
              Join our growing network of satisfied partners today.
            </h4>
            <div onClick={() => scrollHandler(requestDemo)}>
              <Button text="Request a demo" />
            </div>
          </div>
          <br className="linebreak" />
          <div className="right">
            <img
              referrerPolicy="no-referrer"
              src={forpropertymanager_image}
              alt="dummy_picture"
              width="100%"
            />
          </div>
        </section>
      </div>

      <div className="container">
        <section className="two">
          <div className="howItWorks">
            <h1>How Rentwallex Works for Property Managers and Landlords</h1>
            <br />
            <div className="steps">
              <div className="step">
                <div className="iconWrapper">
                  <img src={forpropertymanager_step1} alt="Step 1" />
                </div>
                <h3>Invite Tenants</h3>
                <h4>
                  Once your account is set up, invite your tenants to join
                  Rentwallex. They can sign up and start making payments in just
                  a few simple steps.
                </h4>
              </div>
              <br className="linebreak" />
              <br className="linebreak" />
              <div className="step">
                {/* <p>Step 3</p> */}

                <div className="iconWrapper">
                  <img src={forpropertymanager_step2} alt="Step 2" />
                </div>
                <h3>Automated Rent Collection</h3>
                <h4>
                  Sit back and relax as Rentwallex automates the rent collection
                  process. Payments are deposited directly into your account,
                  saving you time and effort.
                </h4>
              </div>
              <br className="linebreak" />
              <br className="linebreak" />
              <div className="step">
                <div className="iconWrapper">
                  <img src={forpropertymanager_step3} alt="Step 3" />
                </div>
                <h3>Monitor Payments</h3>
                <h4>
                  Keep track of rent payments and account activity through the
                  Rentwallex dashboard. Access real-time data to stay informed
                  and in control.
                </h4>
              </div>
              <br className="linebreak" />
              <br className="linebreak" />
              <div className="step">
              <div className="iconWrapper">
                  <img src={forpropertymanager_step4} alt="Step 4" />
                </div>
                <h3>Dedicated Support</h3>
                <h4>
                  Enjoy personalized support from the Rentwallex team, ensuring
                  any questions or concerns are addressed promptly and
                  effectively.
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="three">
        <div className="sectionWrapper">
          <div className="container left">
            <h1> Get Started Today!</h1>
            <br />
            {/* <br /> */}
            <h3>
              Join the growing community of property managers and landlords who
              are revolutionizing rent collection with Rentwallex. Streamline
              your operations, improve cash flow, and enhance tenant
              satisfaction.
            </h3>
            {/* <br /> */}
            {/* <br /> */}
            <br />
            <br />
            <h3>Have Questions ?</h3>
            <br />
            <h4>
              Our dedicated support team is here to help. If you have any
              questions or need assistance, please don&#39;t hesitate to contact
              us. We&#39;re committed to providing exceptional service and
              support to all our property managers and landlords.
            </h4>
            <br />
            <br />
            <h4>Trusted by Property Managers and Landlords</h4>
            <br />
            <h4>
              Rentwallex is proud to partner with leading property managers and
              landlords to offer our innovative financing solutions to tenants
              nationwide.
            </h4>
            <br />
            <br />
            <h4>Join our growing network of satisfied partners today.</h4>
          </div>
          <div className="container right" ref={requestDemo}>
            <form onSubmit={(e) => handleSubmit(e)}>
              {/* <h1>Sign up</h1> */}
              <div className="field">
                <h3>
                  <label>First name (todo: change to full name)</label>
                </h3>
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <h3>
                  <label>Last name</label>
                </h3>
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <br />
            <br /> */}
              <div className="field">
                <h3>
                  <label>Business name</label>
                </h3>
                <input
                  name="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <h3>
                  <label>City</label>
                </h3>
                <input
                  name="locationCity"
                  type="text"
                  value={formData.locationCity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <h3>
                  <label>Province</label>
                </h3>
                <br />
                <br />
                <div className="form-dropdown">
                  <select
                    value={formData.locationProvice}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        locationProvice: event.target.value,
                      })
                    }
                  >
                    <option value="Ontario"> Ontario</option>
                    <option value="Newfoundland and Labrador">
                      Newfoundland and Labrador
                    </option>
                    <option value="Prince Edward Island">
                      Prince Edward Island
                    </option>
                    <option value="Nova Scotia">Nova Scotia</option>
                    <option value="New Brunswick">New Brunswick</option>
                    <option value="Quebec">Quebec</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="Saskatchewan">Saskatchewan</option>
                    <option value="Alberta">Alberta</option>
                    <option value="British Columbia">British Columbia</option>
                  </select>
                  <div className="arrow"></div>
                </div>
              </div>
              {/* <br />
            <br /> */}
              <div className="field">
                <h3>
                  <label>Email</label>
                </h3>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <h3>
                  <label>Phone Number</label>
                </h3>
                <input
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <br />
            <br /> */}
              <div className="field">
                <h3>
                  <label>Total units managed in portfolio</label>
                </h3>
                {/* <br />
                <br /> */}
                <input
                  name="totalUnitsManagedInPortfolio"
                  type="number"
                  value={formData.totalUnitsManagedInPortfolio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <h3>
                  <label>What property management software do you use?</label>{" "}
                </h3>
                <br />
                <br />
                <div className="form-dropdown">
                  <select
                    value={formData.propertyManagementSoftware}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        propertyManagementSoftware: event.target.value,
                      })
                    }
                  >
                    <option value="buildingstack">Building Stack</option>
                    <option value="buildium">Buildium</option>
                    <option value="capterra">Capterra</option>
                    <option value="doorloop">Doorloop</option>
                    <option value="totalmanagement">Total management</option>
                    <option value="notusingany">Not using any</option>
                    <option value="others">Others</option>
                  </select>
                  <div className="arrow"></div>
                </div>
              </div>

              <br />
              <br />
              <br />
              <Button text="Submit" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
