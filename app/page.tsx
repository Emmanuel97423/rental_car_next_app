import { ComponentHero, ComponentSearchBar,  ComponentCustomFilter} from "@/components";

export default function Home() {
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
      </div>
    </main>
  )
}
