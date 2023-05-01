import React from "react";
import { ProductCard } from "@/components/";
import { graphql, useStaticQuery } from "gatsby";
import { Layout } from "@/components/Layout";
import { Data } from "@/@types";

export default function Home() {
  const { data }: Data = useStaticQuery(graphql`
    query {
      data {
        allProducts {
          id
          title
          price
          image
        }
      }
    }
  `);
  return (
    <main>
      <Layout>
        {data.allProducts.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </Layout>
    </main>
  );
}
