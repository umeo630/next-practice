import { NextPage } from 'next'
import styled from 'styled-components'
import { DelayInput } from '../components/DelayInput'
import styles from '../styles/Home.module.css'

const H1 = styled.h1`
 color: red;
`

const onChange = () => {
  console.log('change');

}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <DelayInput onChange={onChange}></DelayInput>
      </main>
    </div>
  )
}

export default Home
