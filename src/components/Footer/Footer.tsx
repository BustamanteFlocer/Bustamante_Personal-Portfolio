import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Flocer Angelo</span>
      </a>
      <div>
        <p>
          This website was created with <img src={reactIcon} alt="React" /> 
          
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/flocer-angelo-bustamante-095146185/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/BustamanteFlocer"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>


        <a
          href="https://discord.com/users/Gel_Lost#7014"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  )
}
