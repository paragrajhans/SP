import React from "react";
import Slider from "rc-slider";
import "./ReturnsSlider.scss";
import "rc-slider/assets/index.css";

const ReturnsSlider = (props) => {
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <Range
          defaultValue={[props.startYear, props.endYear]}
          min={1926}
          max={props.latestYear}
          tipFormatter={(val) => val}
          onAfterChange={props.onChangeSlider}
          ariaValueTextFormatterGroupForHandles={[
            (val) => `Starting year ${val}`,
            (val) => `Ending year ${val}`,
          ]}
        />
      </div>
    </div>
  );
};
export default ReturnsSlider;
