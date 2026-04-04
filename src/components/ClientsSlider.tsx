export default function ClientsSlider() {
  const logos = [
    "/images/clients/1-removebg-preview%20(1).png",
    "/images/clients/1-removebg-preview%20(2).png",
    "/images/clients/2-removebg-preview.png",
    "/images/clients/3-removebg-preview%20(1).png",
    "/images/clients/3-removebg-preview.png",
    "/images/clients/4-removebg-preview.png",
    "/images/clients/5-removebg-preview.png",
    "/images/clients/6-removebg-preview.png",
    "/images/clients/7-removebg-preview.png",
    "/images/clients/8-removebg-preview.png",
    "/images/clients/9-removebg-preview.png",
    "/images/clients/10-removebg-preview.png",
    "/images/clients/11-removebg-preview.png",
    "/images/clients/12-removebg-preview.png",
    "/images/clients/14-removebg-preview.png",
    "/images/clients/15-removebg-preview.png",
    "/images/clients/16-removebg-preview.png",
    "/images/clients/17-removebg-preview.png",
    "/images/clients/18-removebg-preview.png",
    "/images/clients/19-removebg-preview.png",
    "/images/clients/20-removebg-preview.png",
    "/images/clients/21-removebg-preview.png",
    "/images/clients/23-removebg-preview.png",
    "/images/clients/24-removebg-preview.png",
    "/images/clients/25-removebg-preview.png",
    "/images/clients/28-removebg-preview.png",
  ];
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
      <div className="logo-marquee">
        <div className="logo-track">
          {marqueeLogos.map((src, i) => (
            <div key={`${src}-${i}`} className="logo-item opacity-100 transition-opacity duration-300 hover:scale-[1.02]">
              <img src={src} alt="Client logo" className="h-20 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
