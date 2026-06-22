-- 1. Profiles Table (1-to-1 with Auth User)
create table if not exists profile (
  user_id uuid primary key references auth.users on delete cascade,
  startup_name text default '',
  one_liner text default '',
  target_audience text default '',
  business_model text default '',
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table profile enable row level security;
drop policy if exists "Users can manage their own profile" on profile;
create policy "Users can manage their own profile" on profile 
  for all using (auth.uid() = user_id);

-- 2. Items Table (GTD tasks)
create table if not exists items (
  id text primary key,
  user_id uuid references auth.users on delete cascade default auth.uid() not null,
  text text not null,
  bucket text not null, -- 'next' | 'waiting' | 'someday' | 'project' | 'done'
  who text default '',
  created_at bigint not null,
  completed_at bigint
);

-- Enable RLS
alter table items enable row level security;
drop policy if exists "Users can manage their own items" on items;
create policy "Users can manage their own items" on items 
  for all using (auth.uid() = user_id);

-- 3. Memory Log Table (Categorized memories)
create table if not exists memory_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade default auth.uid() not null,
  fact text not null,
  category text default 'general' not null, -- 'strategy' | 'finance' | 'product' | 'marketing' | 'team' | 'general'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table memory_log enable row level security;
drop policy if exists "Users can manage their own memories" on memory_log;
create policy "Users can manage their own memories" on memory_log 
  for all using (auth.uid() = user_id);

-- 4. Chat Sessions Table
create table if not exists chat_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade default auth.uid() not null,
  title text default 'New Session',
  summary text default '',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table chat_sessions enable row level security;
drop policy if exists "Users can manage their own chat sessions" on chat_sessions;
create policy "Users can manage their own chat sessions" on chat_sessions 
  for all using (auth.uid() = user_id);

-- 5. Chat Messages Table
create table if not exists chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references chat_sessions on delete cascade not null,
  user_id uuid references auth.users on delete cascade default auth.uid() not null,
  role text not null, -- 'user' | 'assistant'
  content text not null,
  captured jsonb default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table chat_messages enable row level security;
drop policy if exists "Users can manage their own chat messages" on chat_messages;
create policy "Users can manage their own chat messages" on chat_messages 
  for all using (auth.uid() = user_id);
