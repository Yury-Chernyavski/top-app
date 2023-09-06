import { Button, Heading, Input, Tag, Text, Textarea } from "@/theme/components";
import React from "react";


const Home = () => {
  return (
    <>
      <Heading variant="h1">Some title</Heading>
      <Button
        variant="primary"
        arrow="right"
      >Button</Button>
      <Button
        variant="second"
        arrow="down"
      >Second button</Button>
      <Text>
        Students will master not only the hard skills necessary to work as a web designer, but also
        soft skills - skills that will allow them to effectively interact in a team with managers,
        developers and marketers. Graduates of the faculty can successfully compete with
        middle-level web designers.
      </Text>
      <Tag color="green">medium tag</Tag>
      <Input placeholder={"Name"}/>
      <div>
        <Textarea placeholder="Feedback"/>
      </div>
    </>
  );
};

export default Home;
