-- Up Migration
create type user_role as enum ('ADMIN', 'USER');

create table "user" (
    id uuid primary key not null
    , email text not null
    , name text not null,
    , password text not null
    , role user_role not null
    , created_at timestamp not null default now()
    , deleted_at timestamp null
    , constraint unique_email unique (email) 
);

-- Down Migration
drop table "user";
drop type user_role;