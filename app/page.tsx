import { Button, Heading, Tag, Text } from "@/components";

const Home = () => {
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
        Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft
        skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами,
        разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </Text>
      <Tag>medium tag</Tag>
    </main>
  );
};

export default Home;
