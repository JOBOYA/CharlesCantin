import React from 'react';
import Image from 'next/image';
import photographer2 from '../../public/photographer2.jpg'
import { useForm, ValidationError } from '@formspree/react';




// Define the ContactForm component
function ContactForm() {
  // Use the useForm hook to handle form submission and validation
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");
  if (state.succeeded) {
    // If the form submission is successful, display an alert message and redirect the user to the home page
    window.alert("Merci de m'avoir contacté ! Vous allez être redirigé vers la page d'accueil.");
    window.location.href = "/"; // redirect to the home page
  }
  return (
    <div className='max-w-[1248] m-auto p-4 h-screen shadow-lg'>
    <h1 className='text-3xl font-bold text-center p-4'>N&#39;hésitez pas à me contacter !</h1>
    <div className='flex items-center justify-center w-full'>

    <form onSubmit={handleSubmit} className='bg-white lg:w-[45%] w-full h-[491px] p-4 '>
    <div className='grid grid-cols-2 gap-2'>
      <input id='name'
          name='name' className='border shadow-lg p-3 outline-0' placeholder='Votre nom ici..' />
        <ValidationError 
    prefix='Name' 
    field='name'
    errors={state.errors}
  />
        <input className='border shadow-lg p-3 outline-0' id='email' type='email' name='email' placeholder='Votre email ici..' />
        <ValidationError 
    prefix='Email' 
    field='email'
    errors={state.errors}
  />
      </div>
      <input className='border shadow-lg p-3 w-full my-2 outline-0' type='text' name='subject' placeholder='Votre sujet..' />
      <ValidationError 
    prefix='Subject' 
    field='subject'
    errors={state.errors}
  />
      <textarea className='border shadow-lg p-3 w-full outline-0' cols='30' rows='10' name='message' placeholder='Message..' />
      <ValidationError 
    prefix='Message' 
    field='message'
    errors={state.errors}
  />
  <button className='border shadow-lg p-3 w-full mt-2 bg-gray-300 text-gray-900' type='submit' disabled={state.submitting}>Envoyer</button>
  </form>
    <div className='w-40% hidden h-[100%] lg:block '>
    <Image src={photographer2} alt="photographe"
       height='491px'
            width='505px'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
}




function App() {
  return (
    <ContactForm />
  );
}
export default App;