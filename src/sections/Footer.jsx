const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p>Tearms & Condition</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className="flex gap-5">
            <div className="social-icon">
                <img src="/assets/github.svg"  alt="github-icon" className="w-1/2 h-1/2" />
            </div>
            <div className="social-icon">
                <img src="/assets/twitter.svg"  alt="twitter-icon" className="w-1/2 h-1/2" />
            </div>
            <div className="social-icon">
                <img src="/assets/instagram.svg"  alt="instagram-icon" className="w-1/2 h-1/2" />
            </div>
        </div>
        <p className="text-white-500">&copy; 2024 Aakash. All Rights Reserved.</p>
    </section>
  )
}

export default Footer