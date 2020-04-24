import React, { Component } from "react";
import { VectorMap } from "react-jvectormap";
import { connect } from "react-redux";
import "./style.css";

//import * as actions from "../redux/actions";
import { adjustZoomButtons } from "../helpers/adjustZoomButtons";
import store from "../redux/store";
import { GET_VISITED_COUNTRIES, SET_SIZES } from "../redux/actions";
import { adjustSizes } from "../helpers/adjustSizes";

window.addEventListener("message", (event) => {
  if (event.data.countries) {
    store.dispatch(GET_VISITED_COUNTRIES(event.data.countries));
    adjustSizes({ height: event.data.height, width: event.data.width });
    store.dispatch(
      SET_SIZES({ height: event.data.height, width: event.data.width })
    );
    adjustZoomButtons();
  }

  if (event.data && typeof event.data === "string") {
    const data = JSON.parse(event.data);
    if (data.countries) {
      store.dispatch(GET_VISITED_COUNTRIES(data.countries));
      adjustSizes({ height: data.height, width: data.width });
      store.dispatch(
        SET_SIZES({ height: event.data.height, width: event.data.width })
      );
      adjustZoomButtons();
    }
  }
});

document.addEventListener("message", (event) => {
  if (event.data.countries) {
    store.dispatch(GET_VISITED_COUNTRIES(event.data.countries));
    adjustSizes({ height: event.data.height, width: event.data.width });
    // store.dispatch(
    //   SET_SIZES({ height: event.data.height, width: event.data.width })
    // );
    adjustZoomButtons();
  }

  if (event.data && typeof event.data === "string") {
    const data = JSON.parse(event.data);
    if (data.countries) {
      store.dispatch(GET_VISITED_COUNTRIES(data.countries));
      adjustSizes({ height: data.height, width: data.width });
      // store.dispatch(
      //   SET_SIZES({ height: event.data.height, width: event.data.width })
      // );
      adjustZoomButtons();
    }
  }
});

class Map extends Component {
  state = { tip: "" };

  componentDidMount = () => {
    adjustZoomButtons();
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      this.props.visitedCountriesData.green.length !==
        nextProps.visitedCountriesData.green.length ||
      this.props.visitedCountriesData.yellow.length !==
        nextProps.visitedCountriesData.yellow.length ||
      this.props.visitedCountriesData.gray.length !==
        nextProps.visitedCountriesData.gray.length
    );
  };

  onRegionPress = (tip) => {
    window.ReactNativeWebView.postMessage(tip[0].innerText);
  };

  render() {
    return (
      <>
        <VectorMap
          map={"world_mill"}
          backgroundColor="#88b4fc"
          onRegionTipShow={(e, tip, code) => this.onRegionPress(tip)}
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
                values: this.props.visitedCountriesData.green,
                scale: ["#ffffff", "#04e004"], //your color game's here   -- verdes
                normalizeFunction: "polynomial"
              },
              {
                values: this.props.visitedCountriesData.gray,
                scale: ["#ffffff", "#c0c0c0"], //your color game's here  -- grises
                normalizeFunction: "polynomial"
              },
              {
                values: this.props.visitedCountriesData.yellow,
                scale: ["#ffffff", "#ffbf00"], //your color game's here  -- oro
                normalizeFunction: "polynomial"
              }
            ]
          }}
          zoomMax={20}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visitedCountriesData: state.countries.visitedCountriesData,
    sizes: state.sizes.sizes
  };
};

export default connect(mapStateToProps)(Map);
