import { Roboto, Raleway, Inter } from 'next/font/google'
import './tww-page.scss'

const header = Inter({subsets: ['latin'],   weight: '400'})
const sub_header = Roboto({subsets: ['latin'],   weight: '400'})
const description = Raleway({subsets: ['latin'],   weight: '400'})


export default function TWW() {
  return (
    <div className="tww-container">
      <p className={header.className}>The Weekend Washer</p>
      <p className={sub_header.className}>Friday March 8th, 2024</p>
      <p className={description.className}>Made with ❤️ by Raj Likhari</p>
    </div>
  );
}
