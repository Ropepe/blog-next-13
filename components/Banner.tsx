const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl lg:spa">Perica's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">Welcome to{" "}
          <span className="underline decoration-4 decoration-[#5793f9]">Every Developer</span>{" "} favourite blog in the Devoshpere
        </h2>
      </div>
      <p></p>
    </div>
  )
}

export default Banner