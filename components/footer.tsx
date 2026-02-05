"use client"

/* eslint-disable @next/next/no-img-element */
import { Rating } from "./rating"

export function Footer() {
  return (
    <footer className="footer-gradient">
      <div className="mx-auto w-full max-w-screen-xl px-8 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="https://picsum.photos/seed/tkj3/72/72"
                alt="Logo TKJ 3"
                width={72}
                height={72}
                className="rounded-full brightness-200"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                CREATED BY
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com/ekizr_/?hl=id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    EKIZR
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/dafyall/?hl=id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    DAFYALL
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com/acetkjthree/?hl=id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@11TKJ3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <Rating />
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 md:hidden">
            <Rating />
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 justify-center sm:mt-0">
            <p className="text-[0.7rem] text-white opacity-70">
              {new Date().getFullYear()} Kelas XII TKJ 3 | Di Kelola Oleh Siswa TKJ 3
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
