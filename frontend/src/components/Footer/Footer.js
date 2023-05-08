import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { Button, MenuItem } from "@mui/material";
import SubmitButton from "../SubmitButton/SubmitButton";
const defaultValues = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  interestedIn: "",
  message: "",
};
const interestedIn_options = [
  {
    label: "Referral and direct partnership ",
    value: "Referral and direct partnership ",
  },
  { label: "Resource alliance", value: "Resource alliance" },
  {
    label: "University student ambassador",
    value: "University student ambassador",
  },
];
const navigation = {
  guleshaor: [
    { name: "Home", href: "/" },
    { name: "FAQ", href: "/faq" },
    { name: "Referrals", href: "/referral" },
    { name: "Services", href: "/service" },
    { name: "Team", href: "/team" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
  ],
  collaborate: [
    { name: "Referrals", href: "/referral" },
    { name: "Exchange", href: "#" },
    { name: "Opportunities", href: "#" },
  ],
  account: [
    { name: "Profile", href: "#" },
    { name: "Session", href: "#" },
  ],
  information: [
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Jobs", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg className="fill-black" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg className="fill-black" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg className="fill-black" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg className="fill-black" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => (
        <svg className="fill-black" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};
const Footer = ({ isForm }) => {
  const location = useLocation();
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        className="footer-container px-[4rem] py-[2rem]"
        style={
          location.pathname !== "/"
            ? { background: "#FAD5A5" }
            : {
                background:
                  "linear-gradient(181deg, rgba(188, 222, 255, 1) 18%, rgba(255, 229, 194, 1) 72%, rgba(250, 213, 165, 1) 88%)",
              }
        }
      >
        {isForm ? (
          <div className="form-footer">
            <p id="headingStylish" className="font-bold my-4 pb-10">
              Work With Us
            </p>
            <div className="form-div" id="form1">
              <IconButton aria-label="form-icon" className="logoButton">
                <EmailIcon />
              </IconButton>
              <h4>FOR A BETTER FUTURE OF PAKISTAN.</h4>
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
                      name="interestedIn"
                      value={formValues.interestedIn}
                      onChange={handleInputChange}
                      helperText="Please select your interest"
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
                <div className="span-7 flex justify-center mt-10">
                  <Button
                    className="rounded-full bg-black text-white hover:bg-black/90 w-2/6"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <footer className="bg-secondaryColor" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <svg
                width="32"
                height="27"
                viewBox="0 0 42 37"
                className="fill-black h-10 w-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.7376 11.8126C12.7376 11.8126 8.83193 13.7734 12.7376 21.8557C12.7376 21.8557 7.5885 19.7036 4.36834 10.2503L3.20462 5.38819C3.20462 5.38819 2.48725 0.0478242 0.127925 0C0.127925 0 -2.74153 24.9642 18.6997 37C18.6997 37 19.6561 23.9918 17.0258 20.405C17.0418 20.4209 12.4985 13.0879 12.7376 11.8126Z" />
                <path d="M28.8703 11.8126C28.8703 11.8126 32.776 13.7734 28.8703 21.8557C28.8703 21.8557 34.0194 19.7036 37.2395 10.2503L38.4033 5.38819C38.4033 5.38819 39.1206 0.0478242 41.48 0C41.48 0 44.3494 24.9642 22.9082 37C22.9082 37 21.9517 23.9918 24.5821 20.405C24.5661 20.4209 29.1094 13.0879 28.8703 11.8126Z" />
              </svg>

              <p className="text-base text-gray-900 font-semibold">
                Providing a demand-driven training system responsive to latest
                industrial trends.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-secondaryColor"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">
                    GuleShaoor
                  </h3>
                  <ul className="mt-4 space-y-4 p-0">
                    {navigation.guleshaor.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-black no-underline"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">
                    Collaborate
                  </h3>
                  <ul className="mt-4 space-y-4 p-0">
                    {navigation.collaborate.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-black no-underline"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">
                    Account
                  </h3>
                  <ul className="mt-4 space-y-4 p-0">
                    {navigation.account.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-black no-underline"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">
                    Information
                  </h3>
                  <ul className="mt-4 space-y-4 p-0">
                    {navigation.information.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-black no-underline"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-default pt-8">
            <p className="text-base text-default xl:text-center">
              &copy; 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
