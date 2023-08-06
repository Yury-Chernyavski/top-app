import { Button, Heading, Tag, Text } from "@/theme/components";
import Link from "next/link";
import React from "react";
import { getMenu } from "@/actions/getMenu";


const Home = async () => {

  const menu = await getMenu();

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
      <Tag color="green">medium tag</Tag>
      <ul>
        {menu.map(m => (
          <li key={m._id.secondCategory}>
            <Link href={`#`}>{m._id.secondCategory}</Link>
          </li>))}
      </ul>
    </main>
  );
};

export default Home;
