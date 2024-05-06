import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import Homepage from "./Homepage";

const LoginPage = () => {

    const[homepage, setHomepage] = useState(true);

    const handlebtn = () => {
        setHomepage(true);
    }

  return homepage ? <Homepage setHomepage={setHomepage} /> : (
    <div className="h-lvh w-full bg-gray-800">
      <div>
        <nav className="flex justify-between bg-gray-800 items-center px-7 border-black border-b-2">
          <h1 className="my-2 text-xl text-white font-bold">
            LO
            <span className="bg-green-800 p-1 m-1 font-bold rounded-lg">
              GO
            </span>
          </h1>
          <p onClick={handlebtn} className="text-white font-extrabold hover:cursor-pointer">Sign Out</p>
        </nav>
        <div className="flex flex-col gap-3 my-4 ">
          <div className="flex justify-between items-center px-24">
            <h1 className="text-white">Popular Topics 🔥</h1>
            <div className="md:flex gap-2 hidden ">
              <span className="text-white border  rounded-md border-black">
                <KeyboardBackspaceIcon />
              </span>
              <span className="text-white border rounded-md border-black">
                <EastIcon />
              </span>
            </div>
          </div>
          <div className="flex gap-4 p-4 flex-col md:flex-row">
            <div className="md:w-1/3 w-full flex border border-black  bg-gray-800 p-4 rounded-lg text-white gap-4 flex-col">
              <div className=" flex md:flex-row flex-col ">
                <div className="md:w-2/5 w-full">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/6431/1b48/7680ef915f59977a6398330fd00468f3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jizv0~SkoTfPq9~Jab3~xZgu~UP1btEvggaUJ7I7YJz49DCJpk2s2HQFxu8ihY-4IDbeB6Oysrbfm4F4xDQcnr2tURNUX7G-1F2bFPr-pjTxIRxabd~D4APlFNFNppbpr7GU80t3P8xWnOsjqmappKLRAzYILpLVPe4MU2ZY682CiByGFaR0IXtgGScAfWGUt8B~qeQIrmRVmayLKI7kUo9Y-n6v3hbiejScgdZZA1NbB1FS5cvm1haI6Lv5ytWPl7ecgS4MZuOXfDqjpc90nWAcp3hbK9lBcBfFcGGcbqdoodOOb7DpFcfLzzyLIsHuaidBRqiVC-AGWDvpvRKtvQ__"
                    alt="img"
                  />
                </div>
                <div className="w-3/5 flex flex-col gap-2 ">
                  <h1 className="font-bold">Introduction to Rocket Science</h1>
                  <p>
                    Covers fundamentals, design, construction, operation and
                    programming of robots. Covers fundamentals, design,
                    construction, operation and{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-center p-2 border border-white rounded-lg">
                <button>Read</button>
              </div>
            </div>
            <div className="md:w-1/3 w-full flex border border-black  bg-gray-800 p-4 rounded-lg text-white gap-4 flex-col">
              <div className=" flex md:flex-row flex-col ">
                <div className="md:w-2/5 w-full">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/6431/1b48/7680ef915f59977a6398330fd00468f3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jizv0~SkoTfPq9~Jab3~xZgu~UP1btEvggaUJ7I7YJz49DCJpk2s2HQFxu8ihY-4IDbeB6Oysrbfm4F4xDQcnr2tURNUX7G-1F2bFPr-pjTxIRxabd~D4APlFNFNppbpr7GU80t3P8xWnOsjqmappKLRAzYILpLVPe4MU2ZY682CiByGFaR0IXtgGScAfWGUt8B~qeQIrmRVmayLKI7kUo9Y-n6v3hbiejScgdZZA1NbB1FS5cvm1haI6Lv5ytWPl7ecgS4MZuOXfDqjpc90nWAcp3hbK9lBcBfFcGGcbqdoodOOb7DpFcfLzzyLIsHuaidBRqiVC-AGWDvpvRKtvQ__"
                    alt="img"
                  />
                </div>
                <div className="w-3/5 flex flex-col gap-2 ">
                  <h1 className="font-bold">Introduction to Rocket Science</h1>
                  <p>
                    Covers fundamentals, design, construction, operation and
                    programming of robots. Covers fundamentals, design,
                    construction, operation and{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-center p-2 border border-white rounded-lg">
                <button>Read</button>
              </div>
            </div>
            <div className="md:w-1/3 w-full flex border border-black  bg-gray-800 p-4 rounded-lg text-white gap-4 flex-col">
              <div className=" flex md:flex-row flex-col ">
                <div className="md:w-2/5 w-full">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/6431/1b48/7680ef915f59977a6398330fd00468f3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jizv0~SkoTfPq9~Jab3~xZgu~UP1btEvggaUJ7I7YJz49DCJpk2s2HQFxu8ihY-4IDbeB6Oysrbfm4F4xDQcnr2tURNUX7G-1F2bFPr-pjTxIRxabd~D4APlFNFNppbpr7GU80t3P8xWnOsjqmappKLRAzYILpLVPe4MU2ZY682CiByGFaR0IXtgGScAfWGUt8B~qeQIrmRVmayLKI7kUo9Y-n6v3hbiejScgdZZA1NbB1FS5cvm1haI6Lv5ytWPl7ecgS4MZuOXfDqjpc90nWAcp3hbK9lBcBfFcGGcbqdoodOOb7DpFcfLzzyLIsHuaidBRqiVC-AGWDvpvRKtvQ__"
                    alt="img"
                  />
                </div>
                <div className="w-3/5 flex flex-col gap-2 ">
                  <h1 className="font-bold">Introduction to Rocket Science</h1>
                  <p>
                    Covers fundamentals, design, construction, operation and
                    programming of robots. Covers fundamentals, design,
                    construction, operation and{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-center p-2 border border-white rounded-lg">
                <button>Read</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
