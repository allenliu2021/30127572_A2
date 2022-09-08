import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Slider,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

export default class HomePage extends Component {
  defaultMaxTimeToCBD = 30;
  // defaultMaxPopulationDensity = 30;
  // defaultMaxDistanceToCBD = 30;
  // defaultMaxCrimeRate = 30;

  constructor(props) {
    super(props);
    this.state = {
      university: null,
      maxTimeToCBD: this.defaultMaxTimeToCBD,
      // maxDistanceToCBD: this.defaultMaxDistanceToCBD,
      // maxCrimeRate: this.defaultMaxCrimeRate,
      // maxPopulationDensity: this.defaultMaxPopulationDensity,
    };

    this.handleUniversityChange = this.handleUniversityChange.bind(this);
    this.handleMaxTimeToCBDChange = this.handleMaxTimeToCBDChange.bind(this);
    // this.handleMaxDistanceToCBDChange =
    //   this.handleMaxDistanceToCBDChange.bind(this);
    // this.handleMaxCrimeRateChange = this.handleMaxCrimeRateChange.bind(this);
    // this.handleMaxPopulationDensityChange =
    //   this.handleMaxpopulationDensityChange.bind(this);
    // this.handleSearchButtonPressed = this.handleSearchButtonPressed.bind(this);
  }

  handleUniversityChange(e) {
    this.setState({
      university: e.target.value,
    });
  }

  handleMaxTimeToCBDChange(e) {
    this.setState({
      maxTimeToCBD: e.target.value,
    });
  }

  handleMaxDistanceToCBDChange(e) {
    this.setState({
      maxDistanceToCBD: e.target.value,
    });
  }

  handleMaxCrimeRateChange(e) {
    this.setState({
      maxCrimeRate: e.target.value,
    });
  }
  handleMaxpopulationDensityChange(e) {
    this.setState({
      maxPopulationDensity: e.target.value,
    });
  }
  handleSearchButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        university: this.state.university,
        filter_maxTimeToCBD: this.state.maxTimeToCBD,
        // filter_maxPopulationDensity: this.state.maxPopulationDensity,
        // filter_maxDistanceToCBD: this.state.maxDistanceToCBD,
        // filter_maxCrimeRate: this.state.maxCrimeRate,
      }),
    };
    fetch("/api/search-query", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h3" color="primary">
            Suburb Recommender| We will find the best suburb for you
          </Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <InputLabel id="select-university-label">University</InputLabel>

            <Select
              label="University"
              labelId="select-university-label"
              style={{ width: 400 }}
              onChange={this.handleUniversityChange}
            >
              <MenuItem value="Monash University">Monash University</MenuItem>
              <MenuItem value="University of Melbourne">
                University of Melbourne
              </MenuItem>
              <MenuItem value="Deakin University">Deakin University</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Maximum time (minutes) to CBD</div>
            </FormHelperText>

            <Slider
              aria-label="Distance"
              defaultValue={this.defaultMaxTimeToCBD}
              valueLabelDisplay="auto"
              step={5}
              marks={true}
              min={0}
              max={150}
              style={{ width: 400 }}
              onChange={this.handleMaxTimeToCBDChange}
            />
          </FormControl>
        </Grid>

        {/* <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Maximum Distacne to CBD</div>
            </FormHelperText>

            <Slider
              aria-label="Distance"
              defaultValue={this.defaultMaxDistanceToCBD}
              valueLabelDisplay="auto"
              step={5}
              marks={true}
              min={0}
              max={150}
              style={{ width: 400 }}
              onChange={this.handleMaxDistanceToCBDChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Maximum Crime Rate(per 100,000)</div>
            </FormHelperText>

            <Slider
              aria-label="Distance"
              defaultValue={this.defaultMaxCrimeRate}
              valueLabelDisplay="auto"
              step={5}
              marks={true}
              min={0}
              max={150}
              style={{ width: 400 }}
              onChange={this.handleMaxCrimeRateChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Maximum Population Density</div>
            </FormHelperText>

            <Slider
              aria-label="Distance"
              defaultValue={this.defaultMaxPopulationDensity}
              valueLabelDisplay="auto"
              step={5}
              marks={true}
              min={0}
              max={150}
              style={{ width: 400 }}
              onChange={this.handleMaxpopulationDensityChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Flat or House</div>
            </FormHelperText>
            <RadioGroup row defaultValue="Flat">
              <FormControlLabel
                value="Flat"
                control={<Radio color="primary" />}
                label="Flat"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="House"
                control={<Radio color="secondary" />}
                label="House"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid> */}

        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleSearchButtonPressed}
            // to="/about"
            // component={Link}
          >
            Search for Suburbs
          </Button>
        </Grid>
      </Grid>
    );
  }
}
