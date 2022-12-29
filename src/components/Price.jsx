import {
  Box,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import slidericon from "../images/icon-slider.svg";
const Price = ({ props }) => {
  const { setCost, setMark, cost, mark, year, dark } = props;
  const view = {
    8: "10K",
    12: "50K",
    16: "100K",
    24: "500K",
    36: "1M",
  };
  function handleChange(value) {
    if (value <= 10) {
      setMark(10);
      setCost(8);
    } else if (value <= 50) {
      setMark(50);
      setCost(12);
    } else if (value < 100) {
      setMark(100);
      setCost(16);
    } else if (value < 500) {
      setMark(500);
      setCost(24);
    } else if (value <= 1000) {
      setMark(1000);
      setCost(36);
    }
    if (year) {
      setCost((prev) => prev * 12);
    }
  }
  console.log(cost);
  return (
    <div>
      <div className={`cta-header ${dark ? "hdark" : ""}`}>
        <span>{year ? view[cost / 12] : view[cost]} PAGEVIEWS</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className={`cost ${dark ? "hdark" : ""}`}>{`$${cost}.00`}</span>
          <span>{year ? "/year" : "/month"}</span>
        </div>
      </div>
      <Slider
        min={0}
        max={1001}
        step={1}
        value={mark}
        onChange={(value) => handleChange(value)}
      >
        <SliderTrack
          bg="hsl(174, 77%, 80%)"
          height={"8px"}
          borderRadius={"2px"}
        >
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="hsl(174, 86%, 45%)" />
        </SliderTrack>
        <SliderThumb
          boxSize={8}
          backgroundColor="hsl(174, 86%, 45%)"
          backgroundImage={slidericon}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        ></SliderThumb>
      </Slider>
    </div>
  );
};

export default Price;
