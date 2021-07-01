select "firstName", "lastName"
  from "films"
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
 where "films"."title" = 'Jersey Sassy';
