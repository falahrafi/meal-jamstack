import Header from "@/components/Header";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
// import { Grid2, Typography, Card } from '@mui/material';
import Image from "next/image";

export default async function Home() {
  const data = await (await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")).json();
  const mealCategories = data.categories;

  return (
    <>
      <Head>
        <title>Meal Categories</title>
        <meta name="description" content="Meal categories you can choose from" />
      </Head>

      <Header />

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-10">Meal Categories</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {mealCategories?.map((category) => (
            <div
              key={category.idCategory}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative w-full h-64">
                <Image
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">{category.strCategory}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}