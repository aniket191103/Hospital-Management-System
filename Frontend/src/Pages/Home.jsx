import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Department from '../components/Department'
import MessageForm from '../components/MessageForm'
const Home = () => {
  return (
    <>
      <Hero
        tittle={
          "Welcome to We Do Care Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"about.png"} />
      <Department />
      <MessageForm />
    </>
  );
};

export default Home
