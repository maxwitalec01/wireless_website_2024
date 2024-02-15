import webworld_office from "../assets/webworld_office2.jpg"


export default function CardWithImage() {
  return (
    <><div class="flex flex-col items-center">
      <h2 class="font-bold text-5xl mt-5 tracking-tight pb-10 pt-20">
        Our Mission
      </h2>
    </div><div className="flex justify-center pb-20">

        <div class=" shadow-2xl  border-2 border-yellow-500 relative flex bg-clip-border rounded-2xl bg-white text-blackshadow-md w-full max-w-[73rem] flex-row">
          <div
            class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={webworld_office}
              alt="card-image" class="object-cover w-full h-full" />
          </div>
          <div class="p-10">
            <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-black">
              At Web World Ireland, we like to keep things simple for our clients, so signing up with us is as easy as picking up the phone and booking your installation with our office staff, or by stopping by our local office directly. We can sign you up, and book your installation in one easy shot. In some limited cases, a line of sight test may need to be carried out at your property prior to installation.
              <br></br><br></br>
              Telephone support is available from Monday to Friday, 9:00am to 9pm & on Saturday from 9am to 1pm. Outside these hours we are available by email: broadband@webworld.ie.
              Quick Install Time: within 2 to 5 working days.
            </p>
            <a href="#" class="inline-block"><button
              class=" bg-yellow-500 flex items-center rounded-xl gap-2 px-6 py-3  text-s font-bold text-center text-black align-middle transition-all  select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-yellow-300"
              type="button">
              Learn More
            </button></a>
          </div>
        </div>
      </div></>

  )
}