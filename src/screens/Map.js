import React, { Component } from 'react';
import { VectorMap } from "react-jvectormap";
import { connect } from "react-redux"

//import * as actions from "../redux/actions";
import { adjustZoomButtons } from "../helpers/adjustZoomButtons"
import store from "../redux/store";
import { GET_VISITED_COUNTRIES } from '../redux/actions';

//https://github.com/datasets/country-list/blob/master/data.csv  -> country codes

window.addEventListener("message", event => {

  if (typeof event.data === "string") {
    alert(event.data)
    store.dispatch(GET_VISITED_COUNTRIES(event.data))
  }

})

class Map extends Component {

  componentDidMount = () => {
    adjustZoomButtons();
  }

  render() {

    return (
      <VectorMap map={'world_mill'}
        backgroundColor="#88b4fc"
        containerStyle={{
          width: window.innerWidth,
          height: "300px"
        }}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          }
        }}
        series={{
          regions: [
            {
              values: this.props.visitedCountriesData,
              scale: ["#146804", "#008000"],  //your color game's here
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return { visitedCountriesData: state.countries.visitedCountriesData }
}

export default connect(mapStateToProps)(Map);
