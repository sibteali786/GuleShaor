import React from "react";
import "./FAQ.scss";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="svg-container">
        <h2>Frequently Asked Questions</h2>
        <div class="custom-shape-divider-top-1653762327">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div style={{ padding: "2rem" }}>
        <div className="lowerDivider">
          <Typography variant="h3">Unpaid Member Ships</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            enim diam vulputate ut pharetra sit amet. In mollis nunc sed id
            semper risus. Purus non enim praesent elementum facilisis leo vel
            fringilla est. Etiam dignissim diam quis enim lobortis scelerisque.
            A condimentum vitae sapien pellentesque habitant morbi tristique.
            Sollicitudin nibh sit amet commodo nulla. Metus vulputate eu
            scelerisque felis imperdiet. Volutpat blandit aliquam etiam erat
            velit scelerisque in dictum non. Fusce id velit ut tortor. Tortor id
            aliquet lectus proin nibh nisl condimentum id. Vitae semper quis
            lectus nulla at volutpat diam. Sed faucibus turpis in eu. Tellus in
            metus vulputate eu scelerisque felis imperdiet. Commodo quis
            imperdiet massa tincidunt nunc pulvinar sapien et. Scelerisque eu
            ultrices vitae auctor eu augue ut lectus. Netus et malesuada fames
            ac. Donec pretium vulputate sapien nec sagittis aliquam malesuada
            bibendum arcu. Sed nisi lacus sed
          </Typography>
          <Typography variant="body2">
            viverra tellus in. Vel quam elementum pulvinar etiam non quam lacus
            suspendisse. Vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras tincidunt. Felis imperdiet proin fermentum leo.
            Egestas tellus rutrum tellus pellentesque eu tincidunt tortor
            aliquam. Tincidunt dui ut ornare lectus sit amet est placerat in.
            Nisl suscipit adipiscing bibendum est ultricies integer quis auctor.
            Enim ut sem viverra aliquet eget sit amet tellus. Varius quam
            quisque id diam vel quam elementum pulvinar etiam. Habitant morbi
            tristique senectus et netus et malesuada.
          </Typography>
          <Typography variant="h3">Marignzx</Typography>
          <Accordion style={{backgroundColor:"#252C33CC", color:"#F8F9FA"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{backgroundColor:"#252C33CC", color:"#F8F9FA"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Typography variant="body2">
            viverra tellus in. Vel quam elementum pulvinar etiam non quam lacus
            suspendisse. Vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras tincidunt. Felis imperdiet proin fermentum leo.
            Egestas tellus rutrum tellus pellentesque eu tincidunt tortor
            aliquam. Tincidunt dui ut ornare lectus sit amet est placerat in.
            Nisl suscipit adipiscing bibendum est ultricies integer quis auctor.
            Enim ut sem viverra aliquet eget sit amet tellus. Varius quam
            quisque id diam vel quam elementum pulvinar etiam. Habitant morbi
            tristique senectus et netus et malesuada.
          </Typography>
          <Accordion style={{backgroundColor:"#252C33CC", color:"#F8F9FA"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{backgroundColor:"#252C33CC", color:"#F8F9FA"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{backgroundColor:"#252C33CC", color:"#F8F9FA"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{backgroundColor:"#252C33CC", color:"#F8F9FA"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 6</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
