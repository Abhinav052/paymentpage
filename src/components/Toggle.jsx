import React from "react";

import {
  FormControl,
  FormLabel,
  Heading,
  Switch,
  Text,
} from "@chakra-ui/react";
const Toggle = ({ props }) => {
  const { year, setYear, setCost, dark } = props;
  function handleChange(value) {
    setYear((prev) => !prev);
    setCt((prev) => prev + 1);
  }
  const [ct, setCt] = React.useState(0);
  React.useEffect(() => {
    if (ct == 0) return;
    if (year) {
      setCost((prev) => Math.round(prev * 12));
    } else {
      setCost((prev) => Math.round(prev / 12));
    }
  }, [year]);
  console.log(year);
  return (
    <div>
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent={"flex-end"}
        color={dark ? "white" : "hsl(225, 20%, 60%)"}
        mt={"20px"}
        mb="40px"
        onChange={(value) => handleChange(value)}
        className="tgmenu"
      >
        <FormLabel htmlFor="email-alerts" fontSize="14px" mr="20px">
          Monthly Billing
        </FormLabel>
        <Switch id="email-alerts" colorScheme="teal" />
        <FormLabel htmlFor="email-alerts" mb="0" ml="20px" fontSize="14px">
          Yearly Billing{" "}
          <Text
            display="inline-block"
            bgColor="hsl(14, 92%, 95%)"
            borderRadius="5px"
            p="5px"
            fontSize="12px"
            color={"hsl(15, 100%, 70%)"}
            ml="5px"
          >
            25% discount
          </Text>
        </FormLabel>
      </FormControl>
    </div>
  );
};

export default Toggle;
