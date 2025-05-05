* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  border: none;
  outline: none;
  scroll-behavior: smooth;
}

:root {
  --color-white: #ffffff;
  --color-light-gray: #f1ede6;
  --color-beige: #e4dccf;
  --color-pink: #e0b4a4;
  --color-dark: #22404a;
}

body {
  margin: 0;
  padding: 0;
  font-family: "PT Serif", serif;
}
@font-face {
  font-family: "Brittany"; /* Nama bebas, nanti dipakai di CSS */
  src: url("fonts/BrittanySignatureScript.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

/* Navbar Styles */
.navbar {
  position: fixed;
  top: 0.9px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
  background-color: var(--color-beige);
  z-index: 1000;
  gap: 10%;
  min-height: 60px;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-dark);
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0.5rem; /* Added consistent padding */
}
.nav-links a.active {
  background-color: var(--color-pink);
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.logo img {
  height: 20%;
  width: 20%;
}
.search-icon img {
  height: 4vh;
  width: 3.5vh;
  margin-left: -50px;
}

/* Hero Section */
.hero {
  margin-top: 80px;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--color-white);
}

.hero-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.hero-content {
  padding-top: 2rem;
  margin-left: 20vh;
}

.hero-content p {
  font-size: 21px;
  color: var(--color-dark);
  margin-left: 8vh;
  margin-bottom: 1rem;
  font-family: "PT Serif", serif;
}

.pena-logo {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: -0.5rem 0;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.6));
  /*Reducedshadowopacity*/
  -webkit-filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
  -webkit-filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.6));
}

.quote {
  font-size: 1.2rem;
  color: var(--color-dark);
  margin-top: -2.5rem;
  text-align: center; /* Added center alignment */
  margin-left: 12vh;
  max-width: 80%; /* Control the width */
}

/* Grid Gallery */
.grid-gallery {
  position: relative;
  width: 100%;
  height: 80%;
  padding: 4rem;
  display: flex;
  margin-left: -15vh;
  justify-content: center;
  align-items: center;
  background-image: url("assets/grid-notes.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* About Section */
.about-section {
  padding: 4rem;
}

.about-card {
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 3rem;
  border-radius: 20px;
  margin-top: 4rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  min-height: 500px;
  transition: all 0.3s ease;
}

.sekilas-bg {
  position: absolute;
  top: -20vh;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 1;
  object-fit: contain;
  transition: all 0.3s ease;
}

.profile-content {
  position: relative;
  display: flex;
  gap: 5rem;
  align-items: flex-start;
  z-index: 2;
  padding: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 2rem;
  margin-top: -2rem;
  box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.3);
}

.profile-text {
  flex: 1;
  margin-left: -2rem;
  margin-top: -3rem;
  font-size: 1.1rem;
  line-height: 2;
  color: var(--color-dark);
  max-width: 500px;
  text-align: justify;
  text-justify: inter-word;
  white-space: normal;
}

/* Karya Section */
.karya-section {
  padding: 4rem;
  background-color: var(--color-white);
}

.section-title {
  font-size: 2rem;
  color: var(--color-dark);
  text-decoration: underline;
  margin-bottom: 3rem;
}

.draft-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 0 2rem;
}

.draft-category {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.draft-card {
  background-color: var(--color-light-gray);
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid var(--color-dark);
  transition: all 0.3s ease;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: relative;
  cursor: pointer; /* Added cursor pointer */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Initial shadow */
}

.draft-card:hover {
  transform: translateY(-10px); /* Lift effect */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
  background-color: var(--color-white); /* Slightly lighter background */
}

.draft-card:first-of-type {
  border-bottom: 2px solid var(--color-dark); /* Border between cards */
  padding-bottom: 3rem; /* Space for border */
}

.draft-title {
  font-size: 1.2rem;
  color: var(--color-dark);
  margin-bottom: 1rem;
  font-weight: bold;
}

.draft-desc {
  font-size: 0.9rem;
  color: var(--color-dark);
  line-height: 1.6;
  flex-grow: 1; /* Takes remaining space */
}

.read-more {
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  align-self: flex-start; /* Aligns button to the left */
}

.read-more:hover {
  background-color: var(--color-pink);
}

/* Published Works */
.published-works {
  margin-top: 5rem;
}

.published-title {
  font-size: 2rem;
  color: var(--color-dark);
  text-align: center;
  margin-bottom: 3rem;
}

.published-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 0 2rem;
}

.published-card {
  background-color: var(--color-light-gray);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.published-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.published-image-container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background-color: var(--color-light-gray);
}

.image-top {
  display: flex;
  gap: 0.5rem;
}

.image-top img {
  width: calc(50% - 0.25rem);
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.image-bottom img {
  width: 90%;
  height: 220px;
  object-fit: cover;
  border-radius: 5px;
  margin-left: 20px;
}

.published-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.published-details {
  padding: 1.5rem;
}

.published-info {
  margin-bottom: 0.5rem;
}

.published-info-title {
  font-weight: bold;
  color: var(--color-dark);
  display: inline-block;
  width: 120px;
}

.published-info-content {
  color: var(--color-dark);
}

.published-synopsis {
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-dark);
  text-align: justify;
}

/* Section Divider */
.section-divider {
  width: 100%;
  height: 2px;
  background-color: var(--color-dark);
  margin: 5rem auto;
  max-width: 80%;
}

/* Published Works Title Adjustment */
.published-works .section-title {
  text-align: center;
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.published-works .section-title::before,
.published-works .section-title::after {
  content: "*";
  color: var(--color-dark);
}

.story-page {
  padding-top: 2rem;
}

.story-header {
  padding: 2rem;
  background-color: var(--color-beige);
  margin-top: -5vh;
}

.story-content {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 2rem;
  line-height: 1.8;
  color: var(--color-dark);
  text-align: justify;
  white-space: pre-wrap;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.story-title {
  font-size: 2rem;
  margin: 0;
  color: var(--color-dark);
}

.category-pill {
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  display: inline-block;
  align-self: center;
}
.header-nav {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem;
}

.header-content {
  flex: 1;
}

.header-image {
  position: relative;
  width: 400px;
  height: 200px;
  margin-top: -5vh;
  margin-bottom: -6vh;
  margin-right: -6vh;
  overflow: hidden;
}

.story-featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-description {
  margin-top: 1rem;
  color: var(--color-dark);
  line-height: 1.6;
}
.back-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  transition: transform 0.2s ease;
}

.back-button:hover {
  transform: translateX(-5px);
}

.back-arrow {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

/* Preview Novel Section */
.preview-section {
  padding: 4rem;
  background-color: var(--color-white);
}

.preview-card {
  display: flex;
  gap: 3rem;
  background-color: var(--color-light-gray);
  padding: 2rem;
  border-radius: 15px;
  max-width: 1200px;
  margin: 0 auto;
}

.preview-image {
  flex: 0 0 300px;
}

.preview-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
}

.preview-details {
  flex: 1;
}

.preview-info {
  margin-bottom: 1.5rem;
}

.info-label {
  font-weight: bold;
  color: var(--color-dark);
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.info-content {
  color: var(--color-dark);
  line-height: 1.6;
  text-align: justify;
}

.info-subtitle {
  font-size: 0.9rem;
  color: var(--color-dark);
  font-style: italic;
  margin-top: 0.3rem;
}

/* Comments Section */
.comments-section {
  margin-top: 3rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
}

.comments-title {
  font-size: 1.2rem;
  color: var(--color-dark);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-dark);
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.comment {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.comment-avatar {
  width: 32px;
  height: 32px;
  background-color: var(--color-dark);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.comment-author {
  font-weight: bold;
  color: var(--color-dark);
}

.comment-time {
  color: #666;
  font-size: 0.9rem;
}

.comment-text {
  color: var(--color-dark);
  line-height: 1.4;
}

.comment-form {
  margin-top: 2rem;
}

.comment-input {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
  color: var(--color-dark);
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Brittany", sans-serif;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  background-color: var(--color-beige);
  border-radius: 30px;
  margin-top: 25vh;
  height: 200px;
  width: 500px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.contact-profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3rem;
}

.contact-text {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
  margin-top: -6rem;
  margin-left: 150px;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 30px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
}

.comment-input:focus {
  outline: none;
  border-color: var(--color-dark);
}

/* About Me Section */
.about-me {
  padding: 4rem;
  background-color: var(--color-white);
}

.about-me-title {
  position: relative;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
}

.about-me-title h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin: 0;
  display: inline-block;
}

.about-me-title .subtitle {
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-left: 1rem;
}

.about-me-content {
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-me-text {
  flex: 2;
  text-align: justify;
  line-height: 1.8;
  color: var(--color-dark);
}

.about-me-text p {
  margin-bottom: 1.5rem;
}

.about-me-image {
  flex: 1;
}

.about-me-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.contact {
  padding: 4rem;
}

.contact .section-title {
  color: var(--color-dark);
  font-size: 1.5rem;
  border-bottom: 2px solid var(--color-dark);
  display: inline-block;
  margin-bottom: 3rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1;
}
.form-group {
  margin-bottom: 1.5rem;
}

.form-group textarea {
  height: 120px;
}

.submit-btn {
  padding: 0.4rem 1.5rem;
  font-size: 0.9rem;
  float: none;
  display: block;
  margin: 0 auto;
}

.footer {
  background-color: var(--color-beige);
  padding: 2rem 4rem;
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-left {
  flex: 1;
}

.footer-logo {
  width: 100px;
  margin-bottom: 1rem;
}

.copyright,
.rights {
  color: var(--color-dark);
  font-size: 0.9rem;
  margin: 0.2rem 0;
}

.footer-right {
  display: flex;
  gap: 4rem;
}

.footer-section h3 {
  color: var(--color-dark);
  font-size: 1rem;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  color: var(--color-dark);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
