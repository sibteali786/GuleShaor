import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.scss";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  interestedIn: "",
  message: "",
};
const interestedIn_options = [
  { label: "Engineering", value: "Engineering" },
  { label: "Commerce", value: "Commerce" },
  { label: "Medical", value: "Medical" },
];
const Footer = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hello Form is Clicked");
  };

  return (
    <div className="footer-container">
      <div className="form-footer">
        <p id="headingStylish">work with us</p>
        <div className="form-div">
          <IconButton aria-label="form-icon">
            <EmailIcon />
          </IconButton>
          <h4>For a Better Tommorow</h4>
          <form onSubmit={handleSubmit}>
            <div className="span-1">
              <FormControl>
                <FormLabel>Name</FormLabel>
                <TextField
                  id="name-input"
                  name="name"
                  type="Text"
                  value={formValues.name}
                  onChange={handleInputChange}
                  variant="standard"
                  size="small"
                />
                <FormHelperText>E.g: Sibteali Baqar</FormHelperText>
              </FormControl>
            </div>
            <div className="span-2">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <TextField
                  id="email-input"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  variant="standard"
                  size="small"
                />
                <FormHelperText>E.g: abc@gmail.com</FormHelperText>
              </FormControl>
            </div>
            <div className="span-3">
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <TextField
                  id="phone-input"
                  name="phone"
                  type="number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  variant="standard"
                  size="small"
                />
                <FormHelperText>E.g: +9212..</FormHelperText>
              </FormControl>
            </div>
            <div className="span-4">
              <FormControl>
                <FormLabel>Organization</FormLabel>
                <TextField
                  id="organization-input"
                  name="organization"
                  type="Text"
                  value={formValues.organization}
                  onChange={handleInputChange}
                  variant="standard"
                  size="small"
                />
                <FormHelperText>E.g: NUST</FormHelperText>
              </FormControl>
            </div>
            <div className="span-5">
              <FormControl>
                <FormLabel>Intrested In</FormLabel>

                <TextField
                  id="interestedin-input"
                  select
                  value={formValues.interestedIn}
                  onChange={handleInputChange}
                  helperText="Please select your currency"
                  variant="standard"
                  size="small"
                >
                  {interestedIn_options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </div>
            <div className="span-6">
              <FormControl>
                <FormLabel>Message</FormLabel>
                <TextField
                  id="message-input"
                  name="message"
                  type="Text"
                  value={formValues.message}
                  onChange={handleInputChange}
                  variant="standard"
                  multiline
                  maxRows={6}
                  size="small"
                />
              </FormControl>
            </div>
          </form>
        </div>
      </div>
      <div className="linkSection">
        <div className="span-1">
          <h4>GuleShaor</h4>
          <div>
            <Link to="/">Home</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/referrals">Referrals</Link>
            <Link to="/services">Services</Link>
            <Link to="/team">Team</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/resources">Resources</Link>
          </div>
        </div>
        <div className="span-2">
          <h4>Collaborate</h4>
          <div>
            <Link to="/referrals">Referrals</Link>
            <Link to="/exchange">Exchange</Link>
            <Link to="/opportunities">Opportunities</Link>
          </div>
        </div>
        <div className="span-3">
          <h4>My Account</h4>
          <div>
            <Link to="/session">Sessions</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
        <div className="span-4">
          <h4>Information</h4>
          <div>
            <Link to="/about">Terms & Conditions</Link>
            <Link to="/about">Privacy Policy</Link>
            <Link to="/careers">Jobs</Link>
          </div>
        </div>
        <div className="span-5">
          <h4>Get Connected</h4>
          <div>
            <Link to="/contact">Contact</Link>
            <a
              href="mailto:guleshaor.management@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              guleshaor.management@gmail.com
            </a>
          </div>
        </div>
        <div className="span-6">
          <h4>Follow Us</h4>
          <div className="social-links">
            <IconButton>
              <a href="www.facebook.com">
                <FacebookRoundedIcon />
              </a>
            </IconButton>
            <IconButton>
              <a href="www.twitter.com">
                <TwitterIcon />
              </a>
            </IconButton>
            <IconButton>
              <a href="www.instagram.com">
                <InstagramIcon />
              </a>
            </IconButton>
            <IconButton>
              <a href="www.linkedIn.com">
                <LinkedInIcon />
              </a>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
