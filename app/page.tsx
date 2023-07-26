"use client";
import { useState } from "react";
import { Button, Heading, Rating, Tag, Text } from "@/theme/components";

const Home = () => {
  const [rating, setRating] = useState(4);

  return (
    <main>
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
      <Tag>medium tag</Tag>
      <Rating
        rating={rating}
        isEditable={true}
        setRating={setRating}
      />
    </main>
  );
};

export default Home;
