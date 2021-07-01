select "categories"."name" as "category", count("filmCategory"."categoryId")
  from "actors"
  join "castMembers" using ("actorId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
 where "firstName" = 'Lisa'
  group by "categories"."name";
