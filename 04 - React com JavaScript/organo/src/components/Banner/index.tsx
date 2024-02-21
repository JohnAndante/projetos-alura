import './Banner.css'

interface BannerProps {
  src: string;
  alt?: string;
}

const Banner = ({ src, alt }: BannerProps) => {
  return (
    <header className="cabecalho">
      <img src={src} alt={alt} />
    </header>
  )
}

export default Banner
