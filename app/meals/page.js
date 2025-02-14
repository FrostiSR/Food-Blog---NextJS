import Link from "next/link";
import classes from './page.module.css';
import MealsGrid from "@/components/Meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />  
}

export default function page() {
  return (
    <>
      <header className={classes.header}>
          <h1>
            Delicious meals, create <span className={classes.highlight}>by you</span>
          </h1>
          <p>
            Choose your favorite recipe and cook it yourself, it is easy and fun
          </p>
          <p className={classes.cta}>
            <Link href="/meals/share">
              Share your favorite recipe
            </Link>
          </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage/>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
