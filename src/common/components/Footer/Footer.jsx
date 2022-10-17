import React from "react";
import {
   IoGlobeOutline,
   IoLogoFacebook,
   IoLogoInstagram,
   IoLogoLinkedin,
   IoLogoPinterest,
   IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
   return (
      <footer className="relative border-t border-[#e4e5e7]">
         <div className="container pt-16 pb-6 mx-auto ">
            <div className="grid w-full pb-5 mb-2 xl:grid-cols-5 md:grid-cols-3">
               <div className="col-span-1">
                  <article>
                     <div className="pb-5">
                        <h6 className="font-semibold text-secondary">
                           Categories
                        </h6>
                     </div>
                     <div>
                        <ul className="flex flex-col gap-3">
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/categories/graphics-design"
                              >
                                 Graphics Design
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/categories/online-marketing"
                              >
                                 Digital Marketing
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/categories/writing-translation"
                              >
                                 Writing Translation
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/categories/video-animation"
                              >
                                 Video Animation
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/categories/music-audio"
                              >
                                 Music Audio
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/categories/programming-tech"
                              >
                                 Programming Tech
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/categories/data"
                              >
                                 Data
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/categories/business"
                              >
                                 Business
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/categories/lifestyle"
                              >
                                 Lifestyle
                              </a>
                           </li>
                           <li>
                              <a className="hover:underline" href="/categories">
                                 Sitemap
                              </a>
                           </li>
                        </ul>
                     </div>
                  </article>
               </div>
               <div className="col-span-1">
                  <article>
                     <div className="pb-5">
                        <h6 className="font-semibold text-secondary">About</h6>
                     </div>
                     <div>
                        <ul className="flex flex-col gap-3">
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/jobs?source=footer"
                              >
                                 Careers
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/news/press-releases?source=footer"
                              >
                                 Press News
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/partnerships?source=footer"
                              >
                                 Partnerships
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/privacy-policy?source=footer"
                              >
                                 Privacy Policy
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/terms_of_service?source=footer"
                              >
                                 Terms of Service
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/intellectual-property?source=footer"
                              >
                                 Intellectual Property Claims
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://investors.fiverr.com"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Investor Relations
                              </a>
                           </li>
                        </ul>
                     </div>
                  </article>
               </div>
               <div className="col-span-1">
                  <article>
                     <div className="pb-5">
                        <div className="gGrmDAw">
                           <h6 className="font-semibold text-secondary">
                              Support
                           </h6>
                        </div>
                     </div>
                     <div

                     // style="height:0"
                     >
                        <ul className="flex flex-col gap-3">
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/support"
                                 target="_blank"
                              >
                                 Help Support
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/trust_safety?source=footer"
                              >
                                 Trust Safety
                              </a>
                           </li>
                           <li>
                              <a
                                 href="/support/articles/360010451297-How-to-Start-Selling-on-Fiverr"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Selling on Fiverr
                              </a>
                           </li>
                           <li>
                              <a
                                 href="/content/how-fiverr-works?show_joinsource=footer"
                                 className="hover:underline"
                              >
                                 Buying on Fiverr
                              </a>
                           </li>
                        </ul>
                     </div>
                  </article>
               </div>
               <div className="col-span-1 mt-8 umd:mt-0">
                  <article>
                     <div className="pb-5">
                        <div className="gGrmDAw">
                           <h6 className="font-semibold text-secondary">
                              Community
                           </h6>
                        </div>
                     </div>
                     <div>
                        <ul className="flex flex-col gap-3">
                           <li>
                              <a
                                 href="https://events.fiverr.com"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Events
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://blog.fiverr.com/?utm_source=fiverrutm_medium=website"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Blog
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://community.fiverr.com/welcome/?utm_source=fiverrutm_medium=website"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Forum
                              </a>
                           </li>
                           <li>
                              <a
                                 href="/community/standards?source=footer"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Community Standards
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://podfollow.com/ninetwentynine"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Podcast
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://affiliates.fiverr.com"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Affiliates
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/referral_program?source=footer"
                              >
                                 Invite a Friend
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/start_selling?source=footer"
                              >
                                 Become a Seller
                              </a>
                           </li>
                        </ul>
                     </div>
                  </article>
               </div>
               <div className="col-span-1 mt-8 umd:mt-0">
                  <article>
                     <div className="pb-5">
                        <div className="gGrmDAw">
                           <h6 className="font-semibold text-secondary">
                              More From Fiverr
                           </h6>
                        </div>
                     </div>
                     <div>
                        <ul className="flex flex-col gap-3">
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/business?source=footer"
                              >
                                 Fiverr Business
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/pro?source=footer"
                              >
                                 Fiverr Pro
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/studios?source=footer"
                              >
                                 Fiverr Studios
                              </a>
                           </li>
                           <li>
                              <a
                                 className="hover:underline"
                                 href="/logo-maker?source=footer"
                              >
                                 Fiverr Logo Maker
                              </a>
                           </li>
                           <li>
                              <a
                                 href="/resources/guides?source=footer"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Fiverr Guides
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://discover.fiverr.com?utm_source=fiverrutm_medium=linkutm_content=footer_link"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Get Inspired
                              </a>
                           </li>
                           <li>
                              <a
                                 href="/select?source=footer"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Fiverr Select
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://www.clearvoice.com"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 ClearVoice
                                 <p className="text-sm opacity-70">
                                    Content Marketing
                                 </p>
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://workspace.fiverr.com/?utm_source=fiverrutm_medium=marketing_siteutm_content=footer_fib"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Fiverr Workspace
                                 <p className="text-sm opacity-70">
                                    Invoice Software
                                 </p>
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://learn.fiverr.com"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Learn
                                 <p className="text-sm opacity-70">
                                    Online Courses
                                 </p>
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://workingnotworking.com"
                                 target="_blank"
                                 className="hover:underline"
                              >
                                 Working Not Working
                              </a>
                           </li>
                        </ul>
                     </div>
                  </article>
               </div>
            </div>
            <div className="flex justify-between border-t border-[#e4e5e7] pt-5">
               <div className="flex gap-4 left">
                  <span className="fiverr-logo-footer">
                     <svg
                        width="77"
                        height="22"
                        viewBox="0 0 91 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <g fill="#7A7D85">
                           <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
                        </g>
                        <g fill="#7A7D85">
                           <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
                        </g>
                     </svg>
                  </span>
                  <p className="text-body-2 legal">
                     <span className="text-[#b5b6ba] text-sm">
                        &#169; Fiverr International Ltd. 2022
                     </span>
                  </p>
               </div>
               <div className="flex gap-8 right">
                  <ul className="flex items-center gap-4 social text=[#74767e]">
                     <li className="hover:bg-[#efeff0] hover:rounded-full p-2">
                        <a href="https://twitter.com/fiverr" target="_blank">
                           <IoLogoTwitter className="text-2xl" />
                        </a>
                     </li>
                     <li className="hover:bg-[#efeff0] hover:rounded-full p-2">
                        <a
                           href="https://www.facebook.com/Fiverr/"
                           target="_blank"
                           className=""
                        >
                           <IoLogoFacebook className="text-2xl" />
                        </a>
                     </li>
                     <li className="hover:bg-[#efeff0] hover:rounded-full p-2">
                        <a
                           href="https://www.linkedin.com/company/fiverr-com"
                           target="_blank"
                           className=""
                        >
                           <IoLogoLinkedin className="text-2xl" />
                        </a>
                     </li>
                     <li className="hover:bg-[#efeff0] hover:rounded-full p-2">
                        <a
                           href="https://www.pinterest.com/fiverr/"
                           target="_blank"
                           className=""
                        >
                           <IoLogoPinterest className="text-2xl" />
                        </a>
                     </li>
                     <li className="hover:bg-[#efeff0] hover:rounded-full p-2">
                        <a
                           href="https://www.instagram.com/fiverr/"
                           target="_blank"
                           className=""
                        >
                           <IoLogoInstagram className="text-2xl" />
                        </a>
                     </li>
                  </ul>
                  <section className="flex items-center gap-4 settings-buttons">
                     <button className="flex items-center gap-1 hover:bg-[#efeff0] hover:rounded-full p-2">
                        <IoGlobeOutline />
                        <span className="text-sm font-semibold">English</span>
                     </button>
                     <button className="text-sm font-semibold hover:bg-[#efeff0] hover:rounded-full p-2">
                        $ USD
                     </button>
                     <button className="accessibility-button">
                        <span className="w-8 h-8 hover:fill-[#404145] group">
                           <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <circle
                                 cx="16"
                                 cy="16"
                                 r="15.5"
                                 fill="white"
                                 stroke="currentColor"
                                 className="circle-wrapper"
                              ></circle>
                              <path d="M16 11.5833C17.1506 11.5833 18.0834 10.6506 18.0834 9.49999C18.0834 8.3494 17.1506 7.41666 16 7.41666C14.8494 7.41666 13.9167 8.3494 13.9167 9.49999C13.9167 10.6506 14.8494 11.5833 16 11.5833Z"></path>
                              <path d="M23.9167 12.4167H8.08333C7.86232 12.4167 7.65036 12.5045 7.49408 12.6607C7.3378 12.817 7.25 13.029 7.25 13.25C7.25 13.471 7.3378 13.683 7.49408 13.8392C7.65036 13.9955 7.86232 14.0833 8.08333 14.0833H13.5V25.5417C13.5 25.8179 13.6097 26.0829 13.8051 26.2782C14.0004 26.4736 14.2654 26.5833 14.5417 26.5833C14.8179 26.5833 15.0829 26.4736 15.2782 26.2782C15.4736 26.0829 15.5833 25.8179 15.5833 25.5417V19.5H16.4167V25.5417C16.4167 25.8179 16.5264 26.0829 16.7218 26.2782C16.9171 26.4736 17.1821 26.5833 17.4583 26.5833C17.7346 26.5833 17.9996 26.4736 18.1949 26.2782C18.3903 26.0829 18.5 25.8179 18.5 25.5417V14.0833H23.9167C24.1377 14.0833 24.3496 13.9955 24.5059 13.8392C24.6622 13.683 24.75 13.471 24.75 13.25C24.75 13.029 24.6622 12.817 24.5059 12.6607C24.3496 12.5045 24.1377 12.4167 23.9167 12.4167Z"></path>
                           </svg>
                        </span>
                     </button>
                  </section>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
