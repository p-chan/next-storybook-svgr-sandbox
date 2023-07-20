'use client'

import IconPNG from './icon.png'
import IconSVGURL, { ReactComponent as IconSVG } from './icon.svg'
import styles from './page.module.css'

const Page = () => (
  <div>
    <h1>HTML</h1>
    <h2>PNG</h2>
    <img alt="" height={128} src={IconPNG.src} width={128} />
    <h2>SVG (img)</h2>
    <img alt="" height={128} src={IconSVGURL} width={128} />
    <h2>SVG (component)</h2>
    <IconSVG />
    <h1>CSS</h1>
    <h2>PNG</h2>
    <div className={styles.png} />
    <h2>SVG</h2>
    <div className={styles.svg} />
  </div>
)

export default Page
