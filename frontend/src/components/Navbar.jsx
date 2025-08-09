import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <section className='shadow flex flex-col items-center p-2 gap-y-3'>
     <div><img src="logo.png" alt="" /> </div>
        <nav className='text-[#474747]'>
            <ul className='flex gap-4 text-lg  font-[Poppins]'>
                <li><Link to ="/about">About Us</Link></li>
                <li><Link to ="/onboarding">Onboarding</Link></li>
                <li><Link to ="/faq">FAQ</Link></li>   
                <li><Link to ="/testimonials">Testimonials</Link></li>
            </ul>   
        </nav>
    </section>
    </>
  )
}

export default Navbar
