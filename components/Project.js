import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";

function Project({ title }) {
    return (
        <div className="flex flex-col space-y-10 justify-center bg-gray-100 border border-gray-200 p-[5%]">
            {/* left */}
            <Image
                src="https://lh3.googleusercontent.com/-wQYHI33mVAQ/XmXUp_24_wI/AAAAAAAACuA/72WPSi3PUbsfXdyiVuFeiYkHWO4cNUvJACEwYBhgLKtQDAL1Ocqz3_WOMrRr3gh5cMx0i61oSfchz9AzkbglTm_a5X1appkjvmSRGNpwxDQmHfVIOAScAIJsBLjyNFwm7TkoIy5oz8yK_L9GYP7fp21fnXzBm1fUXHaUKkxY47WleOWiC5rj_ewaFfh-oB_7KpD6VAX5F3ha50x7XjNGOAN0tgaDkBc4DrSs8dNW7r6et2RHziTWkXgbNjNckuyO0ArUARsOGHZ0N7167hert_z8QDrCJs98BjB2cY3iFHg5lhhyKgBGNDwg_0QlzywVVYZNgKQtTM879FbLugeyFiiYLh6Z3rNC4w_aJhbbdLo2lmzC3xASqh6b_0f3I7Ulk_3vrd2uq5Ye-ZFwAspqkJogpCAsElkpsYRI3rZvj3SPUc9WaFDcfu8n3Cgwt2nMBmIwPbvHn0igp9N57H0eYxUIz2a8ozt6zltAg2NO5l-nPKyBvgaKv4rQ1jUovQ14GKjo4J1PzSIr0pJnTm5-us6itQNRq6uMD5xpP-sdAzFzifioow1At1myurvI8F2a5SYo5HtHlX3QSl3zR-RzIIsVmhjhyUWocz47-rlUO64Xzx2a6qt6EZ-3cpQlrqcS8RJpHlRtQ53lagRdPX7JaP0Z27tHGML_L_YQG/w140-h140-p/2020-03-08.jpg"
                width={300}
                height={200}
            />

            {/* right */}
            <div className="flex flex-col">
                <p className="font-medium text-xl text-gray-900 text-center">
                    {title}
                </p>

                <div className="flex flex-col sm:flex-row sm:space-x-5 mt-6">
                    <button className="btn w-full sm:w-min">
                        <div className="flex space-x-2 justify-center">
                            <ExternalLinkIcon className="h-6" />
                            <p>Website</p>
                        </div>
                    </button>

                    <button className="btn w-full sm:w-min">
                        <div className="flex space-x-2 justify-center">
                            <ExternalLinkIcon className="h-6" />
                            <p>Github Repo</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Project;
