"use client"

import Image from "next/image"
import Stack from "./Stack"
import entrance from "../public/entrance.jpg"
import lobby from "../public/lobby.jpg"
import img1 from "../public/img1.jpg"
import img2 from "../public/img2.jpg"
import img3 from "../public/img3.jpg"
import img4 from "../public/img4.jpg"
import img5 from "../public/img5.jpg"
import img6 from "../public/img6.jpg"

const images = [
  { src: entrance, alt: "Entrance" },
  { src: lobby, alt: "Lobby" },
  { src: img1, alt: "Training Area 1" },
  { src: img2, alt: "Training Area 2" },
  { src: img3, alt: "Pilates Equipment" },
  { src: img4, alt: "Weights Area" },
  { src: img5, alt: "Cardio Zone" },
  { src: img6, alt: "Stretching Area" },
]

const Gallery = () => {
  return (
    <section className="relative overflow-hidden bg-background py-10 md:py-20 flex flex-col items-center">
      <div className="container mx-auto mb-10 px-4 md:px-8 text-center">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          Ο Χώρος <span className="text-primary">Μας</span>
        </h2>
        <p className="mt-4 mx-auto max-w-sm text-sm text-muted-foreground md:text-base">
          Ένας σύγχρονος χώρος υψηλής αισθητικής, εξοπλισμένος με τα κορυφαία μηχανήματα, σχεδιασμένος για να σε εμπνέει.
        </p>
      </div>

      <div className="relative h-[450px] w-full max-w-[320px] md:h-[650px] md:max-w-[500px]">
        <Stack
          randomRotation={true}
          sensitivity={150}
          sendToBackOnClick={true}
          cards={images.map((img, i) => (
            <div key={i} className="relative h-full w-full shadow-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 320px, 500px"
                  priority={i >= images.length - 2}
                />
            </div>
          ))}
          autoplay={true}
          autoplayDelay={4000}
          pauseOnHover={true}
        />
      </div>
    </section>
  )
}

export default Gallery
