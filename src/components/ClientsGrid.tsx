"use client";

export default function ClientsGrid() {
  const logos = [
    "/images/client%201.jpeg",
    "/images/client%202.jpeg",
    "/images/client%203.jpeg",
    "/images/client%204.jpeg",
    "/images/client%205.jpeg",
  ];

  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-[#1f9f45] md:mb-10 md:text-[38px]">
          300+ Companies Digitally Empowered, Are You?
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6">
          {logos.map((src, index) => (
            <div
              key={`client-${index}`}
              className="flex min-h-[260px] items-center justify-center rounded-[3px] bg-white px-2"
            >
              <img
                src={src}
                alt="Client logo"
                className="h-auto w-full max-w-[900px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
