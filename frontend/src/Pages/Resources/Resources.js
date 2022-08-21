import {
  CardContent,
  Grid,
  CardMedia,
  Card,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import "./Resources.scss";
import Flicking from "@egjs/react-flicking";
import resource from "../../Assets/Service/service2.jpg";
const Resources = () => {
  return (
    <div className="resource-container">
      <Grid container spacing={2} alignItems="center" className="headers">
        <Grid item xs={12} md={6}>
          <h1>Free Student Resources</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            dolore facilis impedit veritatis itaque labore totam sunt officiis
            vitae corporis voluptatum veniam, amet tempore cumque dolorem,
            similique ipsum inventore aperiam?
          </p>
        </Grid>
      </Grid>
      <div className="courses">
        <h2>Courses</h2>
        <hr />
        <Grid container spacing={1} className="courseCards">
          <Grid item xs={12} lg={6}>
            <Card>
              <CardMedia title="Resource" image={resource} />
              <CardContent>
                <Typography variant="h5">Python Mastery</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Flicking
              circular={true}
              circularFallback="bound"
              horizontal={false}
            >
              <div className="weather-panel">
                <CardMedia title="Resource" image={resource} />
                <Card>
                  <CardContent>
                    <Typography variant="h5">Python Mastery</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className="weather-panel">
                <CardMedia title="Resource" image={resource} />
                <Card>
                  <CardContent>
                    <Typography variant="h5">Python Mastery</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className="weather-panel">
                <Card>
                  <CardMedia title="Resource" image={resource} />
                  <CardContent>
                    <Typography variant="h5">Python Mastery</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Flicking>
          </Grid>
        </Grid>
        <Button variant="contained">Load More</Button>
      </div>
      <div className="courses">
        <h2>Developer Assets</h2>
        <hr />
        <Grid container spacing={1} className="courseCards">
          <Grid item xs={12} lg={6}>
            <Card>
              <CardMedia title="Resource" image={resource} />
              <CardContent>
                <Typography variant="h5">Python Mastery</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Flicking
              circular={true}
              horizontal={false}
              circularFallback="bound"
            >
              <div className="weather-panel">
                <CardMedia title="Resource" image={resource} />
                <Card>
                  <CardContent>
                    <Typography variant="h5">Python Mastery</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className="weather-panel">
                <CardMedia title="Resource" image={resource} />
                <Card>
                  <CardContent>
                    <Typography variant="h5">Python Mastery</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className="weather-panel">
                <Card>
                  <CardMedia title="Resource" image={resource} />
                  <CardContent>
                    <Typography variant="h5">Python Mastery</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Flicking>
          </Grid>
        </Grid>
        <Button variant="contained">Load More</Button>
      </div>
      <div className="courses">
        <h2>Free Templates</h2>
        <hr />
        <Grid container spacing={1} className="courseCards">
          <Grid item xs={12} lg={6}>
            <Card>
              <CardMedia title="Resource" image={resource} />
              <CardContent>
                <Typography variant="h5">Python Mastery</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Flicking
              circular={true}
              horizontal={false}
              circularFallback="bound"
            >
              <div className="weather-panel">
                <CardMedia title="Resource" image={resource} />
                <Card>
                  <CardContent>
                    <Typography variant="h5">Python Mastery</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className="weather-panel">
                <CardMedia title="Resource" image={resource} />
                <Card>
                  <CardContent>
                    <Typography variant="h5">Python Mastery</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div className="weather-panel">
                <Card>
                  <CardMedia title="Resource" image={resource} />
                  <CardContent>
                    <Typography variant="h5">Python Mastery</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus, dignissimos. Aliquam totam corporis placeat quod.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Flicking>
          </Grid>
        </Grid>
        <Button variant="contained">Load More</Button>
      </div>
    </div>
  );
};

export default Resources;
