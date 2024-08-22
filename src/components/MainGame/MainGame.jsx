import React, { useState, useEffect } from 'react';
import { MainGamesImage } from '../../data/data'
import { TbPlayFootball } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";

function MainGame() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1">
        {MainGamesImage?.map((image, index) => (
          <div className=' flex items-center'>

            <div key={index} className="relative w-full">
              <img
                // onClick={() => handleOpenModal('login')}
                src={image.image_game}
                alt={`Image ${index + 1}`}
                className="w-full h-1/2 object-cover"
              />
              <div className='absolute bottom-0 w-full bg-custom-yellow-background text-center py-1'>
                <p className='text-[15p] font-[800] font-ubuntu text-white capitalize'>{image.label}</p>
              </div>
            </div>

          </div>
        ))}

      </div>
      <div className='mt-2 w-full p-2 bg-custom-yellow-background'>
        <div className='flex justify-between '>
          <div className='flex space-x-2 items-center'>
            <p className='text-[14p] font-[600] font-poppins uppercase text-black'>Cricket</p>
            <TbPlayFootball className='font-[600] text-[20px]' />
          </div>
          <div className='flex justify-center items-center space-x-2'>
            <p className='text-[12px] font-poppins text-[#343A40] font-[600]'>Veiw by:</p>
            <div class="flex flex-col space-y-2">

              <select id="dropdown" class="border bg-custom-blue-background text-white uppercase outline-none  rounded-sm  shadow-sm">

                <option className='uppercase' value="Competition">Competition</option>
                <option className='uppercase' value="Time">Time</option>

                <RiArrowDropDownLine />




              </select>
            </div>
          </div>

        </div>
      </div>
      <div class="w-full overflow-x-auto">
        <div class="w-full overflow-x-auto">
          <table class="table-auto min-w-full ">
            <thead>
              <tr>
                <th class="  text-left"></th>
                <th class=" text-left"></th>
                <th class=" text-left"></th>
                <th class=" text-left"></th>
                <th class="text-white text-left">1</th>
                <th class="text-white text-left">X</th>
                <th class="text-white text-left">2</th>
              </tr>
            </thead>
            <tbody className='bg-white' >
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>

              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr> <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr> <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr> <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>

              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>
              <tr className='bg-white'>
                <td class="border  p-[5px] flex flex-col">
                  <div class="flex items-center justify-between h-full w-[fill-available]">
                    <div class=''>
                      <div class='flex items-center'>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleDateString()}</p>
                        <p className='pr-1 text-[11px] font-[400] font-poppins'>{currentDateTime.toLocaleTimeString()}</p>
                        <div className='bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400'>
                          <p className='h-2 w-2'></p>
                        </div>
                      </div>
                      <p className='pr-1 text-[13px] font-[600] font-poppins'>Pakistan v Bangladesh</p>
                    </div>
                    <div class='flex space-x-2 justify-end'>
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/bm.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/icons/tv.svg' alt="b logo" />
                      <img className='w-5 h-5' src='https://parker777.io/assets/img/fancy-icon.svg' alt="b logo" />
                    </div>
                  </div>
                </td>
                <td class="border text-center  bg-tablecolor-blue ">1.59</td>
                <td class="border text-center  bg-tableColor-pink">1.57</td>
                <td class="border text-center  bg-tablecolor-blue">3.15</td>
                <td class="border text-center  bg-tableColor-pink">3.2</td>
                <td class="border text-center  bg-tablecolor-blue">19.5</td>
                <td class="border text-center  bg-tableColor-pink ">20</td>
              </tr>



            </tbody>
          </table>
          <div className='bg-white mt-2 p-[5px]'>
  <div className='bg-custom-yellow-background'>
    <p className='uppercase text-[#343A40] px-2 text-[14px] font-[600] font-ubuntu'>Upcoming Horse Racing</p>
  </div>

  <div className='overflow-scroll w-[850px] h-auto scrollbar-hide whitespace-nowrap flex space-x-1 py-2'>
  {Array.from({ length: 25 }).map((_, index) => (
    <div key={index} className="w-28 bg-[#F1F1F1] rounded-md flex-none">
      <div className='flex items-center m-1'>
        <img className='w-10 h-6' src='https://flagcdn.com/h40/za.png' alt="image" />
        <div className='px-2'>
          <p className='text-[11.9px] font-[600] font-poppins'>09:20 PM</p>
          <p className='text-[12px] font-[400] font-poppins'>7f Hcap</p>
        </div>
      </div>
    </div>
     ))}
   
  </div>

  <div className='bg-custom-yellow-background'>
    <p className='uppercase text-[#343A40] px-2 text-[14px] font-[600] font-ubuntu'>Upcoming Greyhound Racing</p>
  </div>
 
  <div  className='overflow-scroll w-[850px] h-auto scrollbar-hide whitespace-nowrap flex space-x-1 py-2 '>
     {Array.from({ length: 10 }).map((_, index) => (
    <div key={index} className="w-28  bg-[#F1F1F1] rounded-md flex-none">
      <div className='flex items-center m-1'>
        <img className='w-10 h-6' src='https://flagcdn.com/h40/za.png' alt="image" />
        <div className='px-2'>
          <p className='text-[11.9px] font-[600] font-poppins'>09:20 PM</p>
          <p className='text-[12px] font-[400] font-poppins'>7f Hcap</p>
        </div>
      </div>
    </div>
  ))}
  </div>
 
</div>
        </div>

      </div>

    </>
  )
}

export default MainGame