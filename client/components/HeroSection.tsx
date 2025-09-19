export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Main Hero Image Collage */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[780px] w-full">
        {/* Background collage using the main Figma image */}
        <div className="absolute inset-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cc8f70739d455aa23f00e0f5c850506c1b7f588a?width=2610"
            alt="Montpellier city collage"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          {/* Main Montpellier Text */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-wider drop-shadow-2xl">
              MONTPELLIER
            </h1>
          </div>

          {/* Question and CTA */}
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 drop-shadow-lg">
              Quoi de neuf à Montpellier ?
            </h2>
            <p className="text-lg md:text-xl text-blue-400 font-medium drop-shadow-lg">
              Vas-y, ne rate rien !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
