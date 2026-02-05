"use client"

import { useState } from "react"
/* eslint-disable @next/next/no-img-element */
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImageUrls = [
  "https://picsum.photos/seed/class1/400/400",
  "https://picsum.photos/seed/class2/400/400",
  "https://picsum.photos/seed/class3/400/400",
  "https://picsum.photos/seed/class4/400/400",
  "https://picsum.photos/seed/class5/400/400",
  "https://picsum.photos/seed/class6/400/400",
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleImageClick = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl)
    setCurrentIndex(index)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? galleryImageUrls.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImageUrls[newIndex])
  }

  const handleNext = () => {
    const newIndex = currentIndex === galleryImageUrls.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(galleryImageUrls[newIndex])
  }

  return (
    <>
      <div
        className="text-white opacity-60 text-base font-semibold mb-4 mx-[10%] mt-10 lg:text-center lg:text-3xl lg:mb-8"
        id="gallery"
      >
        Class Gallery
      </div>
      
      {/* Gallery Grid */}
      <div className="px-[5%] lg:px-[10%]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImageUrls.map((imageUrl, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => handleImageClick(imageUrl, index)}
            >
              <img
                src={imageUrl}
                alt={`Gallery Image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          <div className="relative max-w-[90vw] max-h-[80vh] z-10">
            <button
              onClick={handleCloseModal}
              className="absolute -top-10 right-0 text-white hover:text-white/80 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors bg-black/50 rounded-full p-2"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors bg-black/50 rounded-full p-2"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <img
              src={selectedImage}
              alt="Enlarged"
              className="rounded-lg max-h-[80vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
