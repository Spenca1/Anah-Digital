--
-- PostgreSQL database dump
--

\restrict l0PpRJpwyXlIJhJUsvfOHNesCd5rbVmuRtUZFP73lOhcU92SfRH9SKcnugm05F1

-- Dumped from database version 18.4 (Debian 18.4-1.pgdg13+1)
-- Dumped by pg_dump version 18.4 (Debian 18.4-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Admin" (
    id text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Admin" OWNER TO postgres;

--
-- Name: Post; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Post" (
    id text NOT NULL,
    title text NOT NULL,
    slug text NOT NULL,
    description text NOT NULL,
    content text NOT NULL,
    image text NOT NULL,
    category text NOT NULL,
    author text NOT NULL,
    "readTime" text NOT NULL,
    published boolean DEFAULT false NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "imageAlt" text,
    keywords text,
    "seoDescription" text,
    "seoTitle" text,
    views integer DEFAULT 0 NOT NULL,
    claps integer DEFAULT 0 NOT NULL
);


ALTER TABLE public."Post" OWNER TO postgres;

--
-- Name: Subscriber; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Subscriber" (
    id text NOT NULL,
    email text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Subscriber" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Data for Name: Admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Admin" (id, email, password, "createdAt") FROM stdin;
cmqzutk7h0000omcanrka6kud	admin@anahdigital.com	$2b$10$A1bGYKBO0wJICL8JCe6xAuf2mY6HF77MZl3seOUNqQd92cQsYnvuW	2026-06-29 23:33:54.701
\.


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Post" (id, title, slug, description, content, image, category, author, "readTime", published, "createdAt", "updatedAt", "imageAlt", keywords, "seoDescription", "seoTitle", views, claps) FROM stdin;
cmqx0n8us0000omgwpvrw24yn	how to live 	in-nigeria	survival in Nigerian economy	dsaffdfhvnadgohlnadknfd	/images/logo3.png	economic hardship	Uche	4 min read	t	2026-06-27 23:53:39.219	2026-07-12 02:04:53.417	\N	\N	\N	\N	85	5
cmqyi62690000omza7zz8vpc1	How to Navigate the Nigerian business 	Business-navigation	Navigation of businesses within Nigerian eco system. 	<p>How important it is for small businesses to navigate around the Nigerian eco system. For every business to stand the test of time in the current Nigeria System it is imperative for such a business to learn how to do so.</p>	/uploads/1782756146470-ddd-removebg-preview.png	Business	uche	2 min read	t	2026-06-29 00:51:56.67	2026-07-13 19:36:21.919	\N	\N	\N	\N	112	0
cmqylfmnh0000omeckzv8f3a0	Hello world 	Learning Html basics	Introduction to HTML 	Hello world, and welcome to Html \n\n	/images/image1.png	Website 	Uche	1 min read	f	2026-06-29 02:23:21.963	2026-06-29 02:26:44.456	\N	\N	\N	\N	0	0
cmqwnxome0001om3xmp1rs73s	Building My CMS With Next.js	building-my-cms-with-nextjs	How I built a custom publishing system using Next.js and Prisma.	\nThis is my first article created from the admin dashboard.	/images/logo3.png	Developer journey 	Uche	3 min read	t	2026-06-27 17:57:51.203	2026-07-06 03:05:29.653	\N	\N	\N	\N	28	0
cmqymwge20000omghral7m19i				<p><a target="_blank" rel="noopener noreferrer nofollow" href="https://wwwfacebook.com">fhfdhfdf</a></p><p></p>					f	2026-06-29 03:04:26.616	2026-06-29 03:04:26.616	\N	\N	\N	\N	0	0
cmqwnsneu0000om3xdzcj3jgc	Why Nigerian Business Need Websites	Digital Transformation is important in the business world		<h2>Why Nigerian Businesses Need Websites</h2><p><strong>Digital transformation is important</strong></p><ul><li><p>Better customer reach</p></li><li><p>More trust</p></li><li><p>Higher sales</p></li></ul><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://anahdigital.com">anahdigital</a></p>	/images/logo.png		Uche	3 min read	t	2026-06-27 17:53:56.356	2026-06-29 03:46:03.825	\N	\N	\N	\N	0	0
\.


--
-- Data for Name: Subscriber; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Subscriber" (id, email, "createdAt") FROM stdin;
cmr1bw4mr0000omirx4sqw8g5	Justine@gmail.com	2026-07-01 00:19:34.131
cmr2xjk6s0000omdofxxqo5rw	judith02@gmail.com	2026-07-02 03:13:25.491
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
58073d64-edc7-45bb-b02a-bea9b7e1812b	6c7d8401e6f0bd5f6bea2d0266fe6b3f9b5fabf78fad4ad0e4cfa9dfe0e06e5d	2026-06-23 01:32:14.333462+00	20260623013214_init	\N	\N	2026-06-23 01:32:14.330007+00	1
083d74a5-a27a-4e9e-bf97-47949f5323ba	fbb12b2784b025e36382bef111c69c2bb92d2b0ae4b71387ad502e1f65016069	2026-06-26 23:21:46.958663+00	20260626232146_add_posts	\N	\N	2026-06-26 23:21:46.948309+00	1
8ecbb7b5-fadf-4246-9613-0f85dbeb990f	c87ab70d1abdddd12dedba01b0bc70eba30feb7793825ed4823db897b090f481	2026-06-29 18:12:23.463932+00	20260629181223_add_seo_fields	\N	\N	2026-06-29 18:12:23.458902+00	1
745a9472-7363-4c40-9db5-b9ae0c27992e	df455e1854b1907c3ef2d63c6fc2232f4a0e2df7459934d31a540a1eaa055f0a	2026-06-29 22:33:29.488405+00	20260629223329_add_post_views	\N	\N	2026-06-29 22:33:29.485078+00	1
f1cd3d4e-b749-4bae-9588-dce193faa768	dc66925768146186cb3480e0a2d24e3f767349b39d0293e68be060dd4a50a29e	2026-06-29 23:20:30.468392+00	20260629232030_add_admin_auth	\N	\N	2026-06-29 23:20:30.464418+00	1
\.


--
-- Name: Admin Admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Admin"
    ADD CONSTRAINT "Admin_pkey" PRIMARY KEY (id);


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: Subscriber Subscriber_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Subscriber"
    ADD CONSTRAINT "Subscriber_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Admin_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Admin_email_key" ON public."Admin" USING btree (email);


--
-- Name: Post_slug_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Post_slug_key" ON public."Post" USING btree (slug);


--
-- Name: Subscriber_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Subscriber_email_key" ON public."Subscriber" USING btree (email);


--
-- PostgreSQL database dump complete
--

\unrestrict l0PpRJpwyXlIJhJUsvfOHNesCd5rbVmuRtUZFP73lOhcU92SfRH9SKcnugm05F1

