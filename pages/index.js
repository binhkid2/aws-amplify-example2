import { Card, Collection, Heading, View } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { listFeatures } from "../src/graphql/queries";
import Image from 'next/image'
export async function getServerSideProps() {
  try {
    const response = await API.graphql(
      graphqlOperation(listFeatures, {
        filter: { released: { eq: true } },
      })
    );

    return {
      props: {
        features: response.data.listFeatures.items,
      },
     
    };
  } catch (error) {
    console.log("Error fetching features: ", error);
    return {
      props: {
        features: [],
      },
     
    };
  }
}


export default function Home({ features }) {
  const region = process.env.REGION;
  const bucketName = process.env.BUCKET_NAME;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <View padding="2rem">
      <Heading level={2}>AmpliCar Roadmap Delivered Features</Heading>
      <View as="main" padding="2rem">
        {features.length > 0 ? (
          <div>
            {features.map((feature) => (
              <div key={feature.id}>
                <h2>{feature.title}</h2>
                <Image
                  src={`https://abcdeff20752-dev.s3.ap-northeast-1.amazonaws.com/public/${feature.internalDoc}`}
                  alt={feature.title}
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No features found.</p>
        )}
      </View>
    </View>
  );
}
