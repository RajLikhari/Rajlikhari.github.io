import { Roboto, Raleway, Inter } from 'next/font/google'
import './blog-page.scss'

const header = Inter({subsets: ['latin'],   weight: '400'})
const sub_header = Roboto({subsets: ['latin'],   weight: '400'})
const description = Raleway({subsets: ['latin'],   weight: '400'})


export default function Blog() {
  return (
    <div className="blog-container">
      <p className={header.className}>The Blog</p>
      <p className={sub_header.className}>Friday March 8th, 2024</p>
      <p className={description.className}>Made with ❤️ by Raj Likhari</p>
    </div>
  );
}
