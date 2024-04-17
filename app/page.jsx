import { Raleway, Montserrat, Abel} from 'next/font/google'
import './landing-page.scss'

const header = Montserrat({subsets: ['latin'],   weight: '400'})
const sub_header = Abel({subsets: ['latin'],   weight: '400'})
const description = Raleway({subsets: ['latin'],   weight: '400'})

export default function Home() {
  return (
    <div className='landing-container'>
      <div className='introduction-container'>
        <div className='card-wrapper'>
          <img src='/rl.png' className='card-image'></img>
          <div className='card-details-wrapper'>
            <p className={`${header.className} card-details-header`}>Raj Likhari</p>
            <p className={`${sub_header.className} card-details-subheader`}>SWE @ <a style={{color: '#016FD0'}}>American Express</a> | Computer Engineering</p>
            <p className={`${description.className} card-details-description`}>Full-Stack Engineer based out of Dallas, TX with a passion for Hybrid Cloud Solutions and Web-Development.</p>
            <div className='card-details-icons'>
              <img src='/linkedIn.png'></img>
              <img src='/github.png'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
