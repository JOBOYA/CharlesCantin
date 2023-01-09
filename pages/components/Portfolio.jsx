import Image from 'next/image'
import React from 'react'


// Data for tarifs section
const Portfolio = () => {
  const tarifs = [
    {
      titre: "« Juste moi »",
      prix: "130€",
      prestations: [
        "Séance pour une personne",
        "en extérieur ou en studio"
      ]
    },
    {
      titre: "« Pour deux »",
      prix: "195€",
      prestations: [
        "Pour deux personnes",
        "en extérieur ou en studio"
      ]
    },
    {
      titre: "« Famille »",
      prix: "220€",
      prestations: [
        "Pour la famille ou les amis jusqu’à 4 personnes,",
        "en extérieur ou en studio",
        "30 euros en supplément par personne au-delà de 4",
        "(hormis enfant jusqu’à 2 ans)"
      ]
    },
    {
      titre: "« Il était une fois »",
      prix: "160€",
      prestations: [
        "Photo de grossesse",
        "(À votre domicile, en extérieur ou en studio)"
      ]
    },
    {
      titre: "« Mon bébé »",
      prix: "100€",
      prestations: [
        "Photo d’enfant jusqu’à 3 ans",
        "(photo à domicile)",
      ]
    },
    {
      titre: "« J’immortalise l’événement »",
      prestations: [
        "Sur mesure",
        "Prestation de mariage ou baptême sur devis",
      ]
    }
  ];

  return (
    <div className='max-w-[1247px] mx-auto py-10 text-center'>
      <h1 className='font-bold text-2xl p-4'>Les Forfaits</h1>
      <div className='grid grid-rows-none md:grid-cols-3 p-4 gap-4'>
        {tarifs.map((tarif) => (
          <div key={tarif.titre} className='mb-8'>
            <h2 className='font-bold text-xl'>{tarif.titre}</h2>
            <p>Prix: {tarif.prix}</p>
            <ul>
              {tarif.prestations.map((prestation) => (
                <li key={prestation}>{prestation}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio