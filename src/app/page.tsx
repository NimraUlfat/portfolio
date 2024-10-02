import Image from "next/image";

export default function Home() {
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-pink-900">Hey! This is me Nimra I am nextjs Developer
          <div className="hidden lg:inline-block"> </div>
        </h1>
        <p className="mb-8 leading-relaxed font-medium text-voilet-900">Welcome! I'm Nimra, a passionate web developer with a love for nextjs. My approach combines creativity and technical skill to bring ideas to life.

I thrive on collaboration and believe that the best results come from teamwork. When I’m not working, you can find me social accounts, always seeking inspiration in the world around me. 

Let’s connect and create something amazing together!</p>
        <div className="flex justify-center">
          
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/960937636/photo/woman-hands-coding-html-and-programming-on-screen-laptop-web-developer.jpg?s=612x612&w=0&k=20&c=MSLlYt0QRwyRenwhZAhSerwvs-3qt9QjieJ0ta2MAuc="></img>
      </div>
    </div>
  </section>
      
    </div>
  );
}