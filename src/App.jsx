import {
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import "./App.css";
import tick from "./images/icon-check.ico";

import Price from "./components/Price";
import Toggle from "./components/Toggle";
import { MdCheck } from "react-icons/md";
const App = () => {
  const [cost, setCost] = React.useState(8);
  const [mark, setMark] = React.useState(10);
  const [year, setYear] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    console.log("dark " + dark);
  }, [dark]);
  return (
    <div className={`container ${dark ? "ctdark" : ""}`}>
      <Switch
        onChange={() => setDark((prev) => !prev)}
        className={`darkmodeswitch ${dark ? "hdark" : ""}`}
      />
      <Heading className={`h1 ${dark ? "hdark" : ""}`}>
        Simple, traffic-based pricing
      </Heading>
      <div className="circle"></div>
      <h3 className={`h3 ${dark ? "hdark" : ""}`}>
        Sign-up for our 30-day trial. No credit card required.
      </h3>
      <div
        style={{
          width: "100vw",
          minHeight: "10vh",
          display: "flex",
          justifyContent: "center",
          paddingTop: "10vh",
        }}
      >
        <main className={`${dark ? "mdark" : ""}`}>
          <Price props={{ setCost, setMark, mark, cost, year, dark }} />
          <Toggle props={{ year, setYear, setCost, dark }} />
          <hr />
          <Flex
            pt="25px"
            width={"100%"}
            justifyContent="space-between"
            alignItems={"center"}
            className="footer"
          >
            <List
              spacing={3}
              color={dark ? "white" : "hsl(225, 20%, 60%)"}
              fontSize="14px"
              width={"50%"}
              className="footerlist"
            >
              <ListItem>
                <ListIcon mr="10px" as={MdCheck} color="green.500" />
                Unlimited Websites
              </ListItem>
              <ListItem>
                <ListIcon mr="10px" as={MdCheck} color="green.500" />
                100% data ownership
              </ListItem>
              <ListItem>
                <ListIcon mr="10px" as={MdCheck} color="green.500" />
                Email reports
              </ListItem>
            </List>
            <Button
              colorScheme="blue"
              width="200px"
              borderRadius="20px"
              fontSize="14px"
              bgColor={dark ? "white" : "hsl(227, 35%, 25%)"}
              color={dark ? "black" : "hsl(225, 20%, 60%)"}
              className="btn"
            >
              Start my trial
            </Button>
          </Flex>
        </main>
      </div>
    </div>
  );
};

export default App;
