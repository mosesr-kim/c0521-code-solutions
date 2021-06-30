update "films"
   set "rating" = 'G'
 where "rating" = 'R'
 returning *;
