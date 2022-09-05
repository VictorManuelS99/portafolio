import { NextPage } from 'next'

import { P } from '@/Components/Atoms/Txt'
import { MainLayout } from '@/Layouts/Main'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <P fontSize="1.5rem">Hola, Soy Victor.</P>

      <P fontSize="1rem">
        Desde que conocí el mundo de Desarrollo de Software, inicie una línea de especialización donde aprendí Java y
        Javascript el lenguaje que uso actualmente. Soy una persona autodidacta y estoy dispuesto a aprender trabajando
        constantemente para mejorar mis habilidades. Ser es hacer.
      </P>
    </MainLayout>
  )
}

export default Home
