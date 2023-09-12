
import { ComponentHero, ComponentSearchBar,  ComponentCustomFilter, ComponentCarCard } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {

  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <ComponentHero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Parking</h1>
            <p>Découvrez les voitures qui pourraient vous plaire</p>
        </div>
        <div className="home__filters">
          <ComponentSearchBar/>
          <div className="home__filter-container">
            <ComponentCustomFilter title="carburant"/>
            <ComponentCustomFilter title="année"/>
          </div>
        </div>
        {
          !isDataEmpty ? (
            <section className="home__cars--wrapper">
             {allCars?.map((car,i)=>(
              <ComponentCarCard key={i} car={car}/>
             ))}
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oups, nous n'avons rien pour le moment...</h2>
              <p>{allCars.message}</p>
            </div>
          )
        }
      </div>
    </main>
  )
}
