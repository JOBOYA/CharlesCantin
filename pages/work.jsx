import Camera from './components/CameraSection'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'

const work = () => {
  return (
    <div>
      <Hero heading='Mes Tarifs & Prestations '
       message='Chevauchez vos meilleurs moments'  />
       <Portfolio />
       <Camera />
    </div>
  )
}

export default work
