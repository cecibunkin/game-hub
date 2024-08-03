import {
  Card,
  CardBody,
  HStack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <Card marginBottom="4px" height="39px" padding="2px">
      <HStack height="39xp">
        <SkeletonCircle size="32px" marginBottom="10px" />
        <CardBody paddingLeft={0} width="80px">
          <SkeletonText noOfLines={1} width="64px" />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default GenreListSkeleton;
