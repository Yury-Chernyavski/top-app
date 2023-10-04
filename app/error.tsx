"use client";

import React from "react";
import { Heading, Text } from "@/theme/components";

const Error = ({ error }: { error: Error }) => {
  return (
    <>
      <Heading variant="h1">Something went wrong!</Heading>
      <Text variant="l">{error.message}</Text>
    </>
  );
};

export default Error;
