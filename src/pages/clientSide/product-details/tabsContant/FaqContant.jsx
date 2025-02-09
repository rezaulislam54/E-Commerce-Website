import { useState } from "react";

const FaqContant = () => {
    const [show, setshow] = useState(false);
    const [show1, setshow1] = useState(false);
    const [show2, setshow2] = useState(false);
    const [show3, setshow3] = useState(false);
    const [show4, setshow4] = useState(false);


    return (
      <section
        style={{ fontFamily: "IntegralCF, sans-serif" }}
        className="bg-white dark:bg-gray-900"
      >
        <div className="container px-6 py-12 mx-auto">
          <h1
            style={{ fontFamily: "IntegralCF, sans-serif" }}
            className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white"
          >
            Frequently asked questions
          </h1>

          <div className="mt-8 space-y-8 lg:mt-12">
            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button
                onClick={() => setshow(!show)}
                className="flex items-center justify-between w-full"
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  What is the material of the t-shirt?
                </h1>

                {show ? (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M18 12H6" />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                )}
              </button>

              <p
                className={`${
                  show
                    ? "mt-6 text-sm text-gray-500 dark:text-gray-300 "
                    : "hidden"
                }`}
              >
                T-shirts are typically made of cotton textile in a stockinette
                or jersey knit, which has a distinctively pliable texture
                compared to shirts made of woven cloth. Some modern versions
                have a body made from a continuously knitted tube, produced on a
                circular knitting machine, such that the torso has no side
                seams.
              </p>
            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button
                onClick={() => setshow1(!show1)}
                className="flex items-center justify-between w-full"
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  What are the care instructions for the t-shirt?
                </h1>

                {show1 ? (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M18 12H6" />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                )}
              </button>

              <p
                className={`${
                  show1
                    ? "mt-6 text-sm text-gray-500 dark:text-gray-300 "
                    : "hidden"
                }`}
              >
                You can hand-wash or machine-wash your favourite t-shirt, just
                make sure it&apos;s in cool water and don&apos;t overfill the
                machine. And don&apos;t tell your other t-shirts – they&apos;ll
                only get jealous. Also never EVER let them near a hot dryer.
                Unless you&apos;re prepared to spend all day joking that
                you&apos;ve just &apos;Hulked Out&apos;.
              </p>
            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button
                onClick={() => setshow2(!show2)}
                className="flex items-center justify-between w-full"
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  What is the design or print on the t-shirt made of?
                </h1>

                {show2 ? (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M18 12H6" />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                )}
              </button>

              <p
                className={`${
                  show2
                    ? "mt-6 text-sm text-gray-500 dark:text-gray-300 "
                    : "hidden"
                }`}
              >
                The design or print on a t-shirt is typically made of ink,
                usually applied using a method like screen printing, where the
                ink is pushed through a mesh screen onto the fabric, creating
                the design; common ink types include plastisol (a plastic-based
                ink) and water-based inks depending on the printing technique
                used.
              </p>
            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button
                onClick={() => setshow3(!show3)}
                className="flex items-center justify-between w-full"
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  Is the t-shirt unisex or designed for specific genders?
                </h1>

                {show3 ? (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M18 12H6" />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                )}
              </button>

              <p
                className={`${
                  show3
                    ? "mt-6 text-sm text-gray-500 dark:text-gray-300 "
                    : "hidden"
                }`}
              >
                A unisex t-shirt is designed to fit both men and women, meaning
                it&apos;s not specifically designed for one gender; it&apos;s
                meant to be versatile and can be worn by anyone, regardless of
                gender.People wearing T-shirts, which are considered unisex in
                modern culture. Today, a common mode of unisex clothing may be
                an outfit made up of shirt, pants, or both, as these articles
                are considered appropriate for either gender in western society.
              </p>
            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button
                onClick={() => setshow4(!show4)}
                className="flex items-center justify-between w-full"
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  What are the shipping options and costs?
                </h1>

                {show4 ? (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M18 12H6" />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                )}
              </button>

              <p
                className={`${
                  show4
                    ? "mt-6 text-sm text-gray-500 dark:text-gray-300 "
                    : "hidden"
                }`}
              >
                Provide information about shipping methods, estimated delivery
                times, and associated fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FaqContant;