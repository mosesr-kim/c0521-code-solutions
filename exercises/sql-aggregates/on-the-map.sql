select "countries"."name" as "country", count("cities"."name") as "cities"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."name";
